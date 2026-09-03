import { Phone, Calendar, CheckCircle2, Star, Heart } from 'lucide-react'
import heroPediatricianImg from '../assets/hero_pediatrician.jpg'

interface HeroProps {
  onOpenAppointmentModal: () => void
}

export const Hero = ({ onOpenAppointmentModal }: HeroProps) => {
  return (
    <section id="home" className="relative bg-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/80">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Compelling Headline & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Top Badge: Community Trust */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold mb-5">
              <span className="flex h-2 w-2 rounded-full bg-sky-600" />
              <span>Serving High Springs Since 2004</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-900 font-bold">Accepting New Patients</span>
            </div>

            {/* Main Headline - Single Solid Color, No Glowing or Gradient Text */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] mb-5">
              Compassionate Pediatric &amp; Family Healthcare in High Springs
            </h1>

            {/* Sub-paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8 font-normal">
              Trusted by generations of local families. Led by founding pediatrician{' '}
              <strong className="text-slate-900 font-bold">Dr. Nasir Ahmed, M.D.</strong> and internal medicine specialist{' '}
              <strong className="text-slate-900 font-bold">Dr. Ramin Ahmad, M.D.</strong> From newborn first-week milestones to senior wellness exams, your family receives personalized, unhurried care.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-8">
              <button
                onClick={onOpenAppointmentModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-sky-700 hover:bg-sky-800 text-white font-bold text-base shadow-sm active:scale-95 transition-all cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Request an Appointment</span>
              </button>

              <a
                href="tel:3864541156"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border-2 border-slate-300 hover:border-slate-400 shadow-xs transition-all"
              >
                <Phone className="w-5 h-5 text-sky-700" />
                <span>Call (386) 454-1156</span>
              </a>
            </div>

            {/* Key Trust Signals Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-4 text-left w-full max-w-xl text-xs sm:text-sm text-slate-700 font-semibold pt-4 border-t border-slate-200/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>Same-Day Sick Visits</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>On-Site Rapid Labs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>Major Insurances</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>Florida Medicaid</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>Stroller Accessible</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>Direct Billing Support</span>
              </div>
            </div>

          </div>

          {/* Right Column: Radiant High-Res Pediatric Clinic Photo with Floating Trust Cards */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0 flex justify-center">
            
            {/* Visual Container */}
            <div className="relative w-full max-w-lg lg:max-w-none">
              
              {/* Clean solid frame */}
              <div className="relative rounded-3xl p-2 bg-slate-100 border border-slate-200 shadow-md">
                <div className="rounded-[22px] overflow-hidden bg-white shadow-inner relative aspect-[4/3] sm:aspect-[14/11] max-h-[460px]">
                  <img
                    src={heroPediatricianImg}
                    alt="Pediatrician gently examining a smiling young girl in a cheerful High Springs examination room"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle gradient overlay at base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold flex items-center justify-between px-3 py-1.5 rounded-xl bg-slate-900/70 backdrop-blur-md">
                    <span>High Springs Pediatrics &amp; Primary Care</span>
                    <span className="text-teal-300 font-bold">19228 NW US Hwy 441</span>
                  </div>
                </div>
              </div>

              {/* Floating Trust Card 1: 5.0 Star Rating */}
              <div className="absolute -top-4 -left-3 sm:-left-6 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-500 font-black text-sm">
                    <span>5.0</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <div className="text-[11px] font-bold text-slate-600">Loved by Local Families</div>
                </div>
              </div>

              {/* Floating Trust Card 2: Same-Day Guarantee */}
              <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-500">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 fill-teal-500 text-teal-600" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900">Guaranteed Sick Visits</div>
                  <div className="text-[11px] font-semibold text-teal-700">Same-Day Child Appointments</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
