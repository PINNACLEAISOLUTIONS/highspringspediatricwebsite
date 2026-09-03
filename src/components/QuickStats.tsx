import { Award, Users, Star, Clock } from 'lucide-react'

export const QuickStats = () => {
  const stats = [
    {
      value: '20+',
      unit: 'Years',
      label: 'Caring for High Springs Families',
      detail: 'Serving Alachua County youth & adults since 2004',
      icon: <Award className="w-5 h-5 text-sky-600" />,
      bg: 'bg-sky-50',
    },
    {
      value: '5.0',
      unit: '★',
      label: 'Parent & Patient Rating',
      detail: 'Trusted by hundreds of local families for gentle care',
      icon: <Star className="w-5 h-5 text-amber-500 fill-amber-400" />,
      bg: 'bg-amber-50',
    },
    {
      value: '2',
      unit: 'M.D.s',
      label: 'Generations of Physicians',
      detail: 'Dr. Nasir Ahmed & son Dr. Ramin Ahmad under one roof',
      icon: <Users className="w-5 h-5 text-teal-600" />,
      bg: 'bg-teal-50',
    },
    {
      value: 'Same-Day',
      unit: '',
      label: 'Guaranteed Sick Appointments',
      detail: 'Quick relief when your child wakes up with a fever',
      icon: <Clock className="w-5 h-5 text-emerald-600" />,
      bg: 'bg-emerald-50',
    },
  ]

  return (
    <section className="bg-white border-y border-slate-200/80 py-10 relative z-10 shadow-xs">
      <div className="site-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:border-sky-300 hover:bg-white transition-all shadow-2xs hover:shadow-md flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center`}>
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight group-hover:text-sky-700 transition-colors">
                  {stat.value}
                  {stat.unit && <span className="text-sky-600 text-lg sm:text-xl ml-1">{stat.unit}</span>}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1 leading-snug">
                  {stat.label}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {stat.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuickStats
