import { useState, useEffect } from 'react'
import { Phone, Clock, MapPin, AlertCircle } from 'lucide-react'

export const TopHeader = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [statusText, setStatusText] = useState('Monday – Friday: 9:00 AM – 5:00 PM')

  useEffect(() => {
    // Determine clinic open/closed status based on US Eastern Time
    try {
      const now = new Date()
      // Convert to Eastern Time (High Springs, FL is America/New_York)
      const easternTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }))
      const day = easternTime.getDay() // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      const hours = easternTime.getHours()
      const isWeekday = day >= 1 && day <= 5
      const isClinicHour = hours >= 9 && hours < 17

      if (isWeekday && isClinicHour) {
        setIsOpen(true)
        setStatusText('Open Now until 5:00 PM • Same-Day Sick Visits Available')
      } else if (isWeekday && hours < 9) {
        setIsOpen(false)
        setStatusText('Opens Today at 9:00 AM • Mon–Fri: 9am – 5pm')
      } else if (day === 5 && hours >= 17) {
        setIsOpen(false)
        setStatusText('Closed for the weekend • Reopens Monday at 9:00 AM')
      } else if (day === 6 || day === 0) {
        setIsOpen(false)
        setStatusText('Closed this weekend • Reopens Monday at 9:00 AM')
      } else {
        setIsOpen(false)
        setStatusText('Closed for the day • Reopens tomorrow at 9:00 AM')
      }
    } catch {
      setStatusText('Monday – Friday: 9:00 AM – 5:00 PM')
    }
  }, [])

  return (
    <div className="bg-slate-900 text-white text-xs py-2 px-4 border-b border-slate-800">
      <div className="site-container flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Status Pill & Hours */}
        <div className="flex items-center gap-2.5 flex-wrap justify-center sm:justify-start">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide ${
              isOpen
                ? 'bg-emerald-500/25 text-emerald-300 border border-emerald-400/40'
                : 'bg-amber-500/20 text-amber-200 border border-amber-400/30'
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}
            />
            {isOpen ? 'Open Now' : 'Clinic Hours'}
          </span>
          <span className="text-slate-300 font-medium flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
            {statusText}
          </span>
        </div>

        {/* Quick Contact & Emergency Notice */}
        <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-end text-[11px]">
          <a
            href="https://maps.google.com/?q=19228+NW+US+Highway+441,+High+Springs,+FL+32643"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
            <span>19228 NW US Hwy 441, High Springs</span>
          </a>

          <span className="hidden sm:inline text-slate-600">|</span>

          <a
            href="tel:3864541156"
            className="flex items-center gap-1.5 font-bold text-sky-300 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 flex-shrink-0 text-emerald-400" />
            <span>(386) 454-1156</span>
          </a>

          <span className="hidden sm:inline text-slate-600">|</span>

          <span className="text-rose-300 font-semibold flex items-center gap-1">
            <AlertCircle className="w-3 h-3 flex-shrink-0" />
            <span>Medical Emergency: Dial 911</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
