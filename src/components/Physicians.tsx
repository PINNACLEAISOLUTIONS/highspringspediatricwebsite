import { Calendar, CheckCircle2, GraduationCap, Building2, Stethoscope, Heart, Shield } from 'lucide-react'
import drNasirImg from '../assets/staff1.jpg'
import drRaminImg from '../assets/dr_ramin_ahmad.jpg'

interface PhysiciansProps {
  onOpenAppointmentModal: (defaultDoctor?: string) => void
}

export const Physicians = ({ onOpenAppointmentModal }: PhysiciansProps) => {
  return (
    <section id="physicians" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-wide uppercase mb-3">
            <Stethoscope className="w-3.5 h-3.5 text-sky-600" />
            <span>Father &amp; Son Physician Practice</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Meet Our Dedicated Physicians
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            For over two decades, the Ahmed family has delivered compassionate, unhurried healthcare in High Springs. Our dual-specialty practice provides continuous care from newborn milestones to senior adult health.
          </p>
        </div>

        {/* Physicians Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* Card 1: Dr. Nasir Ahmed (Pediatrics) */}
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
            
            {/* Top Accent - Solid Medical Blue */}
            <div className="absolute top-0 inset-x-0 h-1 bg-sky-700" />

            <div>
              {/* Header with Photo and Core Details */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6 text-center sm:text-left">
                {/* Doctor Photo */}
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden ring-4 ring-sky-100 border-2 border-sky-300 shadow-md flex-shrink-0 bg-slate-100">
                  <img
                    src={drNasirImg}
                    alt="Dr. Nasir Ahmed, M.D. - Pediatrician"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 to-transparent py-1 px-2 text-center">
                    <span className="text-[10px] font-bold text-sky-200 uppercase tracking-wide">Founding M.D.</span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold mb-1.5">
                    <span>Pediatrics (Ages 0–18)</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                    Dr. Nasir Ahmed, M.D.
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-sky-700 mt-1">
                    Pediatric Specialist &bull; Founding Physician
                  </p>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    20+ Years Caring for North Central Florida Children
                  </p>
                </div>
              </div>

              {/* Credentials & Training Badges */}
              <div className="space-y-2.5 mb-6 bg-slate-50/80 rounded-2xl p-4 border border-slate-100 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <GraduationCap className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">Fellowships &amp; Residency: </span>
                    Royal Hospitals (UK) Fellowships &bull; West Virginia University Residency
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Heart className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">Specialty Areas: </span>
                    Newborn First-Week Care, Milestones, Childhood Asthma, ADHD, Sick Visits
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Shield className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-teal-800">Commitment: </span>
                    Guaranteed same-day sick appointments so no child suffers waiting
                  </div>
                </div>
              </div>

              {/* Focus List */}
              <ul className="space-y-2 mb-6 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span>Warm, kid-friendly bedside manner that eases children's anxiety</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span>Comprehensive childhood immunizations on CDC-approved schedules</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span>School, sports, and FHSAA camp clearance physicals with signed forms</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-2.5">
              <button
                onClick={() => onOpenAppointmentModal('Dr. Nasir Ahmed, M.D. (Pediatrics Ages 0–18)')}
                className="w-full sm:flex-1 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book with Dr. Nasir</span>
              </button>

              <a
                href="#forms"
                className="w-full sm:w-auto px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition-colors text-center"
              >
                Child Form (PDF)
              </a>
            </div>
          </div>

          {/* Card 2: Dr. Ramin Ahmad (Adult Primary Care) */}
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
            
            {/* Top Accent - Solid Medical Blue */}
            <div className="absolute top-0 inset-x-0 h-1 bg-sky-700" />

            <div>
              {/* Header with Photo and Core Details */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6 text-center sm:text-left">
                {/* Doctor Photo */}
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden ring-4 ring-teal-100 border-2 border-teal-300 shadow-md flex-shrink-0 bg-slate-100">
                  <img
                    src={drRaminImg}
                    alt="Dr. Ramin Ahmad, M.D. - Internal Medicine"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 to-transparent py-1 px-2 text-center">
                    <span className="text-[10px] font-bold text-teal-200 uppercase tracking-wide">Internal Medicine</span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold mb-1.5">
                    <span>Adults &amp; Seniors</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                    Dr. Ramin Ahmad, M.D.
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-teal-700 mt-1">
                    Internal Medicine Specialist
                  </p>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    Comprehensive Adult Healthcare &amp; Chronic Illness Management
                  </p>
                </div>
              </div>

              {/* Credentials & Training Badges */}
              <div className="space-y-2.5 mb-6 bg-slate-50/80 rounded-2xl p-4 border border-slate-100 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <GraduationCap className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">Residency Training: </span>
                    UCF College of Medicine / HCA Healthcare Residency Program
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Building2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">Hospital Privileges: </span>
                    Active staff privileges at HCA Florida North Florida Hospital
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Heart className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">Clinical Focus: </span>
                    Hypertension, Type 2 Diabetes, Preventive Cardiology, Thyroid &amp; Labs
                  </div>
                </div>
              </div>

              {/* Focus List */}
              <ul className="space-y-2 mb-6 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Annual preventive health evaluations and Medicare wellness exams</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Same-day rapid in-office lab panels for cholesterol and metabolic health</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Coordinated care with regional North Florida hospital specialists</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-2.5">
              <button
                onClick={() => onOpenAppointmentModal('Dr. Ramin Ahmad, M.D. (Adult Primary Care)')}
                className="w-full sm:flex-1 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book with Dr. Ramin</span>
              </button>

              <a
                href="#forms"
                className="w-full sm:w-auto px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition-colors text-center"
              >
                Adult Form (PDF)
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Physicians
