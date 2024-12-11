/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"

const Terms = () => {
  return (
    <>
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
                <li><Link to="/contact" style={{ textDecoration: 'none' }}>ContactUs</Link></li>

                <li><Link to="/ourpolicy" style={{ textDecoration: 'none' }}>Privacy Policy</Link></li>
                {/* <li><a href="blog.html">News</a></li> */}


                <li><Link to="/refundpolicy" style={{ textDecoration: 'none' }}>Refund Policy</Link></li>

                <li><Link to="/shippingpolicy" style={{ textDecoration: 'none' }}>Shipping Policy</Link></li>

                <li><Link to="/terms" style={{ textDecoration: 'none' }}>Terms & Condition</Link></li>

              </ul>
            </nav>
          </div>
        </div>
      </header>

      <section className="intro-section" >

        <div className="container" style={{ paddingTop: '10%' }}>
          <h3 style={{ color: 'white', textAlign: 'center', marginBottom: '10%' }}>Read Our All Policy</h3>
          <div className="row">
            {/* <div className="col-md-4">
              <div className="intro-text-box text-box text-white">
                <div className="top-meta"> <a href="">Privacy Policy</a></div>

                <p>We are committed to protecting your privacy. Your personal information (such as name, email, and payment details) is collected only to process your transactions and enhance your experience. We do not share your information with third parties, except for trusted payment gateways like Razorpay. All data is securely stored and encrypted.</p>
              </div>
            </div> */}
            {/* <div className="col-md-4">
              <div className="intro-text-box text-box text-white">
                <div className="top-meta"> <a href="">Refund Policy</a></div>

                <p>The game fails to start due to technical issues.
                  A payment error occurs and no credits are added to the user's account.
                </p>
                <p>Refunds will be processed within 7-10 business days. Please contact support with transaction details for any refund requests.</p>
              </div>
            </div> */}
            {/* <div className="col-md-4">
              <div className="intro-text-box text-box text-white">
                <div className="top-meta"><a href="">Return Policy</a></div>

                <p>As this is a virtual game, there are no physical items to return. For any issues related to gameplay or points, please contact our support team.</p>
              </div>
            </div> */}
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
              </div>
            </div>
            {/* <div className="col-md-4">
              <div className="intro-text-box text-box text-white">
                <div className="top-meta"><a href="">Shipping Policy</a></div>

                <p>As this is a virtual game, there is no physical delivery involved. Users can access the platform and participate in games instantly upon successful payment.
                </p>
              </div>
            </div> */}
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

export default Terms