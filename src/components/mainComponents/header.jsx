// the header will contain my anem, contact info, and a navbar - need to import navbar here
// Header
//  Display the developer’s name.
//  Implement navigation with links to: About Me, Portfolio, Contact, and Resume.
//  Ensure the current section is highlighted in the navigation.
import '../../css/header.css';

function Header() {
 return (
  <section className='headSection'>
    <h1>Ryan Shaffer</h1>
    <nav className='navSection'>
      <ul>
        <li><a href="#about">About me</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#resume">Resume</a></li>
      </ul>
    </nav>
  </section>
 )
}

export default Header