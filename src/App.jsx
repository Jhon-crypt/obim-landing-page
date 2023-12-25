//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import Header from './components/header/header'
import LandingHeroPage from './components/hero/landingHero'
import FeatureSection from './components/section/fetaureSection'
import SectionHero from './components/hero/sectionHero'
import SecondSectionHero from './components/hero/secondSectionHero'
import CallToActionHero from './components/hero/callToActionHero'
import Footer from './components/footer/footer'
import './App.css'

function App() {
  
  return (
    <>
      <div>
        <Header />
        <LandingHeroPage />
        <FeatureSection /> 
        <SectionHero />
        <SecondSectionHero /> 
        <CallToActionHero />
        <Footer />
      </div>
    </>
  )
}

export default App
