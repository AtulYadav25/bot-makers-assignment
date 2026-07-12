/* ─── Tournament Bracket SVG ───────────────────────────────────────────────── */
const TournamentBracket = () => (
  <svg
    viewBox="0 0 280 195"
    className="w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <style>{`
        @keyframes drawBracket {
          from { stroke-dashoffset: 1; }
          to   { stroke-dashoffset: 0; }
        }
        .bl {
          fill: none;
          stroke: #dc2626;
          stroke-width: 1.6;
          stroke-linecap: square;
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation: drawBracket 0.35s ease forwards;
        }
        .bl-1 { animation-delay: 0.15s; }
        .bl-2 { animation-delay: 0.40s; }
        .bl-3 { animation-delay: 0.65s; }
        .bl-4 { animation-delay: 0.90s; }
        .bl-5 { animation-delay: 1.20s; }
        .bl-6 { animation-delay: 1.50s; }
      `}</style>
    </defs>

    {/* Round 1 slots */}
    <rect x="8" y="18"  width="65" height="22" rx="3" fill="#2a2a2a" />
    <rect x="8" y="58"  width="65" height="22" rx="3" fill="#2a2a2a" />
    <rect x="8" y="113" width="65" height="22" rx="3" fill="#2a2a2a" />
    <rect x="8" y="153" width="65" height="22" rx="3" fill="#2a2a2a" />

    {/* Round 2 slots */}
    <rect x="108" y="38"  width="65" height="22" rx="3" fill="#2a2a2a" />
    <rect x="108" y="133" width="65" height="22" rx="3" fill="#2a2a2a" />

    {/* Final slot */}
    <rect x="198" y="85" width="65" height="22" rx="3" fill="#3a1010" stroke="#dc2626" strokeWidth="1" />

    {/* R1 → R2 connectors */}
    <path className="bl bl-1" pathLength="1" d="M73,29 H91 V49 H108" />
    <path className="bl bl-2" pathLength="1" d="M73,69 H91 V49 H108" />
    <path className="bl bl-3" pathLength="1" d="M73,124 H91 V144 H108" />
    <path className="bl bl-4" pathLength="1" d="M73,164 H91 V144 H108" />

    {/* R2 → Final connectors */}
    <path className="bl bl-5" pathLength="1" d="M173,49  H186 V96 H198" />
    <path className="bl bl-6" pathLength="1" d="M173,144 H186 V96 H198" />
  </svg>
)

/* ─── Data ─────────────────────────────────────────────────────────────────── */
const upcomingEvents = [
  { city: 'Mumbai', date: '11/11/25', location: 'BKC', category: 'Lorem' },
  { city: 'Delhi',  date: '11/11/25', location: 'BKC', category: 'Lorem' },
]

const pastResults = [
  'Bengaluru Regionals',
  'Bengaluru Regionals',
  'Bengaluru Regionals',
]

/* ─── Component ─────────────────────────────────────────────────────────────── */
const CompetitionsSection = () => (
  <section className="relative w-full overflow-hidden bg-[#0c0404] py-14 px-4 sm:px-8 lg:px-16">

    {/* Background radial glow */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          'radial-gradient(ellipse 65% 60% at 10% 90%, rgba(160,18,12,0.45) 0%, rgba(90,8,6,0.18) 45%, transparent 70%)',
      }}
    />

    <div className="relative z-10 max-w-7xl mx-auto">

      <h2 className="competitions-title font-orbitron text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wider mb-10">
        Competitions &amp; Events
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

        {/* Column 1 — Live Now */}
        <div className="competitions-col opacity-0">
          <p className="font-roboto text-red-500 text-[11px] font-bold uppercase tracking-[0.2em] mb-3">
            Live Now
          </p>
          <div className="bg-[#170e0e] border border-white/10 rounded-xl p-5">
            <div className="flex items-center justify-between mb-1">
              <span className="font-roboto text-white font-bold text-[15px]">
                Bengaluru Regionals
              </span>
              <span className="font-roboto bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded tracking-wide">
                Ongoing
              </span>
            </div>
            <p className="font-roboto text-gray-500 text-xs mb-5">Lorem Ipsum</p>
            <div className="h-48 w-full">
              <TournamentBracket />
            </div>
          </div>
        </div>

        {/* Column 2 — Upcoming */}
        <div className="competitions-col opacity-0">
          <p className="font-roboto text-gray-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-3">
            Upcoming
          </p>
          <div className="flex flex-col gap-4">
            {upcomingEvents.map((ev) => (
              <div
                key={ev.city}
                className="bg-[#170e0e] border border-white/10 rounded-xl p-5"
              >
                <h3 className="font-roboto text-white font-bold text-[15px] mb-3">
                  Event in {ev.city}
                </h3>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { label: 'Date',     value: ev.date },
                    { label: 'Location', value: ev.location },
                    { label: 'Category', value: ev.category },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <p className="font-roboto text-gray-500 text-[10px] leading-tight">{label}</p>
                      <p className="font-roboto text-white text-xs font-medium">{value}</p>
                    </div>
                  ))}
                </div>
                <button className="font-roboto w-full bg-red-600 hover:bg-red-500 active:scale-[0.98] text-white text-sm font-bold py-2.5 rounded transition-all duration-200 tracking-widest">
                  REGISTER
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3 — Past Results */}
        <div className="competitions-col opacity-0">
          <p className="font-roboto text-gray-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-3">
            Past Results
          </p>
          <div className="bg-[#170e0e] border border-white/10 rounded-xl p-5 divide-y divide-white/10">
            {pastResults.map((name, i) => (
              <div key={i} className={i === 0 ? 'pb-4' : 'py-4'}>
                <h3 className="font-roboto text-white font-bold text-sm">{name}</h3>
                <p className="font-roboto text-gray-500 text-xs mt-0.5">Lorem Ipsum</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>

  </section>
)

export default CompetitionsSection
