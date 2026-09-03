import { useState } from 'react'
import { Calendar, CheckCircle2, Send } from 'lucide-react'

export const AppointmentSection = () => {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    doctor: 'Dr. Nasir Ahmed, M.D. (Pediatrics Ages 0–18)',
    visitType: 'Well-Child Checkup / Routine Visit',
    preferredTime: 'Morning (9:00 AM – 12:00 PM)',
    notes: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="site-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-wide uppercase mb-3">
            <Calendar className="w-3.5 h-3.5 text-sky-600" />
            <span>Connect With Our Reception Desk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Request an Appointment or Callback
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Submit your appointment preferences below or call us directly at{' '}
            <a href="tel:3864541156" className="text-sky-700 font-bold underline">
              (386) 454-1156
            </a>{' '}
            for guaranteed same-day sick scheduling.
          </p>
        </div>

        {/* Centered Modern Medical Form */}
        <div className="max-w-2xl mx-auto bg-slate-50/80 border border-slate-200 rounded-3xl p-6 sm:p-9 shadow-sm">
          {submitted ? (
            <div className="py-12 px-4 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                Appointment Request Received
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                Thank you, <strong>{formData.name || 'Patient'}</strong>. Our High Springs medical reception staff will review your requested time and call{' '}
                <strong>{formData.phone || 'your phone'}</strong> shortly to confirm your scheduled slot.
              </p>
              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 text-xs text-sky-900 max-w-md mx-auto mb-6">
                <strong>Urgent Sick Visit?</strong> If your child is running a high fever or feeling acutely ill today, please call us directly at{' '}
                <a href="tel:3864541156" className="font-bold underline text-sky-700">
                  (386) 454-1156
                </a>.
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-all cursor-pointer"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="border-b border-slate-200 pb-3 mb-2">
                <h3 className="text-lg font-black text-slate-900">Patient &amp; Scheduling Details</h3>
                <p className="text-xs text-slate-500">All information is kept strictly confidential and secure.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Patient / Parent Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Smith"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all placeholder:text-slate-400"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(386) 454-0000"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Select Doctor */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Select Physician *
                  </label>
                  <select
                    value={formData.doctor}
                    onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-xs sm:text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
                  >
                    <option value="Dr. Nasir Ahmed, M.D. (Pediatrics Ages 0–18)">
                      Dr. Nasir Ahmed, M.D. (Pediatrics 0–18)
                    </option>
                    <option value="Dr. Ramin Ahmad, M.D. (Adult Primary Care)">
                      Dr. Ramin Ahmad, M.D. (Adult Primary Care)
                    </option>
                  </select>
                </div>

                {/* Visit Type */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Visit Reason *
                  </label>
                  <select
                    value={formData.visitType}
                    onChange={(e) => setFormData({ ...formData, visitType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-xs sm:text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
                  >
                    <option value="Well-Child Checkup / Routine Visit">Well-Child Checkup (Pediatrics)</option>
                    <option value="Same-Day Sick Child Visit">Same-Day Sick Child Visit</option>
                    <option value="Newborn Milestone Follow-up">Newborn Hospital Follow-up</option>
                    <option value="Adult Annual Physical Exam">Adult Annual Physical (Internal Med)</option>
                    <option value="Chronic Condition Follow-up">Hypertension / Diabetes Check</option>
                    <option value="School / Sports Clearance Physical">School or Sports Physical</option>
                    <option value="Vaccination or Lab Test Only">Vaccines or Lab Testing</option>
                  </select>
                </div>
              </div>

              {/* Preferred Window */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Preferred Time Window
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-xs sm:text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
                >
                  <option value="Morning (9:00 AM – 12:00 PM)">Morning (9:00 AM – 12:00 PM)</option>
                  <option value="Early Afternoon (1:00 PM – 3:00 PM)">Early Afternoon (1:00 PM – 3:00 PM)</option>
                  <option value="Late Afternoon (3:00 PM – 5:00 PM)">Late Afternoon (3:00 PM – 5:00 PM)</option>
                  <option value="First Available Any Time">First Available Any Time</option>
                </select>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Brief Notes or Symptoms (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Mention any symptoms, child's age, or specific questions for our medical team..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-sky-700 hover:bg-sky-800 text-white font-bold text-sm sm:text-base shadow-sm active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Appointment Request</span>
              </button>

              <p className="text-[11px] text-center text-slate-500">
                Our office staff contacts patients within clinic hours (Mon–Fri 9am–5pm) to confirm specific times.
              </p>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}

export default AppointmentSection
