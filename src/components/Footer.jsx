import logo from '../Assets/logo-black.png';
import blog from '../Assets/footer/blog.jpg';

const Footer = () => {
  return (
    <section className="footer" id="footer">
        <div className="quick-info">

            <div className="logo-recap">
                <div className="logo">
                    <img src={logo} alt="binary_bros_logo" />
                </div>
                <div className="footer-paragagraph">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias quia aliquid non, provident sapiente quidem culpa ut esse dolores! Voluptate, aspernatur aut? Perspiciatis rem voluptatem voluptates dolore at inventore accusantium!</p>
                </div>
                <div className="footer-socials">
                    <i className="fa fa-home"></i>
                    <i className="fa fa-home"></i>
                    <i className="fa fa-home"></i>
                    <i className="fa fa-home"></i>
                </div>
            </div>

            <div className="quick-links">
                <h1>Useful Links</h1>
                <ul>
                    <li><a href="#">SEO</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Marketing</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Portfolio</a></li>
                </ul>
            </div>

            <div className="blog">
                <h1>Latest News</h1>
                <div className="new-element">
                    <img src={blog} alt="blog-1" />
                    <h3>How much does a 30sec ad cost in Kenya</h3>
                </div>
                <div className="new-element">
                    <img src={blog} alt="blog-2" />
                    <h3>How much does a 30sec ad cost in Kenya</h3>
                </div>
                <div className="new-element">
                    <img src={blog} alt="blog-3" />
                    <h3>How much does a 30sec ad cost in Kenya</h3>
                </div>
            </div>


            <div className="newsletter">
                <h1>Subscribe to Our Newsletter</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequuntur earum minus esse, ab cum quam illum quis repudiandae nulla maxime, voluptate sed at distinctio debitis sapiente ipsa deserunt itaque.</p>
                <div className="footer-input">
                   <input type="text" />
                   <a href="#">Send</a>
                </div>
                
            </div>
        </div>
        <div className="rights">
            <p>&copy; All Rights Reserved Binary Bros.</p>
        </div>
    </section>
  )
}

export default Footer
