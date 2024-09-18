// this is to be the main point of access for my jsx files
// import the things here and then export main? or from main... 
// -- export this file, import the parts and 
import Header from './mainComponents/header';
import AboutMe from './mainComponents/aboutMe';
import Portfolio from './components/Portfolio';
import Contact from './mainComponents/contact';
import Resume from './mainComponents/resume';
import Footer from './mainComponents/footer';

export const mainComponents = () => [
  Header,
  AboutMe,
  Portfolio,
  Contact,
  Resume,
  Footer, 
] 