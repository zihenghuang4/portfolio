import React from 'react';
import './about.css';
import PROFILE from '../../assets/profile.jpeg';
import { FaLaptopCode, FaProjectDiagram, FaSchool } from 'react-icons/fa';

const About = () => {
  return (
    <section id='about'>
     <h5>wanna know a little more</h5>
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
            <h5>Experience</h5>
            <small>• Data Science Intern @SRTI</small>
            <br />
            <small>• Developer @UCSDACM</small>
            <br />
            <small>• Developer @UCSDTripleC</small>
            <br />
            <small>• CS TA Intern @Zhongxi</small>
          </article>
          <article className="about__card">
            <div className="about__icon">
              <FaProjectDiagram />
            </div>
            <h5>Other Projects</h5>
            <small>• Co2 Footprint Calculator</small>
            <br />
            <small>• Weather App</small>
            <br />
            <small>• High School Maker's Portfolio</small>
            <br />
            <small>• EDA and ML Projects</small>
            <br />
            <small>• School Projects</small>
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
          You found me! My name is Ziheng, and I'm currently a sophomore at Columbia University studying Computer Science. I'm a passion-driven learner, and I'm fasinated by coding, especially AI and software development. I enjoy extracting insights from seemingly unorganized data and use them to make the best decisions possible. I also love developing software that meet people's need because at the end of the day, coding is a tool designed to better people's lives around the world. I'm also a out-door person! I play basketball a lot, and I'm a huge Warriors fan --- Let's go DubNation!!
        </p>
      </div>
     </div>
    </section>
  )
};

export default About;