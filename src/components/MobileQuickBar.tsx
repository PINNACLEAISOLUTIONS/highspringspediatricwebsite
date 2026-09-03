import { Phone, Calendar, FileText, MapPin } from 'lucide-react'

interface MobileQuickBarProps {
  onOpenAppointmentModal: () => void
}

export const MobileQuickBar = ({ onOpenAppointmentModal }: MobileQuickBarProps) => {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200 shadow-2xl py-2 px-3 flex items-center justify-around safe-area-pb">
      {/* 1-Tap Call */}
      <a
        href="tel:3864541156"
        className="flex flex-col items-center gap-1 text-[11px] font-bold text-slate-700 active:scale-95 transition-transform"
      >
        <div className="w-9 h-9 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center shadow-xs">
          <Phone className="w-4 h-4" />
        </div>
        <span>Call</span>
      </a>

      {/* Book Visit */}
      <button
        onClick={onOpenAppointmentModal}
        className="flex flex-col items-center gap-1 text-[11px] font-bold text-sky-700 active:scale-95 transition-transform cursor-pointer"
      >
        <div className="w-9 h-9 rounded-full bg-sky-700 text-white flex items-center justify-center shadow-sm">
          <Calendar className="w-4 h-4" />
        </div>
        <span>Book</span>
      </button>

      {/* Forms PDF */}
      <a
        href="#forms"
        className="flex flex-col items-center gap-1 text-[11px] font-bold text-slate-700 active:scale-95 transition-transform"
      >
        <div className="w-9 h-9 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center shadow-xs">
          <FileText className="w-4 h-4" />
        </div>
        <span>Forms</span>
      </a>

      {/* Map Directions */}
      <a
        href="https://maps.google.com/?q=19228+NW+US+Highway+441,+High+Springs,+FL+32643"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 text-[11px] font-bold text-slate-700 active:scale-95 transition-transform"
      >
        <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shadow-xs">
          <MapPin className="w-4 h-4" />
        </div>
        <span>Map</span>
      </a>
    </div>
  )
}

export default MobileQuickBar
