import { FaUsers } from 'react-icons/fa'
import { MdOutlineLeaderboard } from 'react-icons/md'
import { LiaToolsSolid } from 'react-icons/lia'
import { GiIndianPalace } from 'react-icons/gi'
import type { IconType } from 'react-icons'

/* ─── Data ─────────────────────────────────────────────────────────────────── */
interface JourneyStep {
  step: string
  title: string
  icon: IconType
  highlight: boolean
}

const journeySteps: JourneyStep[] = [
  {
    step: 'Step 1',
    title: 'Build Your\nTeam',
    icon: LiaToolsSolid,
    highlight: false,
  },
  {
    step: 'Step 2',
    title: 'Compete Across\nIndia',
    icon: GiIndianPalace,
    highlight: true,
  },
  {
    step: 'Step 3',
    title: 'Earn National\nRanking & Value',
    icon: MdOutlineLeaderboard,
    highlight: false,
  },
  {
    step: 'Step 4',
    title: 'Join The\nLeague',
    icon: FaUsers,
    highlight: false,
  },
]

const UserJourneySection = () => (
  <section className="relative w-full bg-black overflow-hidden py-20 px-4 sm:px-8 lg:px-16">
    <div className="relative z-10 max-w-5xl mx-auto">

      <p className="font-roboto text-center text-red-500 text-xs font-bold uppercase tracking-[0.3em] mb-2">
        User Journey
      </p>
      <h2 className="font-orbitron text-center text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide mb-3">
        Your Path to the League
      </h2>
      <p className="font-roboto text-center text-gray-500 text-sm mb-16">
        Lorem Ipsum Lorem Ipsum Lorem Ipsum
      </p>

      {/* Steps row */}
      <div className="relative flex items-start justify-between gap-0">

        {/* Horizontal connecting line */}
        <div
          className="journey-line absolute top-[52px] left-[calc(12.5%)] right-[calc(12.5%)] h-[2px] z-0 origin-left scale-x-0"
          style={{ background: 'linear-gradient(to right, #3b5bdb, #4c6ef5, #3b5bdb)' }}
        />

        {journeySteps.map(({ step, title, icon: Icon, highlight }) => (
          <div key={step} className="journey-step opacity-0 relative z-10 flex flex-col items-center flex-1 px-2">

            {/* Circle icon */}
            <div
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center mb-5 transition-transform duration-300 hover:scale-105"
              style={{
                background: '#1a1a1a',
                boxShadow: highlight
                  ? '0 0 0 3px #4c6ef5, 0 0 22px 4px rgba(76,110,245,0.55)'
                  : '0 0 0 2.5px #3b5bdb, 0 0 12px 2px rgba(59,91,219,0.25)',
              }}
            >
              <Icon className="text-white text-3xl sm:text-4xl" />
            </div>

            <p className="font-roboto text-red-500 text-[10px] font-bold uppercase tracking-[0.25em] mb-1">
              {step}
            </p>
            <p className="font-roboto text-white text-sm sm:text-base font-bold text-center uppercase leading-snug whitespace-pre-line">
              {title}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default UserJourneySection

