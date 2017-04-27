import React, {PropTypes} from 'react';
// import {Link} from 'react-router';
import {footer} from '../styles/footer.scss';

const logoPadding = {
  paddingTop: '12px',
  paddingBottom: '11px'
};
const App = ({ children }) =>
  <div>
    <header id='header' className='transparent-header full-header sticky-header'>
        <div id='header-wrap'>
        <div className='container clearfix'>
          <div id='primary-menu-trigger'><i className='icon-reorder'></i></div>
          { /* <!-- Logo
          ============================================= -->
          */ }
          <div id='logo' >
              <a href='/' className='standard-logo' style={ logoPadding }>
                  <span >
                  Marco J. Scalise
                  </span>
              </a>
              <a href='/' className='retina-logo'  style={ logoPadding }>
                  <span >
                  Marco J. Scalise
                  </span>
              </a>
          </div>{ /*  <!-- #logo end --> */ }
            { /*  <!-- Primary Navigation
            ============================================= --> */ }
            <nav id='primary-menu' className=''>
							<ul className='sf-js-enabled' style={{touchAction: 'pan-y'}}>

								<li className="current sub-menu"><a className="" href="/">
										<div>Home</div>
								</a></li>
								<li className="sub-menu"><a href="/criminalLaw">
										<div>Criminal Law</div>
								</a></li>
								<li className="sub-menu"><a href="/familyLaw">
										<div>Family Law</div>
								</a></li>
								<li className="sub-menu"><a href="/about">
										<div>About</div>
								</a></li>
								<li className="sub-menu"><a href="/contact">
										<div>Contact</div>
								</a></li>
								<li className=""><a href="phone:970.613.1270">
										<div>970-613-1270</div>
								</a></li>

							</ul>
            </nav>{ /*  <!-- #primary-menu end --> */ }
        </div>
      </div>

    </header>

  		{ /* <!-- Content
  		============================================= --> */ }
  		<section id="content">

  			<div className="content-wrap">
          { children }
  				<div className="container clearfix">

  					<div className="row clearfix">

  						<div className="col-md-6  nobottommargin center">
  							{ /* <i className="i-plain color i-large icon-line2-screen-desktop inline-block"
                  style={{marginBottom: '20px'}}></i> */}
  							<div className="heading-block nobottomborder" style={{marginBottom: '15px'}}>
  								<span className="before-heading">Experience.</span>
  								<h4><a href='/criminalLaw' >Criminal Law</a></h4>
  							</div>

  						</div>

  						<div className="col-md-6  bottommargin center ">
  							{ /* <i className="i-plain color i-large icon-line2-energy inline-block"
                  style={{marginBottom: '20px'}}></i> */}
  							<div className="heading-block nobottomborder"
                  style={{marginBottom: '15px'}}>
  								<span className="before-heading">Local.</span>
  								<h4><a href='/familyLaw' >Family Law</a></h4>
  							</div>
  						</div>
  					</div>
          </div>

          <div className="section footer-stick notopmargin">

            <h4 className="uppercase center">What <span>Clients</span> Say?</h4>

            <div className="fslider testimonial testimonial-full" data-animation="fade" data-arrows="false">
              <div className="flexslider">
                <div className="slider-wrap">
                  <div className="slide">
                    <div className="testi-image">
                      <a href="#"><img src="images/marcoScalise.jpg" alt="Customer Testimonails" /></a>
                    </div>
                    <div className="testi-content">
                      <p>Marco Scalice gets it. He truly understands people.
                      He was honest and upfront about the realities of divorce.
                      He was kind yet explained what to expect to help prepare
                      me for the proceedings and life after divorce. His calming
                      personality helped ease the tension that arose in the
                      courtroom. I have and will continue to recommend his legal
                      services to many friends. I will be forever grateful for
                      his guidance and assistance with my divorce.
                      </p>
                      <div className="testi-meta">
                        Michelle H.
                        <span>.</span>
                      </div>
                    </div>
                  </div>
                  <div className="slide">
                    <div className="testi-image">
                      <a href="#"><img src="images/marcoScalise.jpg" alt="Customer Testimonails" /></a>
                    </div>
                    <div className="testi-content">
                      <p>Dear Marco, I just wanted to take a moment to thank
                      you for your hard work and dedication. I was very pleased
                      with your knowledge and professionalism throughout the
                      process. I greatly appreciate the advice you gave, as well
                      as your kindness and patience. Your main goal was in the
                       best interest of my child and you helped me close the case
                        with excellent results. It was a pleasure working with
                         you and I would highly recommend you to all needing
                          help with your services.</p>
                      <div className="testi-meta">
                        Danielle M.
                        <span>.</span>
                      </div>
                    </div>
                  </div>
                  <div className="slide">
                    <div className="testi-image">
                      <a href="#"><img src="images/marcoScalise.jpg" alt="Customer Testimonails" /></a>
                    </div>
                    <div className="testi-content">
                      <p>Macro&rsquo;s caring professionalism and genuine concern
                      for my situation helped me get through an ugly time in my
                      life. His honest and straightforward advice coupled with
                      his legal expertise helped create a resolution that was
                      agreeable and fair to both parties.  His witty, intelligent
                      personality helped provided comfort and assurance during my
                      divorce proceeding. </p>
                      <div className="testi-meta">
                        Ed A.
                        <span>.</span>
                      </div>
                    </div>
                  </div>
                  <div className="slide">
                    <div className="testi-image">
                      <a href="#"><img src="images/marcoScalise.jpg" alt="Customer Testimonails" /></a>
                    </div>
                    <div className="testi-content">
                      <p>I was referred to Marco by another very good attorney.
                      After meeting him, I understood why. Marco is very competent,
                       reasonable, and compassionate, yet tough. Everything he
                       told me in consultations was totally accurate. When we
                       realized we were headed to court, Marco was absolutely
                       prepared. I felt completely at ease knowing that Marco
                       was representing me. After the smoke of divorce court
                       had cleared, I knew I had chosen the right attorney.
                       I would highly recommend Marco to anyone wanting a
                       very good attorney!</p>
                      <div className="testi-meta">
                      Jeff G.
                        <span>.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>


        <div className="container clearfix">
        </div>
				<div className='map-container'>
        <div className='google-maps'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d97232.10536024057!2d-105.074812!3d40.3977!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876953019483ef99%3A0xa03191559f341b44!2s1351+N+Cleveland+Ave%2C+Loveland%2C+CO+80537!5e0!3m2!1sen!2sus!4v1492878219979"
            width="800" height="200"
            frameborder="0" style={ { border: '0' } } allowfullscreen></iframe>
        </div>
        </div>

		  </section> { /* <!-- #content end --> */ }

	  { /* <!-- Footer
		============================================= --> */}
		<footer id="footer" className="dark">

			{ /* <!-- Copyrights
			============================================= --> */ }
			<div id="copyrights">

				<div className="container clearfix">

					<div className="col_half">
						<h3>Marco J. Scalise / Attorney At Law</h3>
						<span class='lead'>Serving Larimer County since 1994</span>
						<hr/>
						Copyrights &copy; <span id='copyrightYear'></span> All Rights Reserved Marco J. Scalise.

					</div>

					<div className="col_half col_last tright">
						<div className="copyrights-menu copyright-links fright clearfix">
							<a href="/">Home</a>/<a href="criminalLaw">Criminal Law</a>/<a href="familyLaw">Family Law</a>/<a href="about">About</a>/<a href="contact">Contact</a>/<a href="tel:9706131270">970-613-1270</a>
						</div>
						<div className="fright clearfix">
							<a href="#" className="social-icon si-small si-borderless nobottommargin si-facebook">
								<i className="icon-facebook"></i>
								<i className="icon-facebook"></i>
							</a>

							<a href="#" className="social-icon si-small si-borderless nobottommargin si-twitter">
								<i className="icon-twitter"></i>
								<i className="icon-twitter"></i>
							</a>

							<a href="#" className="social-icon si-small si-borderless nobottommargin si-gplus">
								<i className="icon-gplus"></i>
								<i className="icon-gplus"></i>
							</a>

							<a href="#" className="social-icon si-small si-borderless nobottommargin si-pinterest">
								<i className="icon-pinterest"></i>
								<i className="icon-pinterest"></i>
							</a>

							<a href="#" className="social-icon si-small si-borderless nobottommargin si-vimeo">
								<i className="icon-vimeo"></i>
								<i className="icon-vimeo"></i>
							</a>

							<a href="#" className="social-icon si-small si-borderless nobottommargin si-github">
								<i className="icon-github"></i>
								<i className="icon-github"></i>
							</a>

							<a href="#" className="social-icon si-small si-borderless nobottommargin si-yahoo">
								<i className="icon-yahoo"></i>
								<i className="icon-yahoo"></i>
							</a>

							<a href="#" className="social-icon si-small si-borderless nobottommargin si-linkedin">
								<i className="icon-linkedin"></i>
								<i className="icon-linkedin"></i>
							</a>
						</div>
					</div>

				</div>

			</div>

		</footer>{ /* <!-- footer end --> */ }
  </div>;


App.propTypes = {
  children: PropTypes.object
};

export default App;
