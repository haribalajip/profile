import './App.css'; 
import HeroSection from './components/hero-section/hero-section'
import FeatureSection from './components/feature-section/feature-section'
import { useState } from 'react';
import Constants from './constants/constants'
const App = () => {
  const [ heroSectionState ]  = useState({
    heroSectionConfig: Constants.heroSectionConfig
  });
  const [ featureSectionState ]  = useState({
    featureSectionConfig: Constants.featureSectionConfig
  });
  return (
  <div>
    <HeroSection config={heroSectionState.heroSectionConfig}></HeroSection>
    <FeatureSection config={featureSectionState.featureSectionConfig}></FeatureSection>
  </div>
  );
}

export default App;
