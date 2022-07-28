import React from 'react';
import './skills.css';
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiNodedotjs, SiMongodb, SiPython, SiNumpy, SiPandas, SiTableau, SiTensorflow, SiScikitlearn} from 'react-icons/si';

const Skills = () => {
  return (
    <section id='skills'>
     <h5>What are some of my technical</h5>
     <h2>Skills</h2>
     <div className="container skills__container">
       <div className="skills__swe">
         <h3>Software Development</h3>
         <div className="skills__content">
          <article className='skills__details'>
            <SiJavascript className='skills__icons'/>
            <h4>JavaScript</h4>
          </article>
          <article className='skills__details'>
            <SiHtml5 className='skills__icons'/>
            <h4>HTML</h4>
          </article>
          <article className='skills__details'>
            <SiCss3 className='skills__icons'/>
            <h4>CSS</h4>
          </article>
          <article className='skills__details'>
            <SiReact className='skills__icons'/>
            <h4>React</h4>
          </article>
          <article className='skills__details'>
            <SiNodedotjs className='skills__icons'/>
            <h4>Node.js</h4>
          </article>
          <article className='skills__details'>
            <SiMongodb className='skills__icons'/>
            <h4>MongoDB</h4>
          </article>
         </div>
       </div>
       <div className="skills__dsc">
         <h3>Data Science</h3>
         <div className="skills__content">
          <article className='skills__details'>
              <SiPython className='skills__icons'/>
              <h4>Python</h4>
            </article>
            <article className='skills__details'>
              <SiNumpy className='skills__icons'/>
              <h4>NumPy</h4>
            </article>
            <article className='skills__details'>
              <SiPandas className='skills__icons'/>
              <h4>Pandas</h4>
            </article>
            <article className='skills__details'>
              <SiTableau className='skills__icons'/>
              <h4>Tableau</h4>
            </article>
            <article className='skills__details'>
              <SiTensorflow className='skills__icons'/>
              <h4>Tensorflow</h4>
            </article>
            <article className='skills__details'>
              <SiScikitlearn className='skills__icons'/>
              <h4>Scikit-Learn</h4>
            </article>
          </div>
         </div>
       </div>
    </section>
  )
};

export default Skills;