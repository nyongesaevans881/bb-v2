
import '../custom-css/quote.css'

import Quote from "../Assets/contact/quote-image.png";
import shape from "../Assets/contact/shape.png";

const QuoteForm = () => {

    return (
        <main>
            <section className="quote-contact">
                <div className="quote-container">
                    <div className="quote-left">
                        <div className="quote-left-head">
                            <h2>Contact Us</h2>
                            <h1>Let's work together<span>.</span></h1>
                            <h3>Alternativey Reach Us through: 
                                <a href="#"> binarybroske@gmail.com</a> 
                                &nbsp; or call <span>+254 791 880 412</span>
                            </h3>
                        </div>
                        <div className="quote-form">
                            <form action="/">
                                <div className="form-input">
                                    <input className='quote-form-input' type="text" name='Name' placeholder='Full Name' required/>
                                    <label className='quote-label'>Full Name</label>
                                    <i className="icon fa fa-address-card"></i>
                                </div>
                                <div className="form-input">
                                    <input className='quote-form-input' type="text" name='phone' placeholder='Phone Number' required/>
                                    <label className='quote-label'>Phone Number</label>
                                    <i className="icon fa fa-phone"></i>
                                </div>
                                <div className="form-input">
                                    <input className='quote-form-input' type="text" name='email' placeholder='Email Address' required/>
                                    <label className='quote-label'>Email Address</label>
                                    <i className="icon fa fa-envelope"></i>
                                </div>
                                <div className="form-input textarea">
                                    <input className='quote-form-input' name="Message" placeholder='Your Message' required />
                                    <label className='quote-label'>Your Message</label>
                                    <i className="icon fa fa-inbox"></i>
                                </div>

                                <div className="form-buttons">
                                    <button className='upload'>
                                        <span>
                                        <i className="fa fa-paperclip"></i>Attachments
                                        </span>
                                        <input type="file" name='attachment' />
                                    </button>
                                    <div className="submitt-button">
                                        <i className="fa fa-paper-plane"></i>
                                        <input type="submit" value="Send Message" />
                                    </div>
                                </div>
                            </form>
                             
                        </div>
                    </div>
                    <div className="quote-right">
                        <div className="quote-right-image">
                            <img src={Quote} alt="binary-bros-premises" />
                            <div className="image-shadow"></div>
                            <img className='shape-shadow' src={shape} alt="shape-shadow" />
                        </div>
                        <div className="quote-socials">
                            <ul>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
  )
}

export default QuoteForm
