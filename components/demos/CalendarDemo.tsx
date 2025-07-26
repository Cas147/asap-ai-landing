"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Users,
  CheckCircle,
  AlertCircle,
  Plus,
  X,
  Edit3,
  Bot,
  User,
  Phone,
  Mail,
} from "lucide-react";

interface TimeSlot {
  id: string;
  start: string;
  end: string;
  available: boolean;
}

interface Appointment {
  id: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  service: string;
  date: string;
  time: string;
  status: "pending" | "confirmed" | "cancelled";
  aiReason?: string;
}

interface BusinessRule {
  id: string;
  name: string;
  value: string;
  type: "buffer" | "duration" | "break";
}

export default function CalendarDemo() {
  const [selectedDate, setSelectedDate] = useState("2024-01-15");
  const [businessRules, setBusinessRules] = useState<BusinessRule[]>([
    { id: "1", name: "Duración por sesión", value: "60", type: "duration" },
    { id: "2", name: "Tiempo de buffer", value: "15", type: "buffer" },
    { id: "3", name: "Hora de almuerzo", value: "12:00-13:00", type: "break" },
  ]);

  const [availability, setAvailability] = useState<TimeSlot[]>([
    { id: "1", start: "09:00", end: "10:00", available: true },
    { id: "2", start: "10:00", end: "11:00", available: true },
    { id: "3", start: "11:00", end: "12:00", available: true },
    { id: "4", start: "12:00", end: "13:00", available: false }, // lunch
    { id: "5", start: "13:00", end: "14:00", available: true },
    { id: "6", start: "14:00", end: "15:00", available: true },
    { id: "7", start: "15:00", end: "16:00", available: true },
    { id: "8", start: "16:00", end: "17:00", available: true },
  ]);

  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: "1",
      clientName: "Juan Pérez",
      clientEmail: "juan@email.com",
      clientPhone: "+1234567890",
      service: "Consulta General",
      date: "2024-01-15",
      time: "10:00",
      status: "confirmed",
      aiReason: "Horario óptimo basado en preferencias del cliente y disponibilidad"
    }
  ]);

  const [bookingForm, setBookingForm] = useState({
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    service: "Consulta General",
    preferredTime: ""
  });

  const [newRule, setNewRule] = useState({ name: "", value: "", type: "duration" as const });
  const [isBooking, setIsBooking] = useState(false);

  const services = [
    "Consulta General",
    "Reunión de Seguimiento",
    "Presentación de Proyecto",
    "Sesión de Estrategia",
    "Revisión de Resultados"
  ];

  const toggleAvailability = (id: string) => {
    setAvailability(prev => 
      prev.map(slot => 
        slot.id === id ? { ...slot, available: !slot.available } : slot
      )
    );
  };

  const addBusinessRule = () => {
    if (newRule.name && newRule.value) {
      const rule: BusinessRule = {
        id: Date.now().toString(),
        ...newRule
      };
      setBusinessRules(prev => [...prev, rule]);
      setNewRule({ name: "", value: "", type: "duration" });
    }
  };

  const removeBusinessRule = (id: string) => {
    setBusinessRules(prev => prev.filter(rule => rule.id !== id));
  };

  const bookAppointment = () => {
    if (!bookingForm.clientName || !bookingForm.clientEmail || !bookingForm.preferredTime) {
      return;
    }

    setIsBooking(true);

    // Simulate AI processing
    setTimeout(() => {
      const aiSelectedTime = findOptimalTime(bookingForm.preferredTime);
      const newAppointment: Appointment = {
        id: Date.now().toString(),
        ...bookingForm,
        date: selectedDate,
        time: aiSelectedTime,
        status: "confirmed",
        aiReason: `IA seleccionó ${aiSelectedTime} por: disponibilidad inmediata, sin conflictos, y respeta el buffer de 15 minutos`
      };

      setAppointments(prev => [...prev, newAppointment]);
      
      // Update availability
      setAvailability(prev =>
        prev.map(slot =>
          slot.start === aiSelectedTime ? { ...slot, available: false } : slot
        )
      );

      setBookingForm({
        clientName: "",
        clientEmail: "",
        clientPhone: "",
        service: "Consulta General",
        preferredTime: ""
      });
      setIsBooking(false);
    }, 2000);
  };

  const findOptimalTime = (preferredTime: string) => {
    // Simple AI logic - find closest available slot to preferred time
    const availableSlots = availability.filter(slot => slot.available);
    
    if (availableSlots.find(slot => slot.start === preferredTime)) {
      return preferredTime;
    }
    
    // Return first available slot if preferred isn't available
    return availableSlots[0]?.start || "09:00";
  };

  const cancelAppointment = (id: string) => {
    setAppointments(prev =>
      prev.map(apt =>
        apt.id === id ? { ...apt, status: "cancelled" } : apt
      )
    );
    
    // Free up the time slot
    const appointment = appointments.find(apt => apt.id === id);
    if (appointment) {
      setAvailability(prev =>
        prev.map(slot =>
          slot.start === appointment.time ? { ...slot, available: true } : slot
        )
      );
    }
  };

  return (
    <div className="relative">
      {/* Demo Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative z-10">
        {/* Business Settings */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 h-[600px] flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">Configuración</h3>
          </div>

          {/* Date Selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Fecha seleccionada
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full bg-gray-700 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          {/* Availability Grid */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-300 mb-3">Disponibilidad</h4>
            <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
              {availability.map((slot) => (
                <button
                  key={slot.id}
                  onClick={() => toggleAvailability(slot.id)}
                  className={`p-2 rounded-lg text-sm transition-all duration-200 ${
                    slot.available
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "bg-red-500/20 text-red-400 border border-red-500/30"
                  }`}
                >
                  {slot.start}-{slot.end}
                </button>
              ))}
            </div>
          </div>

          {/* Business Rules */}
          <div className="flex-1 overflow-y-auto">
            <h4 className="text-sm font-medium text-gray-300 mb-3">Reglas de Negocio</h4>
            <div className="space-y-2 mb-4">
              {businessRules.map((rule) => (
                <div key={rule.id} className="flex items-center justify-between p-2 bg-gray-700/30 rounded-lg">
                  <div>
                    <span className="text-gray-300 text-sm">{rule.name}</span>
                    <p className="text-cyan-400 text-xs">{rule.value}</p>
                  </div>
                  <button
                    onClick={() => removeBusinessRule(rule.id)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Add Rule */}
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Nombre de la regla"
                value={newRule.name}
                onChange={(e) => setNewRule(prev => ({ ...prev, name: e.target.value }))}
                className="w-full bg-gray-600 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Valor"
                  value={newRule.value}
                  onChange={(e) => setNewRule(prev => ({ ...prev, value: e.target.value }))}
                  className="flex-1 bg-gray-600 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
                />
                <button
                  onClick={addBusinessRule}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-2 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Customer Booking Interface */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 h-[600px] flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">Reservar Cita</h3>
          </div>

          {/* Booking Form */}
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Nombre completo
              </label>
              <input
                type="text"
                value={bookingForm.clientName}
                onChange={(e) => setBookingForm(prev => ({ ...prev, clientName: e.target.value }))}
                className="w-full bg-gray-700 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Juan Pérez"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                value={bookingForm.clientEmail}
                onChange={(e) => setBookingForm(prev => ({ ...prev, clientEmail: e.target.value }))}
                className="w-full bg-gray-700 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="juan@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                value={bookingForm.clientPhone}
                onChange={(e) => setBookingForm(prev => ({ ...prev, clientPhone: e.target.value }))}
                className="w-full bg-gray-700 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="+1234567890"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Servicio
              </label>
              <select
                value={bookingForm.service}
                onChange={(e) => setBookingForm(prev => ({ ...prev, service: e.target.value }))}
                className="w-full bg-gray-700 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {services.map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Horario preferido
              </label>
              <select
                value={bookingForm.preferredTime}
                onChange={(e) => setBookingForm(prev => ({ ...prev, preferredTime: e.target.value }))}
                className="w-full bg-gray-700 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Selecciona un horario</option>
                {availability.filter(slot => slot.available).map(slot => (
                  <option key={slot.id} value={slot.start}>
                    {slot.start} - {slot.end}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Booking Button */}
          <button
            onClick={bookAppointment}
            disabled={isBooking || !bookingForm.clientName || !bookingForm.clientEmail || !bookingForm.preferredTime}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isBooking ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                IA procesando reserva...
              </div>
            ) : (
              "Reservar con IA"
            )}
          </button>

          {/* Available Slots Preview */}
          <div className="mt-6 flex-1 overflow-y-auto">
            <h4 className="text-sm font-medium text-gray-300 mb-3">Horarios disponibles</h4>
            <div className="grid grid-cols-2 gap-2">
              {availability.filter(slot => slot.available).map((slot) => (
                <div
                  key={slot.id}
                  className="p-2 bg-green-500/10 border border-green-500/30 rounded-lg text-center"
                >
                  <span className="text-green-400 text-sm">{slot.start}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* AI Scheduling Logic & Confirmations */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 h-[600px] flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">IA Scheduler</h3>
          </div>

          {/* Appointments List */}
          <div className="flex-1 overflow-y-auto">
            <h4 className="text-sm font-medium text-gray-300 mb-3">Citas Programadas</h4>
            <div className="space-y-3">
              {appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className={`p-4 rounded-lg border ${
                    appointment.status === "confirmed"
                      ? "bg-green-500/10 border-green-500/30"
                      : appointment.status === "cancelled"
                      ? "bg-red-500/10 border-red-500/30"
                      : "bg-yellow-500/10 border-yellow-500/30"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h5 className="font-medium text-white">{appointment.clientName}</h5>
                      <p className="text-sm text-gray-300">{appointment.service}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {appointment.status === "confirmed" && (
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      )}
                      {appointment.status === "cancelled" && (
                        <X className="w-4 h-4 text-red-400" />
                      )}
                      {appointment.status === "confirmed" && (
                        <button
                          onClick={() => cancelAppointment(appointment.id)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-400 mb-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {appointment.date} a las {appointment.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      {appointment.clientEmail}
                    </div>
                  </div>

                  {appointment.aiReason && (
                    <div className="mt-2 p-2 bg-gray-700/30 rounded text-xs text-gray-300">
                      <strong>IA:</strong> {appointment.aiReason}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* AI Insights */}
          <div className="mt-6 p-4 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/20">
            <h4 className="text-sm font-medium text-white mb-2">Insights de IA</h4>
            <div className="text-xs text-gray-300 space-y-1">
              <p>• {appointments.filter(a => a.status === "confirmed").length} citas confirmadas</p>
              <p>• {availability.filter(s => s.available).length} slots disponibles</p>
              <p>• Tasa de ocupación: {Math.round(((8 - availability.filter(s => s.available).length) / 8) * 100)}%</p>
              <p>• Próxima disponibilidad: {availability.find(s => s.available)?.start || "No disponible"}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Connection Lines */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Line from settings to booking */}
          <motion.line
            x1="25"
            y1="50"
            x2="50"
            y2="50"
            stroke="rgb(6, 182, 212)"
            strokeWidth="0.2"
            strokeDasharray="2,2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
          {/* Line from booking to AI */}
          <motion.line
            x1="50"
            y1="50"
            x2="75"
            y2="50"
            stroke="rgb(6, 182, 212)"
            strokeWidth="0.2"
            strokeDasharray="2,2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
          />
        </svg>
      </div>

      {/* Instructions */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-12 text-center"
      >
        <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
          <h4 className="text-2xl font-bold text-white mb-4">
            ¿Cómo funciona?
          </h4>
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
            1. Configura tu disponibilidad y reglas de negocio
            <br />
            2. Los clientes reservan citas a través de la interfaz
            <br />
            3. La IA encuentra el horario óptimo automáticamente
            <br />
            4. Ve confirmaciones y gestiona citas en tiempo real
          </p>
        </div>
      </motion.div>
    </div>
  );
} 