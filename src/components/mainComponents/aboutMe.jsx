// this will be at the top of the webpage - will contain info about me and i am thinking a set of icons to showcase what i am proficient in
// contact info will be within this section as well
// try to make it suh that when my email is clicked it opens up the client's email app

import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNode } from 'react-icons/fa'; // Import proficiency icons

// need to import css for style
function AboutMe() {
  return (
    <section className="aboutMe">
      <h2>About Me</h2>
      <p>
        Hi, I’m Ryan Shaffer, a full-stack web developer with experience in building dynamic applications.
      </p>
      <div className="proficiency-icons">
        <FaHtml5 title="HTML5" />
        <FaCss3Alt title="CSS3" />
        <FaJsSquare title="JavaScript" />
        <FaReact title="React" />
        <FaNode title="Node.js" />
        {/* lookup more icons */}
      </div>

      <h3>Contact Me</h3>
      <p>
        {/* pulls up client's email upon click */}
        Email me at <a href="mailto:ryanshaffer1324@gmail.com">ryanshaffer1324@gmail.com</a>
      </p>
    </section>
  );
}

export default AboutMe;