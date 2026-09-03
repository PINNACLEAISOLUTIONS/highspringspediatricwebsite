import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: 'How do guaranteed same-day sick appointments work?',
      a: 'If your child wakes up with a sudden fever, ear pain, breathing distress, vomiting, or acute rash, call our reception desk directly at (386) 454-1156 starting at 9:00 AM on weekdays. We set aside dedicated acute triage appointment slots every morning so our pediatric team can diagnose and relieve symptoms without delay.',
    },
    {
      q: 'Are you currently accepting new pediatric and adult patients?',
      a: 'Yes! Both Dr. Nasir Ahmed, M.D. (Pediatrics & Newborns, ages 0–18) and Dr. Ramin Ahmad, M.D. (Internal Medicine & Adult Primary Care) are actively accepting new patients from High Springs, Alachua, Newberry, Fort White, Gainesville, Lake City, and surrounding communities.',
    },
    {
      q: 'When should I schedule my newborn baby’s first doctor visit?',
      a: 'The American Academy of Pediatrics recommends that newborns be seen by their pediatrician within 48 to 72 hours of hospital discharge. During this gentle visit, Dr. Nasir Ahmed checks newborn weight gain, jaundice levels, umbilical cord healing, and feeding patterns.',
    },
    {
      q: 'Which insurance plans and state programs do you accept?',
      a: 'We accept Florida Blue (BCBS), Medicare Part B, Florida Medicaid, Staywell / Sunshine Health, UnitedHealthcare, Aetna, Cigna, and Tricare. For patients without insurance, we offer transparent self-pay rates and itemized superbills for HSA/FSA reimbursement.',
    },
    {
      q: 'Can both my children and adult family members be treated here?',
      a: 'Yes! That is the unique advantage of our multi-generational father & son practice. Dr. Nasir Ahmed specializes exclusively in pediatric medicine for children and teens, while Dr. Ramin Ahmad provides adult primary care, hypertension management, and senior wellness under the very same roof.',
    },
    {
      q: 'How do I transfer previous medical and vaccination records?',
      a: 'Simply download our Child or Adult Registration Packet from the Patient Forms section on this website. Fill out the Medical Records Release authorization page, and our office staff will handle requesting the complete records directly from your previous clinic.',
    },
  ]

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="site-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-wide uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
            <span>Parent &amp; Patient FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Quick answers to help you feel confident before bringing your child or family to our clinic.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={faq.q}
                className="rounded-2xl border border-slate-200/80 bg-white shadow-2xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-sky-700 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base leading-snug">{faq.q}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-sky-100 text-sky-700' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Support note */}
        <div className="mt-10 text-center text-xs sm:text-sm text-slate-500">
          Have an immediate clinical question? Call our office staff directly at{' '}
          <a href="tel:3864541156" className="text-sky-700 font-bold underline">
            (386) 454-1156
          </a>.
        </div>

      </div>
    </section>
  )
}

export default Faq
