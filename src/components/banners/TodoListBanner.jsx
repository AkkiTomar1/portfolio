export default function TodoListBanner() {
  return (
    <svg
      viewBox="0 0 1200 480"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      role="img"
      aria-label="Todo List app banner"
    >
      <defs>
        <linearGradient id="tl-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#170e30" />
          <stop offset="55%" stopColor="#251246" />
          <stop offset="100%" stopColor="#12092a" />
        </linearGradient>
        <linearGradient id="tl-glow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ec4899" stopOpacity="0.24" />
          <stop offset="50%" stopColor="#a855f7" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.22" />
        </linearGradient>
        <linearGradient id="tl-title" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
        <linearGradient id="tl-progress" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <pattern id="tl-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="#ffffff" strokeOpacity="0.05" />
        </pattern>
      </defs>

      <rect width="1200" height="480" fill="url(#tl-bg)" />
      <circle cx="640" cy="300" r="260" fill="url(#tl-glow)" />
      <rect width="1200" height="480" fill="url(#tl-grid)" />

      <text
        x="430"
        y="135"
        fontSize="44"
        fontWeight="800"
        letterSpacing="1"
        fill="url(#tl-title)"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        Todo List
      </text>
      <text
        x="430"
        y="164"
        fontSize="14"
        fill="#cbd5e1"
        fillOpacity="0.6"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        Stay organized, every day
      </text>

      <circle cx="1090" cy="120" r="20" fill="#ffffff" fillOpacity="0.06" stroke="#ffffff" strokeOpacity="0.12" />
      <polygon points="1081,120 1093,117 1093,123 1081,120" fill="none" />
      <path d="M1083 121 L1088 128 L1097 114" stroke="#c084fc" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      <rect x="400" y="180" width="540" height="250" rx="20" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.1" />
      <text
        x="440"
        y="215"
        fontSize="13"
        letterSpacing="2"
        fill="#cbd5e1"
        fillOpacity="0.7"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        MY TASKS
      </text>
      <rect x="440" y="228" width="440" height="28" rx="14" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeOpacity="0.08" />
      <text x="462" y="247" fontSize="13" fill="#94a3b8" fontFamily="ui-sans-serif, system-ui, sans-serif">
        Add a new task…
      </text>

      {[0, 1, 2].map((row) => {
        const checked = row === 0;
        const inProgress = row === 1;
        const cy = 292 + row * 36;
        return (
          <g key={row}>
            <circle
              cx="452"
              cy={cy}
              r="11"
              fill={checked ? "#ec4899" : inProgress ? "#7c3aed" : "none"}
              stroke={checked || inProgress ? "none" : "#ffffff"}
              strokeOpacity={checked || inProgress ? 0 : 0.2}
              strokeWidth="2"
            />
            {checked && (
              <path d="M447 292 L451 296 L458 287" stroke="#ffffff" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            )}
            <rect
              x="478"
              y={cy - 5.5}
              width="380"
              height="11"
              rx="5.5"
              fill={inProgress ? "#7c3aed" : "#ffffff"}
              fillOpacity={inProgress ? 0.5 : 0.07}
            />
          </g>
        );
      })}

      <rect x="440" y="398" width="440" height="8" rx="4" fill="#ffffff" fillOpacity="0.06" />
      <rect x="440" y="398" width="299" height="8" rx="4" fill="url(#tl-progress)" />
      <text
        x="440"
        y="420"
        fontSize="11"
        fill="#cbd5e1"
        fillOpacity="0.65"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        68% complete · 3 of 5 tasks done
      </text>
    </svg>
  );
}