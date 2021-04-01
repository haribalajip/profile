import './App.css'; 
import HeroSection from './components/hero-section/hero-section'
import { useState } from 'react';
import Constants from './constants/constants'
const App = () => {
  const [ heroSectionState ]  = useState({
    heroSectionConfig: Constants.heroSectionConfig
  })
  return (
  <HeroSection config={heroSectionState.heroSectionConfig}></HeroSection>
  );
}

export default App;
