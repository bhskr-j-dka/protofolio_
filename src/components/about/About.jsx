import React from 'react';
import './about.css';
import myImage from '../../assets/IMG_3366.jpg';
import { GiGraduateCap } from 'react-icons/gi';
import { BsBookmarkStar } from 'react-icons/bs';
import { TfiWorld } from 'react-icons/tfi';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={myImage} alt="Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <GiGraduateCap className='about__icon' />
              <h5>Degree</h5>
              <small>B.Tech in Electronics and Communication Engineering <br /><i>National Institute of Technology, Silchar</i></small>
            </article>

            <article className='about__card'>
              <BsBookmarkStar className='about__icon' />
              <h5>Experience</h5>
              <small>1+ year of experience as a Full Stack Developer</small>
            </article>

            <article className='about__card'>
              <TfiWorld className='about__icon' />
              <h5>Skills</h5>
              <small>
                <ul>
                  <li>Java/Spring Boot</li>
                  <li>React.js</li>
                  <li>SQL Databases</li>
                </ul>
              </small>
            </article>
          </div>
          <p>
            I'm a <b>Full Stack Developer</b> with one+ year of experience. I have a solid foundation in building robust and scalable applications using Java, Spring Boot, and React.js. I'm passionate about learning new technologies and continuously improving my skills to tackle challenging problems in software development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
