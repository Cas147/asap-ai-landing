import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { question, data } = await request.json()

    if (!question || !data) {
      return NextResponse.json(
        { error: 'Question and data are required' },
        { status: 400 }
      )
    }

    // Format the data for analysis
    const dataString = JSON.stringify(data, null, 2)
    
    const prompt = `Eres un analista de datos profesional. Analiza los siguientes datos y responde la pregunta del usuario en español.

Datos:
${dataString}

Pregunta del usuario: ${question}

Proporciona una respuesta clara y concisa basada en los datos. Incluye números específicos, tendencias e insights. Mantén tu respuesta profesional pero conversacional, máximo 3-4 frases.

Si la pregunta es sobre tendencias, cálculos, comparaciones o patrones, asegúrate de proporcionar ejemplos específicos de los datos. Formatea los números claramente y explica qué significan en contexto empresarial.`

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "Eres un asistente de análisis de datos IA experto. Proporcionas análisis claros y precisos de datos con insights específicos y recomendaciones accionables. Siempre respondes en español de forma concisa."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 150,
      temperature: 0.7,
    })

    const response = completion.choices[0]?.message?.content || "I couldn't analyze the data at this time."

    return NextResponse.json({ response })
  } catch (error) {
    console.error('Error analyzing data:', error)
    return NextResponse.json(
      { error: 'Failed to analyze data' },
      { status: 500 }
    )
  }
} 