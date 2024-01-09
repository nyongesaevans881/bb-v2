import '../custom-css/home.css';QuoteForm
import showcase from "../Assets/home/web-development.png";
import discount from "../Assets/home/discount.png";
import about from "../Assets/about/banner.png";
import card from "../Assets/services/triangle.png";
import mobile from "../Assets/mobile&wordpress/banner-mob-app.png";
import wordpress from "../Assets/mobile&wordpress/wordpress.png";
import QuoteForm from '../components/QuoteForm';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import TypingAnimation from "../components/TypingAnimation";
import Counter from "../components/Counter";
import Testimonials from "../components/Testimonials";
import WhyCards from "../components/WhyCards";

const Home = () => {
  return (
    <motion.div
     className="home-container"
     intial={{opacity: 0}}
     animate={{opacity: 1}}
     exit={{opacity: 0}}
     >
      {/*========================== HERO CONTAINER ==================================*/}
      <section className="hero" id="hero">
        <div className="showcase">
          <div className="home-info">
            <div className="discount">
              <p>
                <img src={discount} alt="discount" />
                <span>&nbsp;20% Discount</span>&nbsp;on your first Project.
              </p>
            </div>
            <div className="main-text">
              <h1>
                Professional
                <br /> Software
                <br /> Developers
              </h1>
              <p className="tagline">
                Crafting Innovative Solutions to Help Brands, Businesses, and
                Organizations Enhance Their Online Presence in This Rapidly
                Growing Digital Landscape.
              </p>
              <p className="typing">
                Solutions in:{" "}
                <span>
                  <TypingAnimation />
                </span>
              </p>
            </div>
            <div className="buttons">
              <a href="#">Hire Us</a>
              <a href="#about">About Us</a>
            </div>
          </div>
          <div className="home-image">
            <img src={showcase} alt="web-development" />
          </div>
        </div>
      </section>

      {/*========================================= ABOUT US ===================================*/}
      <section className="about" id="about">
        <div className="about-us">
          <div className="about-image">
            <img src={about} alt="about-image" />
          </div>
          <div className="about-boxes">
            <div className="box">
              <i className="fas fa-paint-brush"></i>Design
            </div>
            <div className="box">
              <i className="fa fa-code"></i>Development
            </div>
            <div className="box">
              <i className="fas fa-rocket"></i>Deployment
            </div>
            <div className="box">
              <i className="fas fa-chart-line"></i>Optimization
            </div>
          </div>
          <div className="about-info">
            <h3>About us</h3>
            <h1>
              Best Business
              <br /> Software Solutions
            </h1>
            <p>
              {" "}
              Binary Bros is a results-driven and impact-focused technology company,
               dedicated to providing cutting-edge solutions that propel businesses
                into the digital forefront. As a dynamic firm, we specialize in delivering
                 innovative services tailored to enhance your digital presence,
                  captivate audiences, and foster substantial growth.
                   Our team of skilled professionals harnesses the latest technologies
                    and strategic methodologies to ensure that startups,
                     established enterprises, and industry leaders achieve
                      unparalleled success in meeting their technological aspirations.
            </p>
            <div className="about-button">
              <a href="#">
                Read More&nbsp;<i className="fa fa-arrow-right"></i>
              </a>
              <a href="#">
                Get a Professional Website Today&nbsp;
                <i className="fa fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*======================= WHY CHOOSE US ====================================*/}
      <section className="why" id="why">
          <WhyCards/>
      </section>

      {/*=================================================== CORE SERVICES ==============================*/}
      <section className="services" id="services">
        <div className="service-header">
          <h3>What we do.!</h3>
          <h1>Core Services</h1>
        </div>
        <div className="service-cards">
          <div className="service-card">
            <div className="service-logo">
              <i className="fa fa-search"></i>
            </div>
            <div className="service-ifo">
              <h1>S.E.O</h1>
              <p>
                Enhance your online visibility with our SEO expertise. Our
                strategic approach ensures your brand stands out, driving
                increased traffic and engagement. Unlock the full potential of
                your digital presence with Binary Bros.
              </p>
            </div>
            <div className="service-buttons">
              <i className="fa fa-plus"></i>
              <a href="#">Read More</a>
            </div>
            <div className="image">
              <img src={card} />
            </div>
          </div>
          <div className="service-card active-card">
            <div className="service-logo">
              <i className="fa fa-laptop-code"></i>
            </div>
            <div className="service-ifo">
              <h1>Web Design / Dev</h1>
              <p>
                Immerse your brand in a captivating online experience with our
                Web Design and Development services. We transform ideas into
                visually stunning and functionally seamless websites, ensuring a
                strong online foundation for your business success.
              </p>
            </div>
            <div className="service-buttons">
              <i className="fa fa-plus"></i>
              <a href="#">Read More</a>
            </div>
            <div className="image">
              <img src={card} />
            </div>
          </div>
          <div className="service-card">
            <div className="service-logo">
              <i className="fa fa-bullhorn"></i>
            </div>
            <div className="service-ifo">
              <h1>Digital Marketing</h1>
              <p>
                Elevate your brand's reach and impact through our Digital
                Marketing solutions. From targeted campaigns to comprehensive
                strategies, we empower your business to thrive in the digital
                landscape. Maximize your online potential with Binary Bros at
                the forefront of digital marketing innovation.
              </p>
            </div>
            <div className="service-buttons">
              <i className="fa fa-plus"></i>
              <a href="#">Read More</a>
            </div>
            <div className="image">
              <img src={card} />
            </div>
          </div>
        </div>
      </section>

      {/*==================================================== MOBILE AND  WORDPRESS ============================*/}
      <section className="mobile-wordpress" id="mobile-wordpress">
        <div className="mobile">
          <div className="mobile-image">
            <img src={mobile} alt="Mobile Application" />
          </div>
          <div className="mobile-info">
            <h1>Let us build your Mobile App.!</h1>
            <div className="quality">
              <h2>
                <i className="fas fa-check"></i> Cross-Platform Expertise
              </h2>
              <p>
                Elevate your reach with Binary Bros' cross-platform mobile
                applications. We ensure seamless performance across various
                devices, expanding your audience reach.
              </p>
            </div>
            <div className="quality">
              <h2>
                <i className="fas fa-check"></i> Robust, Responsive, Modern
                Design
              </h2>
              <p>
                Immerse users in robust, responsive, and modern mobile solutions
                that enhance engagement. Go mobile with Binary Bros and
                transform your business.
              </p>
            </div>
            <div className="mobile-buttons">
              <a href="#">
                <i className="fas fa-mobile-alt"></i> Get Service
              </a>
              <a href="#">
                <i className="fas fa-external-link-alt"></i> Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="wordpress">
          <div className="wordpress-info">
            <h1>We offer WordPress development.</h1>
            <div className="quality">
              <h2>
                <i className="fas fa-check"></i> Powerful Content Management
              </h2>
              <p>
                Experience the strength of WordPress with Binary Bros. Harness
                powerful content management capabilities, providing you with
                unparalleled control over your digital presence.
              </p>
            </div>
            <div className="quality">
              <h2>
                <i className="fas fa-check"></i> Customization and Flexibility
              </h2>
              <p>
                Customize and shape your online presence with WordPress. Benefit
                from its flexibility and adaptability, allowing you to tailor
                your website to meet your unique business needs.
              </p>
            </div>
            <div className="wordpress-buttons">
              <a href="#">
                <i className="fas fa-bolt"></i> Get Service
              </a>
              <a href="#">
                <i className="fas fa-external-link-alt"></i> Discover More
              </a>
            </div>
          </div>
          <div className="wordpress-image">
            <img src={wordpress} alt="WordPress" />
          </div>
        </div>
      </section>

      {/*====================================== COUNTER SECTION =====================================*/}
      <section className="counter" id="counter">
        <Counter />
      </section>


      {/*================================ TESTIMONIALS  =======================================*/}
      <section className="testimonials">
        <Testimonials />
      </section>

      {/*==================================== CONTACT ============================================*/}
      <section className="contact" id="contact">
        <div className="contact">
          <QuoteForm />
        </div>
      </section>




    </motion.div>
  );
};

export default Home;
