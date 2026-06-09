import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Calendar, Phone, Mail, User, Clock, FileText, Trash2 } from 'lucide-react';
import { ConsultationRequest } from '../types';

export default function ConsultationForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [areaOfConcern, setAreaOfConcern] = useState('Chiropractic & Spine Decompression');
  const [preferredSlot, setPreferredSlot] = useState('Evening (05:00 PM - 08:30 PM)');
  const [message, setMessage] = useState('');
  
  const [appointments, setAppointments] = useState<ConsultationRequest[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [recentAppointment, setRecentAppointment] = useState<ConsultationRequest | null>(null);

  // Load existing requests
  useEffect(() => {
    const saved = localStorage.getItem('vizwa_consultations');
    if (saved) {
      try {
        setAppointments(JSON.parse(saved));
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !telephone) {
      alert('Please fill out all required fields.');
      return;
    }

    const newRequest: ConsultationRequest = {
      id: 'apt-' + Date.now(),
      fullName,
      email,
      telephone,
      areaOfConcern,
      preferredSlot,
      message,
      status: 'confirmed', // Automatically confirm in prototype context
      createdAt: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    const updated = [newRequest, ...appointments];
    setAppointments(updated);
    localStorage.setItem('vizwa_consultations', JSON.stringify(updated));

    setRecentAppointment(newRequest);
    setShowSuccess(true);

    // Reset fields
    setFullName('');
    setEmail('');
    setTelephone('');
    setMessage('');
  };

  const handleDelete = (id: string) => {
    const filtered = appointments.filter(appt => appt.id !== id);
    setAppointments(filtered);
    localStorage.setItem('vizwa_consultations', JSON.stringify(filtered));
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      {/* Forms column (7 cols on desktop) */}
      <div className="lg:col-span-7">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          {/* Full Name Bottom Border Field */}
          <div className="relative group">
            <label className="block text-[11px] font-mono text-[#78716C] uppercase tracking-widest mb-1">
              Full Name *
            </label>
            <div className="flex items-center gap-3">
              <User size={16} className="text-[#8C7A6B] shrink-0" />
              <input
                id="form-fullname"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your complete legal name"
                className="w-full bg-transparent border-b border-[#E7E2D9] py-3 text-[#1C1917] font-sans font-normal text-base placeholder-[#A19E95] focus:outline-none focus:border-[#8C7A6B] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email Bottom Border Field */}
            <div className="relative">
              <label className="block text-[11px] font-mono text-[#78716C] uppercase tracking-widest mb-1">
                Email Address *
              </label>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#8C7A6B] shrink-0" />
                <input
                  id="form-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="w-full bg-transparent border-b border-[#E7E2D9] py-3 text-[#1C1917] font-sans font-normal text-base placeholder-[#A19E95] focus:outline-none focus:border-[#8C7A6B] transition-colors"
                />
              </div>
            </div>

            {/* Telephone Bottom Border Field */}
            <div className="relative">
              <label className="block text-[11px] font-mono text-[#78716C] uppercase tracking-widest mb-1">
                Telephone *
              </label>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#8C7A6B] shrink-0" />
                <input
                  id="form-telephone"
                  type="tel"
                  required
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full bg-transparent border-b border-[#E7E2D9] py-3 text-[#1C1917] font-sans font-normal text-base placeholder-[#A19E95] focus:outline-none focus:border-[#8C7A6B] transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Area of Concern Select */}
            <div className="relative">
              <label className="block text-[11px] font-mono text-[#78716C] uppercase tracking-widest mb-2">
                Specialized Service Requested
              </label>
              <div className="flex items-center gap-3 bg-[#FAF8F5] border border-[#E7E2D9] rounded-sm p-3 focus-within:border-[#8C7A6B]">
                <FileText size={16} className="text-[#8C7A6B] shrink-0" />
                <select
                  id="form-concern"
                  value={areaOfConcern}
                  onChange={(e) => setAreaOfConcern(e.target.value)}
                  className="w-full bg-transparent text-sm text-[#1C1917] font-sans outline-none cursor-pointer"
                >
                  <option value="Chiropractic & Spine Decompression">Chiropractic & Spine Decompression</option>
                  <option value="Orthopedic Rehabilitation">Orthopedic Rehabilitation</option>
                  <option value="Sports Medicine & Dry Needling">Sports Medicine & Dry Needling</option>
                  <option value="Neuro-Physiotherapy">Neuro-Physiotherapy</option>
                </select>
              </div>
            </div>

            {/* Preferred Time Slot Select */}
            <div className="relative">
              <label className="block text-[11px] font-mono text-[#78716C] uppercase tracking-widest mb-2">
                Preferred Consultation Window
              </label>
              <div className="flex items-center gap-3 bg-[#FAF8F5] border border-[#E7E2D9] rounded-sm p-3 focus-within:border-[#8C7A6B]">
                <Clock size={16} className="text-[#8C7A6B] shrink-0" />
                <select
                  id="form-timeslot"
                  value={preferredSlot}
                  onChange={(e) => setPreferredSlot(e.target.value)}
                  className="w-full bg-transparent text-sm text-[#1C1917] font-sans outline-none cursor-pointer"
                >
                  <option value="Morning (09:00 AM - 12:00 PM)">Morning (09:00 AM - 12:00 PM)</option>
                  <option value="Afternoon (01:00 PM - 04:30 PM)">Afternoon (01:00 PM - 04:30 PM)</option>
                  <option value="Evening (05:00 PM - 08:30 PM)">Evening (05:00 PM - 08:30 PM)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Message Area */}
          <div className="relative">
            <label className="block text-[11px] font-mono text-[#78716C] uppercase tracking-widest mb-1">
              Physiotherapy History & Symptoms (Optional)
            </label>
            <div className="flex items-start gap-3">
              <FileText size={16} className="text-[#8C7A6B] shrink-0 mt-3.5" />
              <textarea
                id="form-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us in your own words, what pain heights, posture problems, or recovery goals you would like to discuss..."
                rows={3}
                className="w-full bg-transparent border-b border-[#E7E2D9] py-3 text-[#1C1917] font-sans font-normal text-base placeholder-[#A19E95] focus:outline-none focus:border-[#8C7A6B] transition-colors resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-4">
            <button
              id="form-submit-btn"
              type="submit"
              className="bg-[#1C1917] text-[#FAF9F6] border border-[#1C1917] px-8 py-4 font-mono text-xs tracking-widest uppercase transition-all duration-300 hover:bg-transparent hover:text-[#1C1917] focus:outline-none w-full md:w-auto"
            >
              Send Request →
            </button>
          </div>
        </form>
      </div>

      {/* Appointment History Column (5 cols on desktop) */}
      <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[#E7E2D9] pt-12 lg:pt-0 lg:pl-12">
        <h3 className="font-sans text-xl font-light text-[#1C1917] mb-6">
          Your Booking Activity
        </h3>

        {appointments.length === 0 ? (
          <div className="border border-dashed border-[#E7E2D9] rounded p-6 text-center bg-[#FAF8F5]">
            <Calendar className="mx-auto mb-3 text-[#A19E95]" size={36} />
            <p className="font-sans text-sm text-[#78716C] italic">
              No recent appointment requests found on this device. Use the form to file your request.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4 max-h-[380px] overflow-y-auto pr-1">
            {appointments.map((appt) => (
              <div 
                key={appt.id}
                className="relative border border-[#E7E2D9] bg-white p-4 rounded flex flex-col gap-2.5 transition-shadow hover:shadow-xs group"
                id={`appt-card-${appt.id}`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-sans font-medium text-xs text-[#1C1917] uppercase tracking-wider">
                      {appt.fullName}
                    </h4>
                    <p className="font-mono text-[9px] text-[#A19E95] mt-0.5">
                      Flipped: {appt.createdAt}
                    </p>
                  </div>
                  <button 
                    onClick={() => handleDelete(appt.id)}
                    className="text-[#A19E95] hover:text-red-500 transition-colors p-1"
                    title="Delete entry"
                    id={`delete-appt-${appt.id}`}
                  >
                    <Trash2 size={13} />
                  </button>
                </div>

                <div className="border-t border-dashed border-[#FAF8F5] pt-2 flex flex-col gap-1 text-xs text-[#57534E]">
                  <div className="flex items-center gap-1.5 font-sans font-light">
                    <span className="font-mono text-[10px] text-[#918175] w-20 shrink-0">SERVICE:</span>
                    <span className="truncate">{appt.areaOfConcern}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-sans font-light">
                    <span className="font-mono text-[10px] text-[#918175] w-20 shrink-0">WINDOW:</span>
                    <span>{appt.preferredSlot}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-sans font-light">
                    <span className="font-mono text-[10px] text-[#918175] w-20 shrink-0">PHONE:</span>
                    <span>{appt.telephone}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 self-start bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-mono text-[9px] uppercase font-semibold">
                  <Check size={8} strokeWidth={3} />
                  Confirmed (Auto)
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 bg-[#FAF8F5] border border-[#E7E2D9] rounded p-5 font-sans text-xs text-[#57534E] leading-relaxed">
          <p className="font-mono text-[9px] text-[#8C7A6B] uppercase tracking-wider mb-2 font-semibold">
            Clinical Protocols NOTICE
          </p>
          Consultation slots are reserved instantly on confirmation. Dr. Anurag Sahu conducts orthopedic diagnostics personally. If you have active spinal pain or acute sports spasms, please call the clinic directly to schedule an emergency priority slot.
        </div>
      </div>

      {/* Success Modal Dialogue overlay */}
      <AnimatePresence>
        {showSuccess && recentAppointment && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-[#FAF9F6] border border-[#8C7A6B] max-w-md w-full p-8 shadow-2xl relative"
            >
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-300 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check size={24} />
              </div>

              <h3 className="font-sans text-2xl font-light text-[#1C1917] text-center mb-1">
                Consultation Blocked
              </h3>
              <p className="font-mono text-[10px] text-[#8C7A6B] uppercase tracking-widest text-center mb-6">
                Appointment Scheduled Perfectly
              </p>

              <div className="bg-white border border-[#E7E2D9] p-4 rounded text-xs text-[#57534E] flex flex-col gap-2 font-sans font-light">
                <div className="flex justify-between border-b border-[#FAF8F5] pb-1.5 font-medium">
                  <span className="font-mono text-[9px] text-[#78716C] uppercase">Reference ID:</span>
                  <span className="text-[#1C1917]">{recentAppointment.id}</span>
                </div>
                <div className="flex justify-between border-b border-[#FAF8F5] pb-1.5">
                  <span className="font-mono text-[9px] text-[#78716C] uppercase">Patient:</span>
                  <span className="text-[#1C1917] font-medium">{recentAppointment.fullName}</span>
                </div>
                <div className="flex justify-between border-b border-[#FAF8F5] pb-1.5">
                  <span className="font-mono text-[9px] text-[#78716C] uppercase">Service:</span>
                  <span className="text-[#1C1917]">{recentAppointment.areaOfConcern}</span>
                </div>
                <div className="flex justify-between border-b border-[#FAF8F5] pb-1.5">
                  <span className="font-mono text-[9px] text-[#78716C] uppercase">Time Window:</span>
                  <span className="text-[#1C1917] font-medium">{recentAppointment.preferredSlot}</span>
                </div>
              </div>

              <p className="font-sans text-xs text-[#78716C] italic text-center mt-6">
                Dr. Anurag Sahu and of orthopedic specialists will see you during the booked window. A conformation has also been saved to your local browser storage.
              </p>

              <button
                onClick={() => setShowSuccess(false)}
                className="mt-6 w-full bg-[#1C1917] text-white py-3 font-mono text-xs tracking-widest uppercase transition-colors hover:bg-[#8C7A6B]"
              >
                Return to Clinic Page
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
