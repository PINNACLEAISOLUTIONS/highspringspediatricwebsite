import { Phone, MapPin } from 'lucide-react'
import { ClinicLogo } from './ClinicLogo'

export const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 py-8 text-xs">
      <div className="site-container">
        
        {/* Top: Logo & Contact Info */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <ClinicLogo />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 text-xs sm:text-sm font-semibold text-slate-700">
            <a
              href="tel:3864541156"
              className="inline-flex items-center gap-2 text-sky-800 hover:text-sky-950 transition-colors font-bold"
            >
              <Phone className="w-4 h-4 text-sky-700" />
              <span>(386) 454-1156</span>
            </a>

            <span className="hidden sm:inline text-slate-300">•</span>

            <a
              href="https://maps.google.com/?q=19228+NW+US+Highway+441,+High+Springs,+FL+32643"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-slate-900 transition-colors"
            >
              <MapPin className="w-4 h-4 text-slate-400" />
              <span>19228 NW US Hwy 441, High Springs</span>
            </a>

            <span className="hidden sm:inline text-slate-300">•</span>

            <span className="text-slate-500">Mon–Fri: 9:00 AM – 5:00 PM</span>
          </div>
        </div>

        {/* Bottom: Clean Copyright Line */}
        <div className="mt-6 pt-6 border-t border-slate-200/80 text-center text-[11px] text-slate-500">
          &copy; {new Date().getFullYear()} High Springs Pediatrics &amp; Adult Primary Care &bull; Dr. Nasir Ahmed, M.D. &amp; Dr. Ramin Ahmad, M.D.
        </div>

      </div>
    </footer>
  )
}

export default Footer
