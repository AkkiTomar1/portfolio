export default function ApiDashboardBanner() {
  return (
    <svg
      viewBox="0 0 1200 480"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      role="img"
      aria-label="API platform dashboard banner"
    >
      <defs>
        <linearGradient id="api-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#170e30" />
          <stop offset="55%" stopColor="#221047" />
          <stop offset="100%" stopColor="#12092a" />
        </linearGradient>
        <linearGradient id="api-glow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ec4899" stopOpacity="0.22" />
          <stop offset="50%" stopColor="#a855f7" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.22" />
        </linearGradient>
        <linearGradient id="api-title" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
        <linearGradient id="api-node" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#372f63" />
          <stop offset="100%" stopColor="#211c43" />
        </linearGradient>
        <linearGradient id="api-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="api-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <pattern id="api-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="#ffffff" strokeOpacity="0.05" />
        </pattern>
      </defs>

      <rect width="1200" height="480" fill="url(#api-bg)" />
      <circle cx="640" cy="260" r="280" fill="url(#api-glow)" />
      <rect width="1200" height="480" fill="url(#api-grid)" />

      <text
        x="430"
        y="128"
        fontSize="40"
        fontWeight="800"
        letterSpacing="1"
        fill="url(#api-title)"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        API Dashboard
      </text>
      <text
        x="430"
        y="156"
        fontSize="13"
        fill="#cbd5e1"
        fillOpacity="0.6"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        Gateway admin · authenticated API monitoring
      </text>

      <g>
        <line x1="490" y1="190" x2="560" y2="272" stroke="#ffffff" strokeOpacity="0.14" strokeDasharray="4 6" />
        <line x1="700" y1="240" x2="610" y2="286" stroke="#ffffff" strokeOpacity="0.14" strokeDasharray="4 6" />
        <line x1="680" y1="430" x2="606" y2="330" stroke="#ffffff" strokeOpacity="0.14" strokeDasharray="4 6" />
        <line x1="480" y1="430" x2="552" y2="334" stroke="#ffffff" strokeOpacity="0.14" strokeDasharray="4 6" />

        <circle cx="490" cy="190" r="9" fill="#f472b6" />
        <circle cx="490" cy="190" r="16" fill="#f472b6" fillOpacity="0.18" />
        <circle cx="700" cy="240" r="9" fill="#a855f7" />
        <circle cx="700" cy="240" r="16" fill="#a855f7" fillOpacity="0.18" />
        <circle cx="680" cy="430" r="9" fill="#818cf8" />
        <circle cx="680" cy="430" r="16" fill="#818cf8" fillOpacity="0.18" />
        <circle cx="480" cy="430" r="9" fill="#e879f9" />
        <circle cx="480" cy="430" r="16" fill="#e879f9" fillOpacity="0.18" />
      </g>

      <rect x="430" y="268" width="180" height="96" rx="16" fill="url(#api-node)" stroke="#ffffff" strokeOpacity="0.15" />
      <circle cx="458" cy="294" r="5" fill="#ec4899" />
      <text x="474" y="298" fontSize="13" fontWeight="600" letterSpacing="2" fill="#e9d5ff" fontFamily="ui-sans-serif, system-ui, sans-serif">
        GATEWAY
      </text>
      {[0, 1, 2, 3].map((i) => (
        <circle key={i} cx={452 + i * 28} cy="330" r="4" fill={i === 1 ? "#34d399" : "#64748b"} fillOpacity={i === 1 ? 1 : 0.6} />
      ))}

      <rect x="560" y="120" width="400" height="310" rx="18" fill="#ffffff" fillOpacity="0.03" stroke="#ffffff" strokeOpacity="0.1" />
      <text x="600" y="162" fontSize="11" letterSpacing="2" fill="#cbd5e1" fillOpacity="0.7" fontFamily="ui-sans-serif, system-ui, sans-serif">
        REQUESTS / 24H
      </text>

      {[
        { x: 592, v: "48K", l: "Requests", c: "#ec4899" },
        { x: 718, v: "212", l: "Active APIs", c: "#a855f7" },
        { x: 844, v: "99.9%", l: "Uptime", c: "#818cf8" },
      ].map((tile) => (
        <g key={tile.l}>
          <rect x={tile.x} y="182" width="112" height="64" rx="12" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.08" />
          <circle cx={tile.x + 13} cy="206" r="4" fill={tile.c} />
          <text x={tile.x + 13} y="226" fontSize="17" fontWeight="700" fill="#ffffff" fontFamily="ui-sans-serif, system-ui, sans-serif">
            {tile.v}
          </text>
          <text x={tile.x + 13} y="240" fontSize="9" fill="#94a3b8" fontFamily="ui-sans-serif, system-ui, sans-serif">
            {tile.l}
          </text>
        </g>
      ))}

      <line x1="586" y1="392" x2="958" y2="392" stroke="#ffffff" strokeOpacity="0.12" />
      {[
        [592, 40],
        [636, 64],
        [680, 34],
        [724, 72],
        [768, 52],
        [812, 84],
        [856, 58],
        [900, 44],
      ].map(([x, h]) => (
        <rect key={x} x={x} y={392 - h} width="24" height={h} rx="6" fill="url(#api-bar)" fillOpacity="0.85" />
      ))}
    </svg>
  );
}