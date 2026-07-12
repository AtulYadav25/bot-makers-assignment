import heroImage from '../../assets/heroAssets/hero.png'

const HeroSection = () => (
  <section className="relative w-full min-h-[calc(100vh-64px)] overflow-hidden bg-black">

    {/* Background Image */}
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="BotLeague Arena"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    </div>

    {/* Live Badge */}
    <div className="relative z-10 flex justify-end pt-4 pr-4 sm:pr-8 lg:pr-16">
      <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm border border-white/20 rounded px-3 py-1.5">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
        </span>
        <span className="font-roboto text-xs text-white/80">
          LIVE : Episode 14 · Bengaluru Regionals
        </span>
        <a
          href="#"
          className="font-roboto text-xs font-bold text-yellow-400 hover:text-yellow-300 transition-colors ml-1"
        >
          WATCH LIVE
        </a>
      </div>
    </div>

    {/* Hero Content */}
    <div className="relative z-10 flex flex-col justify-center min-h-[calc(100vh-120px)] px-4 sm:px-8 lg:px-16 pb-12 max-w-4xl">

      <h1 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-black text-white leading-[1.05] tracking-wide uppercase mb-4">
        India's Ultimate
        <br />
        Robotics Arena
      </h1>

      <p className="font-roboto text-sm sm:text-base text-gray-300 max-w-sm mb-8 leading-relaxed">
        Build. Compete. Rank. The National Ecosystem for Robotics Arena
      </p>

      <div className="flex flex-wrap gap-4">
        <a
          href="#"
          className="font-roboto inline-flex items-center px-6 py-3 text-sm font-bold text-white bg-red-600 rounded hover:bg-red-500 active:scale-95 transition-all duration-200 shadow-lg shadow-red-600/30"
        >
          CREATE ACCOUNT
        </a>
        <a
          href="#"
          className="font-roboto inline-flex items-center px-6 py-3 text-sm font-bold text-white border-2 border-white/70 rounded hover:bg-white/10 active:scale-95 transition-all duration-200"
        >
          EXPLORE EVENTS
        </a>
      </div>
    </div>

  </section>
)

export default HeroSection
