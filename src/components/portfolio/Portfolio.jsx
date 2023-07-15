import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="IMAGE1" />
          </div>
          <h3>TextUtils</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Abhishek542003/TextUtils"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://abhishek542003.github.io/TextUtils/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="IMAGE2" />
          </div>
          <h3>Dicee Game</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Abhishek542003/Dice-Game.github.io"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://abhishek542003.github.io/Dice-Game.github.io/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="IMAGE3" />
          </div>
          <h3>Digital Clock</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Abhishek542003/Digital-Clock.github.io"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://abhishek542003.github.io/Digital-Clock.github.io/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="IMAGE4" />
          </div>
          <h3>Weather Application</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Abhishek542003/Weather-Application"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://abhishek542003.github.io/Weather-Application/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="IMAGE5" />
          </div>
          <h3>Smart Attendance System</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Abhishek542003/Attendance_System"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/Abhishek542003/Attendance_System"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="IMAGE6" />
          </div>
          <h3>NewsShark</h3>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Abhishek542003/NewsShark-NewsApp"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/Abhishek542003/NewsShark-NewsApp"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio
