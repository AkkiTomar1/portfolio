export default function FilmVaultBanner() {
  return (
    <svg
      viewBox="0 0 1200 480"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      role="img"
      aria-label="FilmVault movie database banner"
    >
      <defs>
        <linearGradient id="fv-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#170e30" />
          <stop offset="55%" stopColor="#2b1055" />
          <stop offset="100%" stopColor="#12092a" />
        </linearGradient>
        <linearGradient id="fv-glow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ec4899" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#a855f7" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.26" />
        </linearGradient>
        <linearGradient id="fv-title" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
        <linearGradient id="fv-board" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#372f63" />
          <stop offset="100%" stopColor="#211c43" />
        </linearGradient>
        <linearGradient id="fv-post1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#312e81" />
        </linearGradient>
        <linearGradient id="fv-post2" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#581c87" />
        </linearGradient>
        <linearGradient id="fv-post3" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
        <pattern id="fv-grid" width="44" height="44" patternUnits="userSpaceOnUse">
          <path d="M44 0H0V44" fill="none" stroke="#ffffff" strokeOpacity="0.05" />
        </pattern>
      </defs>

      <rect width="1200" height="480" fill="url(#fv-bg)" />
      <circle cx="560" cy="240" r="280" fill="url(#fv-glow)" />
      <rect width="1200" height="480" fill="url(#fv-grid)" />

      {[
        [40, 16],
        [108, 16],
        [176, 16],
        [244, 16],
        [312, 16],
        [380, 16],
        [448, 16],
        [516, 16],
        [584, 16],
        [652, 16],
        [720, 16],
        [788, 16],
        [856, 16],
        [924, 16],
        [992, 16],
        [1060, 16],
        [1128, 16],
        [40, 446],
        [108, 446],
        [176, 446],
        [244, 446],
        [312, 446],
        [380, 446],
        [448, 446],
        [516, 446],
        [584, 446],
        [652, 446],
        [720, 446],
        [788, 446],
        [856, 446],
        [924, 446],
        [992, 446],
        [1060, 446],
        [1128, 446],
      ].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="34" height="18" rx="5" fill="#ffffff" fillOpacity="0.07" />
      ))}

      <g>
        <circle cx="700" cy="372" r="46" fill="#0d0724" stroke="#ffffff" strokeOpacity="0.15" />
        <circle cx="700" cy="372" r="32" fill="none" stroke="#ffffff" strokeOpacity="0.12" />
        <circle cx="700" cy="372" r="11" fill="#ec4899" />
        {Array.from({ length: 8 }).map((_, i) => (
          <rect
            key={i}
            x="692"
            y="318"
            width="16"
            height="10"
            rx="3"
            fill="#ffffff"
            fillOpacity="0.1"
            transform={`rotate(${i * 45} 700 372)`}
          />
        ))}
      </g>

      <g transform="translate(430 150)">
        <polygon points="0,0 250,0 290,92 0,92" fill="url(#fv-board)" stroke="#ffffff" strokeOpacity="0.12" />
        <rect x="16" y="14" width="228" height="12" rx="5" fill="#ffffff" fillOpacity="0.85" />
        <rect x="8" y="38" width="236" height="12" rx="5" fill="#ffffff" fillOpacity="0.85" />
        <rect x="16" y="62" width="228" height="12" rx="5" fill="#ffffff" fillOpacity="0.85" />
        <polygon points="6,92 46,92 24,150 18,150" fill="#2c2752" stroke="#ffffff" strokeOpacity="0.1" />
        <polygon points="50,92 96,92 78,150 72,150" fill="#2c2752" stroke="#ffffff" strokeOpacity="0.1" />
      </g>

      <text
        x="560"
        y="330"
        textAnchor="middle"
        fontSize="44"
        fontWeight="800"
        letterSpacing="2"
        fill="url(#fv-title)"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        FilmVault
      </text>
      <text
        x="560"
        y="358"
        textAnchor="middle"
        fontSize="14"
        fill="#cbd5e1"
        fillOpacity="0.6"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        Movie discovery &amp; watchlist app
      </text>

      <g transform="rotate(4 865 165)">
        <rect x="800" y="70" width="130" height="190" rx="12" fill="url(#fv-post1)" stroke="#ffffff" strokeOpacity="0.18" />
        <rect x="800" y="70" width="130" height="30" rx="12" fill="#ffffff" fillOpacity="0.14" />
        <circle cx="865" cy="150" r="20" fill="#ffffff" fillOpacity="0.15" />
        <polygon points="858,139 874,150 858,161" fill="#ffffff" fillOpacity="0.9" />
        <rect x="812" y="210" width="82" height="8" rx="4" fill="#ffffff" fillOpacity="0.35" />
        <rect x="812" y="226" width="58" height="8" rx="4" fill="#ffffff" fillOpacity="0.18" />
        {[0, 1, 2].map((s) => (
          <text key={s} x={812 + s * 13} y={252} fontSize="12" fill="#fbbf24" fontFamily="ui-sans-serif, system-ui, sans-serif">
            ★
          </text>
        ))}
      </g>

      <g transform="rotate(-5 880 300)">
        <rect x="820" y="205" width="120" height="150" rx="12" fill="url(#fv-post2)" stroke="#ffffff" strokeOpacity="0.18" />
        <rect x="820" y="205" width="120" height="26" rx="12" fill="#ffffff" fillOpacity="0.14" />
        <circle cx="880" cy="266" r="16" fill="#ffffff" fillOpacity="0.15" />
        <polygon points="874,257 888,266 874,275" fill="#ffffff" fillOpacity="0.9" />
        <rect x="832" y="300" width="70" height="7" rx="3.5" fill="#ffffff" fillOpacity="0.32" />
        <rect x="832" y="314" width="48" height="7" rx="3.5" fill="#ffffff" fillOpacity="0.16" />
        {[0, 1, 2].map((s) => (
          <text key={s} x={832 + s * 13} y={338} fontSize="11" fill="#fbbf24" fontFamily="ui-sans-serif, system-ui, sans-serif">
            ★
          </text>
        ))}
      </g>

      <g transform="rotate(3 900 400)">
        <rect x="840" y="330" width="120" height="140" rx="12" fill="url(#fv-post3)" stroke="#ffffff" strokeOpacity="0.18" />
        <rect x="840" y="330" width="120" height="24" rx="12" fill="#ffffff" fillOpacity="0.14" />
        <circle cx="900" cy="388" r="15" fill="#ffffff" fillOpacity="0.15" />
        <polygon points="894,379 907,388 894,397" fill="#ffffff" fillOpacity="0.9" />
        <rect x="852" y="418" width="66" height="7" rx="3.5" fill="#ffffff" fillOpacity="0.32" />
        <rect x="852" y="432" width="44" height="7" rx="3.5" fill="#ffffff" fillOpacity="0.16" />
        {[0, 1, 2].map((s) => (
          <text key={s} x={852 + s * 13} y={454} fontSize="11" fill="#fbbf24" fontFamily="ui-sans-serif, system-ui, sans-serif">
            ★
          </text>
        ))}
      </g>
    </svg>
  );
}