import React from 'react';
import { FaLaptopCode, FaProjectDiagram, FaSchool } from 'react-icons/fa';
import PROFILE from '../../assets/new_profile.JPG';
import './about.css';

const About = () => {
  return (
    <section id='about'>
     <h5>A little more</h5>
     <h2>About Me</h2>
     <div className="container about__container">
      <div className="about__me">
        <div className="about__me-img">
          <img src={PROFILE} alt="profile" />
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <div className="about__icon">
              <FaLaptopCode />
            </div>
            <h5>Work Experience</h5>
            <small>• ML Intern @Xenon Health</small>
            <br />
            <small>• SDE Intern @CaviSense</small>
            <br />
            <small>• DS Intern @Scripps Research</small>
            <br />
            <small>• (failed) Founder @bucket</small>
            <br />
          </article>
          <article className="about__card">
            <div className="about__icon">
              <FaProjectDiagram />
            </div>
            <h5>Research & Projects</h5>
            <small>• HCI Research-Prof Lydia Chilton</small>
            <br />
            <small>• GSW Warriors Dashboard</small>
            <br />
            <small>• CO2 Footprint Calculator</small>
            <br />
            <small>• EDA and ML Projects</small>
            <br />
          </article>
          <article className="about__card">
            <div className="about__icon">
              <FaSchool />
            </div>
            <h5>Education</h5>
            <small>Columbia University 2022-2025</small>
            <br />
            <small>UC San Diego 2021-2022</small>
            <br />
            <small>CFLS-AP 2017-2021</small>
          </article>
        </div>
        <p>
        I’m Zi (Ziheng Huang), a senior at Columbia University majoring in Computer Science. I’m deeply passionate about AI, software development, and turning complex data into meaningful insights. Whether it’s building user-centered applications or exploring the latest in machine learning, I love solving problems through code. For me, coding isn’t just about the tech — it’s about creating solutions that help people and make life better. Outside of tech, I’m your typical car guy and an avid basketball player, and I love going on adventures in the wild!
        </p>
      </div>
     </div>
    </section>
  )
};

export default About;