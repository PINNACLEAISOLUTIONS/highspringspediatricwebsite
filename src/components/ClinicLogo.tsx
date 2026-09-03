interface ClinicLogoProps {
  className?: string
  iconOnly?: boolean
}

export const ClinicLogo = ({ className = '', iconOnly = false }: ClinicLogoProps) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Caring Star & Protecting Hand Emblem - Solid Clinical Blue */}
      <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-sky-700 p-0.5 shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
        <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center p-1.5">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Friendly Star */}
            <path
              d="M50 12L61 35L86 38L67 56L72 81L50 69L28 81L33 56L14 38L39 35L50 12Z"
              fill="#0369a1"
              stroke="#0369a1"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            {/* Caring Child Hand Silhouette */}
            <path
              d="M50 42C48 42 46.5 43.5 46.5 45.5V56C45 54.5 43 54.5 42 56C41 57.5 42 59.5 44 61.5L48 66C49.5 68 51.5 69 54 69C58 69 60.5 65.5 60.5 61.5V47.5C60.5 45.5 59 44 57 44C55.5 44 54.5 45 54 46V45.5C54 43.5 52.5 42 50.5 42H50Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </div>

      {!iconOnly && (
        <div className="flex flex-col justify-center min-w-0">
          <div className="font-extrabold text-base sm:text-lg lg:text-xl tracking-tight leading-tight whitespace-nowrap text-slate-900">
            High Springs Pediatrics
          </div>
          <div className="text-[10px] sm:text-[11px] font-bold text-slate-500 tracking-wider uppercase whitespace-nowrap flex items-center gap-1.5 mt-0.5">
            <span>&amp; Adult Primary Care</span>
            <span className="inline-block w-1 h-1 rounded-full bg-slate-400"></span>
            <span className="lowercase font-medium">est. 2004</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ClinicLogo
