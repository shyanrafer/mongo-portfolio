// import { useState } from 'react';
import Header from '../components/mainComponents/header';
import AboutMe from '../components/mainComponents/aboutMe';
// import Portfolio from '../components/pageComponents/portfolio';
import Contact from '../components/pageComponents/contact';
// import Resume from '../components/pageComponents/resume';
// import Footer from '../components/mainComponents/footer';
function App() {
// i plan on changing where the about me and all that is - i want it to be on the home page - the welcome - with a list of icons beneath that shows what i am proficient in
  return (
    <div>
      <Header />
      <AboutMe />
      {/* /* <Portfolio /> */}
      <Contact />
      {/* <Resume />
      <Footer /> */}
    </div>
  );
}

export default App;