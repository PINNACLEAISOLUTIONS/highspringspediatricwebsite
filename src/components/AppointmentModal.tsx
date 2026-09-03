import { useState, useEffect } from 'react'
import { X, Calendar, Phone, CheckCircle2, Send } from 'lucide-react'

interface AppointmentModalProps {
  isOpen: boolean
  onClose: () => void
  initialDoctor?: string
}

export const AppointmentModal = ({
  isOpen,
  onClose,
  initialDoctor = 'Dr. Nasir Ahmed, M.D. (Pediatrics Ages 0–18)',
}: AppointmentModalProps) => {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [doctor, setDoctor] = useState(initialDoctor)
  const [reason, setReason] = useState('Well-Child Checkup / Routine Visit')
  const [time, setTime] = useState('Morning (9:00 AM – 12:00 PM)')
  const [notes, setNotes] = useState('')

  useEffect(() => {
    if (initialDoctor) {
      setDoctor(initialDoctor)
    }
  }, [initialDoctor])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleResetAndClose = () => {
    setSubmitted(false)
    setName('')
    setPhone('')
    setNotes('')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon - Solid Medical Blue */}
        <div className="bg-sky-700 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <h3 className="font-extrabold text-base sm:text-lg">Request an Appointment</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7 max-h-[85vh] overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-2">Request Received!</h4>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Thank you, <strong>{name}</strong>. Our High Springs clinic team will call you at{' '}
                <strong>{phone}</strong> shortly to confirm your scheduled slot.
              </p>
              <div className="p-3.5 bg-sky-50 rounded-xl text-xs text-sky-900 mb-6">
                <strong>Need Same-Day Sick Care?</strong> Call our direct desk at{' '}
                <a href="tel:3864541156" className="font-bold underline text-sky-700">
                  (386) 454-1156
                </a>.
              </div>
              <button
                onClick={handleResetAndClose}
                className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-all cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-slate-600 mb-1">
                Enter your contact info and preferred physician. We will contact you promptly to finalize your date and time.
              </p>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Patient / Parent Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(386) 454-0000"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Physician *
                  </label>
                  <select
                    value={doctor}
                    onChange={(e) => setDoctor(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-medium outline-none focus:border-sky-500 bg-white"
                  >
                    <option value="Dr. Nasir Ahmed, M.D. (Pediatrics Ages 0–18)">
                      Dr. Nasir Ahmed (Pediatrics 0–18)
                    </option>
                    <option value="Dr. Ramin Ahmad, M.D. (Adult Primary Care)">
                      Dr. Ramin Ahmad (Adult Primary Care)
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Visit Type *
                  </label>
                  <select
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-medium outline-none focus:border-sky-500 bg-white"
                  >
                    <option value="Well-Child Checkup / Routine Visit">Well-Child / Routine Visit</option>
                    <option value="Same-Day Sick Visit">Same-Day Sick Child Visit</option>
                    <option value="Newborn Milestone Follow-up">Newborn Hospital Follow-up</option>
                    <option value="Adult Annual Physical Exam">Adult Annual Physical</option>
                    <option value="Chronic Condition Follow-up">Hypertension / Diabetes Check</option>
                    <option value="School / Sports Physical">School or Sports Physical</option>
                    <option value="Vaccines or Lab Test">Vaccination or Lab Test</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Preferred Time Window
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-medium outline-none focus:border-sky-500 bg-white"
                >
                  <option value="Morning (9:00 AM – 12:00 PM)">Morning (9:00 AM – 12:00 PM)</option>
                  <option value="Early Afternoon (1:00 PM – 3:00 PM)">Early Afternoon (1:00 PM – 3:00 PM)</option>
                  <option value="Late Afternoon (3:00 PM – 5:00 PM)">Late Afternoon (3:00 PM – 5:00 PM)</option>
                  <option value="First Available Any Time">First Available Any Time</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Brief Note (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Child's age, symptom overview, or special requests..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs outline-none focus:border-sky-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-bold text-sm shadow-sm active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Request</span>
              </button>

              <div className="pt-2 text-center">
                <a
                  href="tel:3864541156"
                  className="text-xs font-bold text-teal-700 hover:text-teal-900 inline-flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Or call immediately: (386) 454-1156</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default AppointmentModal
