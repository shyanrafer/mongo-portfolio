// this will be at the top of the webpage - will contain info about me and i am thinking a set of icons to showcase what i am proficient in
// contact info will be within this section as well
// try to make it suh that when my email is clicked it opens up the client's email app
import '../../css/index.css'
import '../../css/aboutMe.css'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNode } from 'react-icons/fa'; // Import proficiency icons

function AboutMe() {
  return (
    <section className="aboutMe">
      <h2>About Me</h2>
      <p>
        Hi, I’m Ryan Shaffer, a full-stack web developer with experience in building dynamic applications.
      </p>
      <div className='iconSection'>
        <FaHtml5 title="HTML5" className="proficiency-icons"/>
        <FaCss3Alt title="CSS3" className="proficiency-icons"/>
        <FaJsSquare title="JavaScript" className="proficiency-icons"/>
        <FaReact title="React" className="proficiency-icons"/>
        <FaNode title="Node.js" className="proficiency-icons"/>
        {/* lookup more icons */}
      </div>

      <h3>Contact Me</h3>
      <p>
        Email me at <a href="mailto:ryanshaffer1324@gmail.com">ryanshaffer1324@gmail.com</a>
      </p>
    </section>
  );
}

export default AboutMe;