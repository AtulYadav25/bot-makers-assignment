import roboRace from '../../assets/heroAssets/sports/robo-race.jpg'
import lineFollower from '../../assets/heroAssets/sports/line-follower.jpg'
import rcRacing from '../../assets/heroAssets/sports/rc-racing.jpg'
import dronRacing from '../../assets/heroAssets/sports/dron-racing.jpg'
import roboHockey from '../../assets/heroAssets/sports/robo-hockey.jpg'
import roboWar from '../../assets/heroAssets/sports/robo-war.jpg'

/* ─── Data ─────────────────────────────────────────────────────────────────── */
const disciplines = [
  { image: roboRace,    label: 'Robo Race' },
  { image: lineFollower, label: 'Line Follower' },
  { image: rcRacing,    label: 'RC Racing' },
  { image: dronRacing,  label: 'FPV Drone Racing &\nAeromodelling' },
  { image: roboHockey,  label: 'Robo Hockey' },
  { image: roboWar,     label: 'Robo War' },
]

/* ─── Component ─────────────────────────────────────────────────────────────── */
const SportsDisciplinesSection = () => (
  <section className="relative w-full bg-[#0a0a0a] py-14 px-4 sm:px-8 lg:px-16">
    <div className="max-w-7xl mx-auto">

      {/* Eyebrow + Title */}
      <p className="font-roboto text-red-500 text-xs font-bold uppercase tracking-[0.3em] mb-1">
        Sports
      </p>
      <h2 className="sports-title font-orbitron text-3xl sm:text-4xl font-black text-white uppercase tracking-wide mb-8">
        Competition Disciplines
      </h2>

      {/* Grid — 4 cols top row, 2 cols (left-aligned) bottom row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">

        {/* Top row — 4 cards */}
        {disciplines.slice(0, 4).map(({ image, label }) => (
          <div key={label} className="sports-card opacity-0">
            <DisciplineCard image={image} label={label} />
          </div>
        ))}

        {/* Bottom row — 2 cards, keep left-aligned */}
        {disciplines.slice(4).map(({ image, label }) => (
          <div key={label} className="sports-card opacity-0">
            <DisciplineCard image={image} label={label} />
          </div>
        ))}

      </div>

    </div>
  </section>
)

/* ─── Card sub-component ────────────────────────────────────────────────────── */
interface CardProps {
  image: string
  label: string
}

const DisciplineCard = ({ image, label }: CardProps) => (
  <div className="relative group overflow-hidden rounded-lg cursor-pointer">
    {/* Image */}
    <div className="aspect-[4/3] overflow-hidden">
      <img
        src={image}
        alt={label}
        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    {/* Bottom dark gradient + label */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
    <p className="absolute bottom-2.5 left-3 right-3 font-roboto text-white text-xs sm:text-sm font-bold leading-tight whitespace-pre-line">
      {label}
    </p>
  </div>
)

export default SportsDisciplinesSection
