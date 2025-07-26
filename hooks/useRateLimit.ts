import { useState, useEffect } from 'react'

const DAILY_LIMIT = 5

interface DailyUsage {
  count: number
  date: string
}

export function useRateLimit(componentId: string) {
  const STORAGE_KEY = `asap_ai_daily_usage_${componentId}`
  const [remainingUses, setRemainingUses] = useState(DAILY_LIMIT)
  const [isLimitReached, setIsLimitReached] = useState(false)

  useEffect(() => {
    const today = new Date().toDateString()
    const stored = localStorage.getItem(STORAGE_KEY)
    
    if (stored) {
      try {
        const usage: DailyUsage = JSON.parse(stored)
        
        // If it's a new day, reset the count
        if (usage.date !== today) {
          const newUsage: DailyUsage = { count: 0, date: today }
          localStorage.setItem(STORAGE_KEY, JSON.stringify(newUsage))
          setRemainingUses(DAILY_LIMIT)
          setIsLimitReached(false)
        } else {
          // Same day, use existing count
          const remaining = DAILY_LIMIT - usage.count
          setRemainingUses(remaining)
          setIsLimitReached(remaining <= 0)
        }
      } catch {
        // If storage is corrupted, reset
        const newUsage: DailyUsage = { count: 0, date: today }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newUsage))
        setRemainingUses(DAILY_LIMIT)
        setIsLimitReached(false)
      }
    } else {
      // No previous usage, start fresh
      const newUsage: DailyUsage = { count: 0, date: today }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newUsage))
      setRemainingUses(DAILY_LIMIT)
      setIsLimitReached(false)
    }
  }, [])

  const incrementUsage = () => {
    const today = new Date().toDateString()
    const stored = localStorage.getItem(STORAGE_KEY)
    
    if (stored) {
      try {
        const usage: DailyUsage = JSON.parse(stored)
        const newCount = usage.count + 1
        const newUsage: DailyUsage = { count: newCount, date: today }
        
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newUsage))
        
        const remaining = DAILY_LIMIT - newCount
        setRemainingUses(remaining)
        setIsLimitReached(remaining <= 0)
        
        return remaining > 0
      } catch {
        return false
      }
    }
    return false
  }

  const canMakeRequest = () => {
    return remainingUses > 0 && !isLimitReached
  }

  return {
    remainingUses,
    isLimitReached,
    canMakeRequest,
    incrementUsage,
    dailyLimit: DAILY_LIMIT
  }
} 