/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"

const ContactUs = () => {
  return (
    <>
      <header className="header-section">
        <div className="header-warp">

          <div className="header-bar-warp d-flex">

            <Link to={'/'} className="site-logo">
              <img src="/logo12.png" alt="" style={{ width: '175px', height: '70px' }} />
            </Link>


            <nav className="top-nav-area w-100">
              {/* <div className="user-panel">
                <a href="">Login</a> / <a href="">Register</a>
              </div> */}

              <ul className="main-menu primary-menu">
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
                      <Link to="/game" style={{ textDecoration: 'none' }}>Game Single</Link>
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
      {/* <!-- Page top section --> */}
      {/* <section className="page-top-section set-bg" data-setbg="img/page-top-bg/4.jpg"> */}
      <section className="page-top-section set-bg" style={{ backgroundImage: 'url(/4.jpg)' }}>
        <div className="page-info">
          <h2>Contact</h2>
          <div className="site-breadcrumb">
            <a href="/">Home</a>
            <span> / Contact</span>
          </div>
        </div>
      </section>
      {/* <!-- Page top end--> */}
      {/* <!-- Contact page --> */}
      <section className="contact-page">
        <div className="container">
          <div className="map">

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
            <li><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></li>
            <li><Link to="/login" style={{ textDecoration: 'none' }}>Games</Link></li>
            <li><Link to="/ourpolicy" style={{ textDecoration: 'none' }}>Our Policy</Link></li>
            <li><Link to="/contact" style={{ textDecoration: 'none' }}>Contact</Link></li>
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
    </>
  )
}

export default ContactUs