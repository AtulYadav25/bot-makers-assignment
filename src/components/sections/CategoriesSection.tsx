import { FaLightbulb, FaBitcoin } from 'react-icons/fa'
import { BsRobot } from 'react-icons/bs'
import { MdEngineering } from 'react-icons/md'
import type { IconType } from 'react-icons'

/* ─── Data ─────────────────────────────────────────────────────────────────── */
interface Category {
  icon: IconType
  name: string
  description: string
  highlighted: boolean
}

const categories: Category[] = [
  {
    icon: BsRobot,
    name: 'Mini\nMakers',
    description: 'Where Creativity Meets Logic.',
    highlighted: true,
  },
  {
    icon: FaLightbulb,
    name: 'Junior\nInnovators',
    description: 'Engineering & Strategy Fundamentals.',
    highlighted: false,
  },
  {
    icon: MdEngineering,
    name: 'Young\nEngineers',
    description: 'Advanced Wireless & Autonomous Control.',
    highlighted: false,
  },
  {
    icon: FaBitcoin,
    name: 'Robo\nMinds',
    description: 'Elite Professional Sports & Robotics.',
    highlighted: false,
  },
]

/* ─── Component ─────────────────────────────────────────────────────────────── */
const CategoriesSection = () => (
  <section className="relative w-full bg-[#0a0a0a] pb-20 pt-4 px-4 sm:px-8 lg:px-16">
    <div className="max-w-7xl mx-auto">

      <h2 className="categories-title font-orbitron text-3xl sm:text-4xl font-black text-white uppercase mb-8 tracking-wide">
        Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map(({ icon: Icon, name, description, highlighted }) => (
          <div
            key={name}
            className={`
              category-card opacity-0
              relative flex flex-col p-6 rounded-lg border
              transition-all duration-300 group
              hover:border-amber-400/60 hover:-translate-y-1
              ${highlighted
                ? 'border-amber-500 bg-[#161100]'
                : 'border-white/12 bg-[#111111]'
              }
            `}
          >

            {/* Icon */}
            <div className="mb-5">
              <Icon
                className={`text-5xl transition-transform duration-300 group-hover:scale-110 ${
                  highlighted ? 'text-amber-400' : 'text-amber-400/80'
                }`}
              />
            </div>

            {/* Category name */}
            <h3 className="font-orbitron text-white font-black text-xl uppercase leading-tight mb-3 whitespace-pre-line">
              {name}
            </h3>

            {/* Description */}
            <p className="font-roboto text-gray-400 text-sm leading-relaxed mb-8 flex-1">
              {description}
            </p>

            {/* Learn More CTA */}
            <a
              href="#"
              className={`
                font-roboto inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest
                transition-colors duration-200 pt-4 border-t
                ${highlighted
                  ? 'text-amber-400 hover:text-amber-300 border-amber-500/30'
                  : 'text-amber-400/80 hover:text-amber-400 border-white/10'
                }
              `}
            >
              LEARN MORE <span className="text-base leading-none">→</span>
            </a>
          </div>
        ))}
      </div>

    </div>
  </section>
)

export default CategoriesSection
