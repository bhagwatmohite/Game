/* eslint-disable react/no-unescaped-entities */

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>


      {/* <!-- Header section --> */}
      <header className="header-section">
        <div className="header-warp">

          <div className="header-bar-warp d-flex">
            {/* <!-- site logo --> */}
            <a href="home.html" className="site-logo">
              <img src="/logo12.png" alt="" style={{ width: '175px', height: '70px' }} />
            </a>
            <nav className="top-nav-area w-100">
              <div className="user-panel">
                <Link to="/login">Login</Link> / <Link to="/register">Register</Link>
              </div>
              {/* <!-- Menu --> */}
              <ul className="main-menu primary-menu" >
                <li><Link to={'/'} style={{ textDecoration: 'none' }}>Home</Link></li>
                {/* <li><a href="games.html">Games</a>
                  <ul className="sub-menu">
                    <li><a href="game-single.html">Game Singel</a></li>
                  </ul>
                </li> */}
                <li>
                  <Link to="/game" style={{ textDecoration: 'none' }}>Games</Link>
                  {/* <ul className="sub-menu">
                    <li>
                      <Link to="/game">Game Single</Link>
                    </li>
                  </ul> */}
                </li>
                <li><Link to="/ourpolicy" style={{ textDecoration: 'none' }}>Our Policy</Link></li>
                {/* <li><a href="blog.html">News</a></li> */}
                <li><Link to="/contact" style={{ textDecoration: 'none' }}>Contact</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {/* <!-- Header section end --> */}


      {/* <!-- Hero section --> */}
      <section className="hero-section overflow-hidden">
        <OwlCarousel
          className="hero-slider owl-carousel"
          items={1}
          loop
          autoplay
          autoplayTimeout={3000}
          smartSpeed={1000}
        >
          <div className="hero-item set-bg d-flex align-items-center justify-content-center text-center" style={{ backgroundImage: 'url(img/slider-bg-1.jpg)' }}>
            <div className="container">
              <h2>Game on!</h2>
              <p>Get ready for the ultimate challenge! Whether you're battling enemies or exploring new realms, your skills will be tested at every turn. Complete quests, unlock achievements, and climb the leaderboards as you master the game. Power up, strategize, and conquer the world of gaming!</p>
              <a href="#" className="site-btn">Read More <img src="img/icons/double-arrow.png" alt="#" /></a>
            </div>
          </div>
          <div className="hero-item set-bg d-flex align-items-center justify-content-center text-center" style={{ backgroundImage: 'url(img/slider-bg-2.jpg)' }}>
            <div className="container">
              <h2>Game on!</h2>
              <p>Gear up for an adventure like no other! Embark on quests filled with action, puzzles, and rewards. Level up your character, unlock powerful skills, and face ever-greater challenges. Your journey awaits, and only the bravest will prevail. Are you ready to conquer the game world and claim your victory?</p>
              <a href="#" className="site-btn">Read More <img src="img/icons/double-arrow.png" alt="#" /></a>
            </div>
          </div>
        </OwlCarousel>
      </section>
      {/* <!-- Hero section end--> */}


      {/* policy */}
      <section className="intro-section" >

        <div className="container" style={{ paddingTop: '10%' }}>
          <h3 style={{ color: 'white', textAlign: 'center', marginBottom: '10%' }}>Read Our All Policy</h3>
          <div className="row">
            <div className="col-md-4">
              <div className="intro-text-box text-box text-white">
                <div className="top-meta"> <a href="">Privacy Policy</a></div>

                <p>We are committed to protecting your privacy. Your personal information (such as name, email, and payment details) is collected only to process your transactions and enhance your experience. We do not share your information with third parties, except for trusted payment gateways like Razorpay. All data is securely stored and encrypted.</p>
                {/* <a href="#" className="read-more">Read More  <img src="img/icons/double-arrow.png" alt="#" /></a> */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="intro-text-box text-box text-white">
                <div className="top-meta"> <a href="">Refund Policy</a></div>

                <p>The game fails to start due to technical issues.
                  A payment error occurs and no credits are added to the user's account.
                </p>
                <p>Refunds will be processed within 7-10 business days. Please contact support with transaction details for any refund requests.</p>
                {/* <a href="#" className="read-more">Read More  <img src="img/icons/double-arrow.png" alt="#" /></a> */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="intro-text-box text-box text-white">
                <div className="top-meta"><a href="">Return Policy</a></div>

                <p>As this is a virtual game, there are no physical items to return. For any issues related to gameplay or points, please contact our support team.</p>
                {/* <a href="#" className="read-more">Read More  <img src="img/icons/double-arrow.png" alt="#" /></a> */}
              </div>
            </div>
            <hr ></hr>
            <div className="col-md-4">
              <div className="intro-text-box text-box text-white">
                <div className="top-meta"><a href="">Terms & Conditions</a></div>

                <p>Users must be 18 years or older to participate.
                  Points purchased are non-transferable and non-refundable, except as outlined in the refund policy.
                  Misuse of the platform, including cheating or manipulation, may result in account suspension.
                  All decisions by the system regarding the winning card are final and binding.
                </p>
                {/* <a href="#" className="read-more">Read More  <img src="img/icons/double-arrow.png" alt="#" /></a> */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="intro-text-box text-box text-white">
                <div className="top-meta"><a href="">Cancellation Policy</a></div>

                <p>Once a game session starts, cancellations are not allowed. Points added to a game cannot be withdrawn, but unused points remain in your account for future games.

                </p>
                {/* <a href="#" className="read-more">Read More  <img src="img/icons/double-arrow.png" alt="#" /></a> */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="intro-text-box text-box text-white">
                <div className="top-meta"><a href="">Shipping Policy</a></div>

                <p>As this is a virtual game, there is no physical delivery involved. Users can access the platform and participate in games instantly upon successful payment.
                </p>
                {/* <a href="#" className="read-more">Read More  <img src="img/icons/double-arrow.png" alt="#" /></a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact us */}
      <section className="contact-page">
        <div className="container">
          <div className="map">
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14376.077865872314!2d-73.879277264103!3d40.757667781624285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1546528920522" style={{ border: '0' }} allowfullscreen></iframe> */}

            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7559.574398059997!2d73.82457909117363!3d18.673542879799445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sNEBC%20CORNERSavata%20Maharaj%20Mandir%2C%20Aher%20Wadi%20Chowk%2C%20Jadhavwadi%20Pune%20412114!5e0!3m2!1sen!2sin!4v1732689881848!5m2!1sen!2sin" style={{ border: '0' }} allowfullscreen="" loading="lazy" ></iframe>

          </div>
          <div className="row">

            <div className="col-lg-7 order-2 order-lg-1">
              <form className="contact-form">
                <input type="text" placeholder="Your name" />
                <input type="text" placeholder="Your e-mail" />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Message"></textarea>
                <button className="site-btn">Send message<img src="img/icons/double-arrow.png" alt="#" /></button>
              </form>
            </div>
            <div className="col-lg-5 order-1 order-lg-2 contact-text text-white">
              <h3>Howdy! Say hello</h3>
              <p>
                Dive into the world of immersive gaming experiences with the latest titles that push the boundaries of storytelling and gameplay. From heart-pounding action to strategic gameplay, each game is designed to keep you engaged for hours. Whether you're exploring vast open worlds, battling fierce opponents, or solving intricate puzzles, the gaming universe has something for every type of player. Prepare to level up your skills and embark on epic adventures that test your reflexes, tactics, and creativity. Join a global community of gamers and discover the endless possibilities that await in this exciting digital realm.
              </p>

              <div className="cont-info">
                <div className="ci-icon"><img src="img/icons/location.png" alt="" /></div>
                <div className="ci-text">NEBC CORNER Office No 309 Second Floor Near Savata Maharaj Mandir, Aher Wadi Chowk, Jadhavwadi Pune 412114</div>
              </div>
              <div className="cont-info">
                <div className="ci-icon"><img src="img/icons/phone.png" alt="" /></div>
                <div className="ci-text">+91 99605 88439</div>
              </div>
              <div className="cont-info">
                <div className="ci-icon"><img src="img/icons/mail.png" alt="" /></div>
                <div className="ci-text">hr.ezio2022@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Footer section --> */}
      <footer className="footer-section">
        <div className="container">
          {/* <div className="footer-left-pic">
            <img src="img/footer-left-pic.png" alt="" />
          </div> */}
          {/* <div className="footer-right-pic">
            <img src="img/footer-right-pic.png" alt="" />
          </div> */}

          <Link to={'/'} className="footer-logo">
            <img src="/logo12.png" alt="" style={{ width: '175px', height: '70px' }} />
          </Link>
          <ul className="main-menu footer-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Games</Link></li>
            <li><Link to="/ourpolicy">Our Policy</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="footer-social d-flex justify-content-center" style={{ color: 'white' }}>
            <a href="#" style={{ color: 'white' }}><i className="fa fa-pinterest"></i></a>
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-dribbble"></i></a>
            <a href="#"><i className="fa fa-behance"></i></a>
          </div>
          <div className="copyright" style={{ color: 'white' }}><a href="">Produced By EzioInfotech</a> 2024 @ All rights reserved</div>
        </div>
      </footer>
      {/* <!-- Footer section end --> */}


    </>
  )
}

export default Home