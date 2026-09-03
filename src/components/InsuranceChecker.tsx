import { useState } from 'react'
import { ShieldCheck, Search, CheckCircle2, Phone, HelpCircle, CreditCard } from 'lucide-react'

export const InsuranceChecker = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'commercial' | 'medicaid' | 'medicare'>('all')

  const plans = [
    {
      name: 'Florida Blue (Blue Cross Blue Shield)',
      category: 'commercial',
      tier: 'In-Network Preferred',
      notes: 'All BlueOptions, BlueCare, and HMO/PPO commercial employer plans accepted.',
    },
    {
      name: 'Medicare Part B & Advantage',
      category: 'medicare',
      tier: 'Accepted for Adult Care',
      notes: 'Accepted by Dr. Ramin Ahmad, M.D. for internal medicine and annual wellness visits.',
    },
    {
      name: 'Florida Medicaid & CMS',
      category: 'medicaid',
      tier: 'State-Approved Provider',
      notes: 'Direct billing for Florida Medicaid and Children’s Medical Services (CMS).',
    },
    {
      name: 'Sunshine Health / Staywell',
      category: 'medicaid',
      tier: 'In-Network Managed Care',
      notes: 'Full coverage for routine well-child checkups, sick visits, and child vaccines.',
    },
    {
      name: 'UnitedHealthcare (UHC)',
      category: 'commercial',
      tier: 'In-Network Commercial',
      notes: 'Comprehensive coverage for pediatrics, adult visits, and in-office rapid testing.',
    },
    {
      name: 'Aetna & Coventry Health',
      category: 'commercial',
      tier: 'In-Network Participating',
      notes: 'Commercial plans accepted for pediatric and primary adult physicals.',
    },
    {
      name: 'Cigna Health',
      category: 'commercial',
      tier: 'In-Network Participating',
      notes: 'Accepted for routine preventative care, childhood immunizations, and chronic care.',
    },
    {
      name: 'Tricare & CHAMPVA',
      category: 'commercial',
      tier: 'Military & Veterans Family',
      notes: 'Proudly serving our military service members, veterans, and their dependents.',
    },
    {
      name: 'Humana Commercial & Medicare',
      category: 'medicare',
      tier: 'Participating Provider',
      notes: 'Coverage verified for preventative screenings and chronic condition management.',
    },
    {
      name: 'Self-Pay / HSA / FSA Direct Billing',
      category: 'commercial',
      tier: 'Transparent Pricing',
      notes: 'Itemized superbills provided for Health Savings Accounts and Flexible Spending Accounts.',
    },
  ]

  const filteredPlans = plans.filter((plan) => {
    const matchesCategory = selectedCategory === 'all' || plan.category === selectedCategory
    const matchesSearch =
      plan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plan.notes.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section id="insurance" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="site-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Insurance &amp; Billing Verification</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Accepted Insurance &amp; Health Plans
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We work with most major commercial insurance providers, Florida Medicaid, Medicare Part B, and military programs to keep family healthcare accessible.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 mb-10 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
            
            {/* Search Input */}
            <div className="relative w-full md:flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type your insurer (e.g. Florida Blue, Medicaid, Aetna, Tricare)..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold px-2 py-1"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 flex-wrap w-full md:w-auto justify-center">
              {[
                { id: 'all', label: 'All Plans' },
                { id: 'commercial', label: 'Commercial' },
                { id: 'medicaid', label: 'Medicaid' },
                { id: 'medicare', label: 'Medicare' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as any)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-sky-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {filteredPlans.length > 0 ? (
              filteredPlans.map((plan) => (
                <div
                  key={plan.name}
                  className="p-4 rounded-2xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-sky-300 transition-all flex flex-col justify-between group shadow-2xs"
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div className="font-bold text-sm text-slate-900 flex items-center gap-2 group-hover:text-sky-700 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                      <span>{plan.name}</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-teal-100 text-teal-800 whitespace-nowrap">
                      {plan.tier}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                    {plan.notes}
                  </p>
                </div>
              ))
            ) : (
              <div className="col-span-2 py-10 text-center text-slate-500 text-sm">
                <HelpCircle className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                <p className="font-bold text-slate-700">Plan not found in quick search?</p>
                <p className="text-xs text-slate-500 mt-1">
                  We verify dozens of sub-networks and employer plans. Please call our billing team directly at{' '}
                  <a href="tel:3864541156" className="text-sky-600 font-bold underline">
                    (386) 454-1156
                  </a>.
                </p>
              </div>
            )}
          </div>

          {/* Callout Notice */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-2 text-left">
              <CreditCard className="w-4 h-4 text-sky-600 flex-shrink-0" />
              <span>We also accept cash, major credit cards, and HSA / FSA cards for co-pays and self-pay.</span>
            </div>
            <a
              href="tel:3864541156"
              className="inline-flex items-center gap-1.5 font-bold text-sky-700 hover:text-sky-900 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Verify your co-pay: (386) 454-1156</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}

export default InsuranceChecker
