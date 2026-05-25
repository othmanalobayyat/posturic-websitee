import Nav           from '@/components/ui/Nav'
import Hero          from '@/components/sections/Hero'
import Problem       from '@/components/sections/Problem'
import Ecosystem     from '@/components/sections/Ecosystem'
import Features      from '@/components/sections/Features'
import Architecture  from '@/components/sections/Architecture'
import AICamera      from '@/components/sections/AICamera'
import SmartChair    from '@/components/sections/SmartChair'
import RealtimeSystem from '@/components/sections/RealtimeSystem'
import DownloadCenter from '@/components/sections/DownloadCenter'
import TechStack     from '@/components/sections/TechStack'
import FutureVision  from '@/components/sections/FutureVision'
import Footer        from '@/components/sections/Footer'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Ecosystem />
        <Features />
        <Architecture />
        <AICamera />
        <SmartChair />
        <RealtimeSystem />
        <DownloadCenter />
        <TechStack />
        <FutureVision />
      </main>
      <Footer />
    </>
  )
}
