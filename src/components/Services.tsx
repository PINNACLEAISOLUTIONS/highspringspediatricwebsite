import { useState } from 'react'
import { CheckCircle2, ArrowRight, Activity, Baby, Stethoscope, TestTube2 } from 'lucide-react'

import newbornCareImg from '../assets/newborn_care.jpg'
import primaryFamilyCareImg from '../assets/primary_family_care.jpg'
import vaccinationsImg from '../assets/vaccinations.jpg'
import diagnosticLabsImg from '../assets/diagnostic_labs.jpg'
import wellnessImg from '../assets/wellness.jpg'

interface ServicesProps {
  onOpenAppointmentModal: (serviceName?: string) => void
}

export const Services = ({ onOpenAppointmentModal }: ServicesProps) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'pediatrics' | 'adults' | 'labs'>('all')

  const services = [
    {
      id: 'newborn',
      category: 'pediatrics',
      title: 'Newborn & Infant Milestone Care',
      subtitle: 'Dr. Nasir Ahmed, M.D.',
      badge: 'Ages 0–2',
      badgeColor: 'bg-sky-100 text-sky-800',
      desc: 'Gentle, comprehensive care during your baby’s critical first weeks and months. We guide parents on feeding, growth percentiles, jaundice checks, and sleep patterns.',
      features: [
        'Hospital discharge follow-ups within 48–72 hours',
        'Growth, head circumference & weight tracking',
        'Lactation guidance & formula transition support',
        'Developmental milestone monitoring',
      ],
      img: newbornCareImg,
    },
    {
      id: 'pediatric-care',
      category: 'pediatrics',
      title: 'Pediatric Well-Child & Sick Visits',
      subtitle: 'Dr. Nasir Ahmed, M.D.',
      badge: 'Ages 2–18',
      badgeColor: 'bg-sky-100 text-sky-800',
      desc: 'Routine annual checkups, developmental assessments, childhood asthma management, and guaranteed same-day sick appointments when fever or illness strikes.',
      features: [
        'Guaranteed same-day sick appointment availability',
        'Childhood asthma, allergy & eczema treatment',
        'Ear infection, sore throat & respiratory relief',
        'Behavioral & developmental screenings',
      ],
      img: wellnessImg,
    },
    {
      id: 'adult-primary',
      category: 'adults',
      title: 'Adult Primary Care & Chronic Disease',
      subtitle: 'Dr. Ramin Ahmad, M.D.',
      badge: 'Adults & Seniors',
      badgeColor: 'bg-teal-100 text-teal-800',
      desc: 'Comprehensive annual physicals, ongoing chronic disease management, cardiovascular preventive care, and medication reviews tailored for adults and seniors.',
      features: [
        'Hypertension & cholesterol management',
        'Type 2 diabetes care & blood sugar stabilization',
        'Medicare annual wellness exams',
        'Hospital privileges at HCA Florida North Florida Hospital',
      ],
      img: primaryFamilyCareImg,
    },
    {
      id: 'immunizations',
      category: 'pediatrics',
      title: 'Childhood & Adult Immunizations',
      subtitle: 'CDC-Approved Schedules',
      badge: 'All Ages',
      badgeColor: 'bg-indigo-100 text-indigo-800',
      desc: 'Protecting our community with timely vaccines. Complete Florida DH 680 immunization certificates provided for school registration and daycare entry.',
      features: [
        'Full CDC recommended infant & childhood vaccines',
        'Official Florida Blue 680 school form completion',
        'Annual seasonal flu & COVID-19 boosters',
        'Adult vaccines: Tdap, Pneumonia, Shingrix',
      ],
      img: vaccinationsImg,
    },
    {
      id: 'diagnostic-labs',
      category: 'labs',
      title: 'In-Office Rapid Diagnostic Suite',
      subtitle: 'Immediate Results',
      badge: 'Point-of-Care',
      badgeColor: 'bg-amber-100 text-amber-800',
      desc: 'Skip external lab waits. Our on-site diagnostic testing provides fast clinical answers during your appointment so treatment can begin without delay.',
      features: [
        'Rapid Strep A, Influenza A/B & COVID-19 tests',
        'Urinalysis & rapid urine dipstick testing',
        'In-office blood glucose & hemoglobin fingersticks',
        'Direct coordination for Quest & Labcorp panels',
      ],
      img: diagnosticLabsImg,
    },
    {
      id: 'sports-physicals',
      category: 'pediatrics',
      title: 'School, Sports & Camp Physicals',
      subtitle: 'Official FHSAA Certified',
      badge: 'Students & Athletes',
      badgeColor: 'bg-emerald-100 text-emerald-800',
      desc: 'Fast, thorough clearance physicals for High Springs and Alachua County student athletes, middle/high school teams, summer camps, and Scouts.',
      features: [
        'FHSAA EL2 pre-participation physical evaluations',
        'Cardiovascular and musculoskeletal screening',
        'Vision and hearing acuity assessment',
        'Same-day form completion and signed stamps',
      ],
      img: wellnessImg,
    },
  ]

  const filteredServices = services.filter((svc) => {
    if (activeCategory === 'all') return true
    return svc.category === activeCategory
  })

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="site-container">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold tracking-wide uppercase mb-3">
            <Activity className="w-3.5 h-3.5 text-teal-600" />
            <span>Comprehensive Healthcare Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Whole Family Care Under One Roof
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether your baby needs a first-month milestone check, your teenager needs sports clearance, or an adult parent needs diabetes management, our physicians are here for you.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Services', icon: <Activity className="w-4 h-4" /> },
            { id: 'pediatrics', label: 'Pediatrics & Newborns', icon: <Baby className="w-4 h-4" /> },
            { id: 'adults', label: 'Adult Primary Care', icon: <Stethoscope className="w-4 h-4" /> },
            { id: 'labs', label: 'Diagnostic Testing', icon: <TestTube2 className="w-4 h-4" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${activeCategory === tab.id
                ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {filteredServices.map((svc) => (
            <div
              key={svc.id}
              className="rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container with Zoom */}
                <div className="h-52 sm:h-56 relative overflow-hidden bg-slate-100">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-xs ${svc.badgeColor}`}>
                      {svc.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/70 to-transparent p-3 text-white text-xs font-semibold">
                    <span>{svc.subtitle}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2.5 leading-snug group-hover:text-sky-700 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {svc.desc}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-700">
                    {svc.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenAppointmentModal(svc.title)}
                  className="w-full py-3 rounded-xl bg-slate-100 hover:bg-sky-600 hover:text-white text-slate-800 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer group/btn"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services
