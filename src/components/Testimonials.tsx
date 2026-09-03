import { Star, Quote, Heart } from 'lucide-react'

export const Testimonials = () => {
  const reviews = [
    {
      author: 'Sarah M.',
      role: 'Mother of two (High Springs, FL)',
      quote:
        'Dr. Nasir Ahmed has been our pediatrician for 8 years. When my 3-year-old had a sudden high fever and croup cough, they got us in within an hour. He has the gentlest bedside manner I have ever seen with children.',
      rating: 5,
      tag: 'Pediatrics Care',
    },
    {
      author: 'David & Karen L.',
      role: 'Parents of newborn twins (Alachua, FL)',
      quote:
        'Bringing home twins was overwhelming. Dr. Ahmed took all the time in the world during our first newborn milestone appointment to check their weights, answer our formula questions, and reassure us. We wouldn’t trust anyone else.',
      rating: 5,
      tag: 'Newborn Milestone',
    },
    {
      author: 'Robert G.',
      role: 'Adult Primary Patient (Newberry, FL)',
      quote:
        'I started seeing Dr. Ramin Ahmad for my blood pressure and diabetes management. Having hospital privileges at North Florida Hospital gives immense peace of mind. He listens carefully and explains blood work clearly.',
      rating: 5,
      tag: 'Adult Primary Care',
    },
    {
      author: 'Jennifer T.',
      role: 'Parent of middle school athlete (Fort White, FL)',
      quote:
        'We needed an FHSAA sports physical before football practice started on Monday. The office got us in on Friday afternoon, checked his vitals thoroughly, and stamped the paperwork right away. Invaluable clinic for our community!',
      rating: 5,
      tag: 'Sports Physical',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="site-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold tracking-wide uppercase mb-3">
            <Heart className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
            <span>Parent &amp; Patient Trust</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Loved by High Springs Families
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Real feedback from local parents and adults who rely on our practice every day.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r) => (
            <div
              key={r.author}
              className="rounded-3xl p-6 sm:p-7 border border-slate-200/80 bg-slate-50/70 hover:bg-white hover:border-sky-300 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Stars and Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600">
                    {r.tag}
                  </span>
                </div>

                <Quote className="w-7 h-7 text-sky-200 mb-2" />
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{r.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60">
                <div className="font-extrabold text-sm text-slate-900 group-hover:text-sky-700 transition-colors">
                  {r.author}
                </div>
                <div className="text-xs text-slate-500 font-medium">{r.role}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials
