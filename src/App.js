import './App.css'; 
import HeroSection from './components/hero-section/hero-section';
import FeatureSection from './components/feature-section/feature-section';
import History from './components/history/component';
import { useState } from 'react';
import Constants from './constants/constants';

const App = () => {
  const [ heroSectionState ]  = useState({
    heroSectionConfig: Constants.heroSectionConfig
  });
  const [ featureSectionState ]  = useState({
    featureSectionConfig: Constants.featureSectionConfig
  });
  const [ historySectionState ]  = useState({
    historySectionConfig: Constants.historySectionConfig
  });
  return (
  <div>
    <HeroSection config={heroSectionState.heroSectionConfig}></HeroSection>
    <FeatureSection config={featureSectionState.featureSectionConfig}></FeatureSection>
    <History config={historySectionState.historySectionConfig}/>
  </div>
  );
}

export default App;