import { useState } from 'react'
import { Phone, Calendar, Menu, X, FileText, ChevronRight } from 'lucide-react'
import { ClinicLogo } from './ClinicLogo'

interface NavbarProps {
  onOpenAppointmentModal: () => void
}

export const Navbar = ({ onOpenAppointmentModal }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Doctors', href: '#physicians', mobileLabel: 'Doctors' },
    { label: 'Services', href: '#services', mobileLabel: 'Medical Services' },
    { label: 'About', href: '#why-us', mobileLabel: 'Why Choose Us' },
    { label: 'Insurance', href: '#insurance', mobileLabel: 'Accepted Insurance' },
    { label: 'Forms', href: '#forms', mobileLabel: 'Patient Forms (PDF)' },
    { label: 'Location', href: '#location', mobileLabel: 'Facility & Map' },
    { label: 'FAQ', href: '#faq', mobileLabel: 'Frequently Asked Questions' },
  ]

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      <div className="site-container h-20 flex items-center justify-between gap-3 lg:gap-4 xl:gap-6">
        
        {/* Brand Logo - Fixed Width & No Shrinking */}
        <a href="#home" className="group flex items-center flex-shrink-0">
          <ClinicLogo />
        </a>

        {/* Desktop Navigation Links - Single line, balanced, no wrapping */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-xs xl:text-sm font-semibold text-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-2.5 py-1.5 xl:px-3 xl:py-2 rounded-xl text-slate-600 hover:text-sky-800 hover:bg-slate-100 transition-all whitespace-nowrap leading-none flex items-center justify-center font-bold tracking-tight"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions - Balanced Heights & Guaranteed Single Line */}
        <div className="hidden sm:flex items-center gap-2.5 xl:gap-3 flex-shrink-0">
          {/* Phone Call Button */}
          <a
            href="tel:3864541156"
            className="h-10 px-3.5 xl:px-4 rounded-full border border-slate-200 bg-white text-slate-700 hover:text-sky-800 hover:border-slate-300 hover:bg-slate-50 font-bold text-xs xl:text-sm transition-all shadow-2xs inline-flex items-center gap-2 whitespace-nowrap flex-shrink-0"
          >
            <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 flex-shrink-0">
              <Phone className="w-3 h-3" />
            </div>
            <span className="whitespace-nowrap tabular-nums">(386) 454-1156</span>
          </a>

          {/* Book Appointment CTA */}
          <button
            onClick={onOpenAppointmentModal}
            className="h-10 px-4 xl:px-5 rounded-full bg-sky-700 hover:bg-sky-800 text-white font-bold text-xs xl:text-sm shadow-xs active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2 whitespace-nowrap flex-shrink-0"
          >
            <Calendar className="w-4 h-4 flex-shrink-0" />
            <span className="whitespace-nowrap">Book Visit</span>
          </button>
        </div>

        {/* Mobile Action Buttons */}
        <div className="flex sm:hidden items-center gap-2 flex-shrink-0">
          <a
            href="tel:3864541156"
            className="w-10 h-10 rounded-full bg-sky-700 text-white shadow-xs flex items-center justify-center active:scale-95 transition-transform"
            aria-label="Call clinic"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Tablet Hamburger (Between sm and lg) */}
        <div className="hidden sm:flex lg:hidden items-center flex-shrink-0">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-5 shadow-xl animate-in fade-in duration-150">
          <div className="space-y-1 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-sky-800 text-sm font-bold border border-transparent hover:border-slate-200 transition-colors"
              >
                <span>{link.mobileLabel}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <div className="space-y-2 pt-3 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenAppointmentModal()
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-bold text-sm shadow-xs"
            >
              <Calendar className="w-4 h-4" />
              <span>Request Appointment</span>
            </button>

            <a
              href="#forms"
              onClick={handleLinkClick}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm border border-slate-200 transition-colors"
            >
              <FileText className="w-4 h-4 text-slate-600" />
              <span>Download Registration Forms (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
