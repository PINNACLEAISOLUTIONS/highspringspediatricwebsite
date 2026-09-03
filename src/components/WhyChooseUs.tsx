import { HeartHandshake, PhoneCall, Zap, Accessibility, ShieldCheck } from 'lucide-react'

export const WhyChooseUs = () => {
  const pillars = [
    {
      icon: <HeartHandshake className="w-6 h-6 text-sky-600" />,
      title: 'Generational Continuity of Care',
      desc: 'Founded by Dr. Nasir Ahmed and expanded with his son Dr. Ramin Ahmad, you are treated by physicians who truly know your family history rather than random corporate clinic staff.',
      badge: 'Family-Owned',
      bg: 'bg-sky-50',
    },
    {
      icon: <PhoneCall className="w-6 h-6 text-teal-600" />,
      title: 'Direct Phone Access (No Automated Trees)',
      desc: 'When you call (386) 454-1156, you speak directly with our local receptionist in High Springs. No endless robotic menus or offshore call centers when you have an urgent question.',
      badge: 'Real Staff',
      bg: 'bg-teal-50',
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-600" />,
      title: 'Guaranteed Same-Day Child Sick Slots',
      desc: 'Kids do not get sick on a schedule. We reserve dedicated same-day triage appointment slots every weekday morning so your child can be seen promptly.',
      badge: 'Zero Delay',
      bg: 'bg-amber-50',
    },
    {
      icon: <Accessibility className="w-6 h-6 text-indigo-600" />,
      title: 'Ground-Level Stroller & Wheelchair Access',
      desc: 'Stress-free clinic arrival with ground-level parking, wide exam doorways, and spacious rooms designed for double strollers, toddlers, and senior mobility aids.',
      badge: '100% Accessible',
      bg: 'bg-indigo-50',
    },
  ]

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-wide uppercase mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            <span>The High Springs Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Why Generations of Families Choose Us
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Independent, physician-owned family medicine where patient relationships come first.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl ${p.bg} flex items-center justify-center`}>
                    {p.icon}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                    {p.badge}
                  </span>
                </div>

                <h3 className="text-lg font-black text-slate-900 mb-2 leading-snug group-hover:text-sky-700 transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-sky-600">
                <span>Patient-First Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs
