import leaderboardImage from '../../assets/heroAssets/leaderboard.png'
import { FaMedal, FaGavel, FaBriefcase, FaBolt } from 'react-icons/fa'
import type { IconType } from 'react-icons'

/* ─── Data ─────────────────────────────────────────────────────────────────── */
interface Advantage {
  icon: IconType
  title: string
  description: string
}

const advantages: Advantage[] = [
  {
    icon: FaMedal,
    title: 'National Recognition',
    description: '"Benchmark your skills on India\'s official robotics leaderboard."',
  },
  {
    icon: FaGavel,
    title: 'Fair Judging',
    description: '"Compete with confidence under standardized, expert-led evaluation."',
  },
  {
    icon: FaBriefcase,
    title: 'Career Ops',
    description: '"Bridge the gap between arena victories and top-tier tech placements."',
  },
  {
    icon: FaBolt,
    title: 'High - Energy Eco',
    description: '"Join a nationwide community of elite innovators and robotics athletes."',
  },
]

/* ─── Component ─────────────────────────────────────────────────────────────── */
const LeagueAdvantageSection = () => (
  <section className="relative w-full bg-black py-16 px-4 sm:px-8 lg:px-16 overflow-hidden">

    {/* Subtle top divider glow */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ── Left: Text content ── */}
        <div>
          {/* Heading */}
          <h2 className="advantage-title font-orbitron text-3xl sm:text-4xl font-black text-white uppercase leading-tight mb-10">
            <span className="text-red-500">Why Register ?</span>
            <br />
            The League Advantage
          </h2>

          {/* Advantages list */}
          <div className="flex flex-col gap-7">
            {advantages.map(({ icon: Icon, title, description }) => (
              <div key={title} className="advantage-item opacity-0 flex items-start gap-4">

                {/* Icon circle */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600/15 border border-red-600/40 flex items-center justify-center mt-0.5">
                  <Icon className="text-red-500 text-base" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-roboto text-white font-black uppercase text-sm tracking-wide mb-1">
                    {title}
                  </h3>
                  <p className="font-roboto text-gray-400 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Leaderboard image ── */}
        <div className="advantage-image opacity-0 flex justify-center lg:justify-end">
          <div className="relative">
            {/* Ambient glow behind image */}
            <div className="absolute inset-0 rounded-2xl blur-3xl opacity-20 bg-blue-500 scale-90" />
            <img
              src={leaderboardImage}
              alt="BotLeague Leaderboard"
              className="relative w-full max-w-xs sm:max-w-md object-contain drop-shadow-2xl"
            />
          </div>
        </div>


      </div>
    </div>
  </section>
)

export default LeagueAdvantageSection
