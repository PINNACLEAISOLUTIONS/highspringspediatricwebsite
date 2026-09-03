import { Download, CheckCircle2, Baby, UserCheck, ShieldCheck, FileText } from 'lucide-react'
import childPacketPdf from '../assets/new_child_packet.pdf'
import adultFormPdf from '../assets/adult_new_patient_form.pdf'

export const PatientForms = () => {
  return (
    <section id="forms" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="site-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-wide uppercase mb-3">
            <FileText className="w-3.5 h-3.5 text-sky-600" />
            <span>Save Waiting Room Time</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Patient Registration &amp; Intake Forms
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Download, print, and complete your registration packet prior to arrival so our doctors can focus on your care immediately.
          </p>
        </div>

        {/* Download Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-14 items-stretch">
          
          {/* Pediatric Packet */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-sky-700 text-white flex items-center justify-center shadow-sm">
                  <Baby className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                  Pediatrics (0–18)
                </span>
              </div>

              <div className="text-xs font-bold text-sky-800 uppercase tracking-wider mb-1">
                Dr. Nasir Ahmed, M.D.
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">
                Child Registration Packet (PDF)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                Official intake document for newborns, infants, children, and teenagers. Covers medical background, developmental milestones, immunization history, and parental consent.
              </p>

              <div className="space-y-2 mb-8 bg-slate-50 rounded-2xl p-4 border border-slate-100 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-700 flex-shrink-0" />
                  <span>Child health history &amp; allergies</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-700 flex-shrink-0" />
                  <span>Immunization records release</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-700 flex-shrink-0" />
                  <span>Parental treatment authorization</span>
                </div>
              </div>
            </div>

            <a
              href={childPacketPdf}
              download="High_Springs_Pediatrics_Child_Registration_Packet.pdf"
              className="inline-flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl bg-sky-700 hover:bg-sky-800 text-white font-bold text-sm sm:text-base shadow-sm active:scale-95 transition-all"
            >
              <Download className="w-5 h-5" />
              <span>Download Child Packet (PDF)</span>
            </a>
          </div>

          {/* Adult Form */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-sky-700 text-white flex items-center justify-center shadow-sm">
                  <UserCheck className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                  Adults &amp; Seniors
                </span>
              </div>

              <div className="text-xs font-bold text-sky-800 uppercase tracking-wider mb-1">
                Dr. Ramin Ahmad, M.D.
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">
                Adult New Patient Form (PDF)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                Official intake document for internal medicine and primary adult care. Covers cardiovascular health, hypertension, diabetes management, and prescription review.
              </p>

              <div className="space-y-2 mb-8 bg-slate-50 rounded-2xl p-4 border border-slate-100 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-700 flex-shrink-0" />
                  <span>Comprehensive chronic disease history</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-700 flex-shrink-0" />
                  <span>Prescription &amp; allergy medication review</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-700 flex-shrink-0" />
                  <span>Medicare / Commercial insurance authorization</span>
                </div>
              </div>
            </div>

            <a
              href={adultFormPdf}
              download="High_Springs_Primary_Care_Adult_Intake_Form.pdf"
              className="inline-flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl bg-sky-700 hover:bg-sky-800 text-white font-bold text-sm sm:text-base shadow-sm active:scale-95 transition-all"
            >
              <Download className="w-5 h-5" />
              <span>Download Adult Form (PDF)</span>
            </a>
          </div>

        </div>

        {/* What to Bring Checklist */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/80 max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-slate-900 font-black text-lg mb-4">
            <ShieldCheck className="w-5 h-5 text-sky-600" />
            <span>Checklist: What to Bring on Your First Appointment</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm">
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80">
              <span className="font-bold text-slate-900 block mb-1">1. Photo ID</span>
              <span className="text-slate-500">Government driver’s license or passport for parent or adult patient.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80">
              <span className="font-bold text-slate-900 block mb-1">2. Insurance Cards</span>
              <span className="text-slate-500">Physical card or digital policy verification from your insurer.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80">
              <span className="font-bold text-slate-900 block mb-1">3. Vaccine Records</span>
              <span className="text-slate-500">Previous child immunization certificates (DH 680 or yellow card).</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80">
              <span className="font-bold text-slate-900 block mb-1">4. Medication List</span>
              <span className="text-slate-500">List of all current medications, inhalers, vitamins, and dosages.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default PatientForms
