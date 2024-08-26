import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/img5.jpg'
import IMG2 from '../../assets/img2.png'
import IMG4 from '../../assets/img4.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

      <article className='portfolio__item'>
  <div className="portfolio__item-image">
    <img src={IMG1} alt="Multilingual System" />
  </div>
  <h3>Multilingual System</h3>
  <small className='text-light'>Spring Boot | ReactJs | HSQLDB</small>
  <p className='portfolio__item-description'>
  Developed a multilingual system for application localization, boosting performance by 30% and reducing UI load times by 40%.
  </p>
  <div className="portfolio__item-cta">
    {/* Add call-to-action buttons if needed */}
  </div>
</article>


        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Expense Tracker</h3>
            <small className='text-light'>ReactJs | Spring Boot | MySQL</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/bhskr-j-dka/Expense_tracker_basic_api-Spring-boot-" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>Photography Site</h3>
            <small className='text-light'>ReactJs</small>
            <div className="portfolio__item-cta">
            
              <a href="https://bjytideka.wixsite.com/my-site-1/about" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
        
      </div>
    </section>
  )
}

export default Myprojects