import React from 'react'
import "./services.css";
import {BiCheck} from 'react-icons/bi'
function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Logo/Graphic Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Collaborate with our talented designers to bring your wildest
                design ideas to life.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Craft a stunning logo that sparks instant recognition and leaves
                a lasting impression.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Visual Storytelling: Elevate your brand's narrative with
                captivating graphics
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Fuel your social media presence with visually stunning graphics
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Transform your packaging into a work of art, creating an
                irresistible allure
              </p>
            </li>
          </ul>
        </article>
        {/* END OF LOGO AND GRAPHIC DESIGN  */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development </h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Transform your vision into a visually stunning and highly
                functional website
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                harness the full potential of the web with a meticulously
                designed
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                {" "}
                Delight your visitors with a seamless and smooth browsing
                experience.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Our web development expertise merges cutting-edge technology
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Reach your audience on any device with a responsive website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Experience lightning-fast loading times, smooth navigation.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Our web development solutions blend creativity and
                functionality.
              </p>
            </li>
          </ul>
        </article>

        {/* END OF WEB DEVELOPMENT  */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Unlock the power of compelling content that captivates your
                audience
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Harness the persuasive power of words with our expert content
                creation services
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Ignite your digital platforms with high-quality, SEO-optimized
                content
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Create a lasting impression with content that informs, inspires
                your audience
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Our content creation services deliver impactful and persuasive
                copy.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION  */}
      </div>
    </section>
  );
}

export default Services
