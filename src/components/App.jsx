import { useState } from 'react';
import { 
  Header,
  AboutMe,
  Portfolio,
  Contact,
  Resume,
  Footer, } from './mainComponents/main'

function App() {
  const [currentSection, setCurrentSection] = useState('AboutMe');
// i plan on changing where the about me and all that is - i want it to be on the home page - the welcome - with a list of icons beneath that shows what i am proficient in
  const renderSection = () => {
    switch (currentSection) {
      case 'AboutMe':
        return <AboutMe />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div>
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      {renderSection()}
      <Footer />
    </div>
  );
}

export default App;