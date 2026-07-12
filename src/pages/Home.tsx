import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import HeroSection from '../components/sections/HeroSection'
import CompetitionsSection from '../components/sections/CompetitionsSection'
import UserJourneySection from '../components/sections/UserJourneySection'
import WhatIsBotLeagueSection from '../components/sections/WhatIsBotLeagueSection'
import CategoriesSection from '../components/sections/CategoriesSection'
import SportsDisciplinesSection from '../components/sections/SportsDisciplinesSection'
import LeagueAdvantageSection from '../components/sections/LeagueAdvantageSection'
import JoinEcosystemSection from '../components/sections/JoinEcosystemSection'
import SponsorsSection from '../components/sections/SponsorsSection'

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  useEffect(() => {
    // ─── 1. Initialize Lenis Smooth Scroll ───
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    })

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    // ─── 2. GSAP ScrollTrigger Animations ───

    // A. Competitions & Events
    gsap.fromTo(
      '.competitions-title',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.competitions-title',
          start: 'top 85%',
        },
      }
    )

    gsap.fromTo(
      '.competitions-col',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.competitions-col',
          start: 'top 80%',
        },
      }
    )

    // B. User Journey
    gsap.fromTo(
      '.journey-line',
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.2,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '.journey-line',
          start: 'top 85%',
        },
      }
    )

    gsap.fromTo(
      '.journey-step',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.journey-step',
          start: 'top 80%',
        },
      }
    )

    // C. What is BotLeague?
    gsap.fromTo(
      '.whatis-left',
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.whatis-left',
          start: 'top 85%',
        },
      }
    )

    gsap.fromTo(
      '.whatis-right',
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.whatis-right',
          start: 'top 85%',
        },
      }
    )

    // D. Categories
    gsap.fromTo(
      '.categories-title',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.categories-title',
          start: 'top 85%',
        },
      }
    )

    gsap.fromTo(
      '.category-card',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.category-card',
          start: 'top 80%',
        },
      }
    )

    // E. Sports Disciplines
    gsap.fromTo(
      '.sports-title',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.sports-title',
          start: 'top 85%',
        },
      }
    )

    gsap.fromTo(
      '.sports-card',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.sports-card',
          start: 'top 80%',
        },
      }
    )

    // F. League Advantage
    gsap.fromTo(
      '.advantage-title',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.advantage-title',
          start: 'top 85%',
        },
      }
    )

    gsap.fromTo(
      '.advantage-item',
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.advantage-item',
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      '.advantage-image',
      { opacity: 0, x: 50, scale: 0.95 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.advantage-image',
          start: 'top 85%',
        },
      }
    )

    // G. Join the Ecosystem
    gsap.fromTo(
      '.ecosystem-title',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.ecosystem-title',
          start: 'top 85%',
        },
      }
    )

    gsap.fromTo(
      '.ecosystem-card',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.ecosystem-card',
          start: 'top 80%',
        },
      }
    )

    // H. Sponsors
    gsap.fromTo(
      '.sponsors-title',
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.sponsors-title',
          start: 'top 85%',
        },
      }
    )

    gsap.fromTo(
      '.sponsor-item',
      { opacity: 0, scale: 0.85 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: '.sponsor-item',
          start: 'top 85%',
        },
      }
    )

    // Cleanup on unmount
    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <>
      <HeroSection />
      <CompetitionsSection />
      <UserJourneySection />
      <WhatIsBotLeagueSection />
      <CategoriesSection />
      <SportsDisciplinesSection />
      <LeagueAdvantageSection />
      <JoinEcosystemSection />
      <SponsorsSection />
    </>
  )
}

export default Home




