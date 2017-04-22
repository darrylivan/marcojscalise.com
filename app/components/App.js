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

          <div className="row clearfix">
          { /*  }
  					<h3 className="center">Some <span>Latest</span> Works</h3>

  					<div id="oc-portfolio" className="owl-carousel portfolio-carousel carousel-widget" data-margin="1" data-loop="true" data-nav="true" data-pagi="false"data-items-xxs="1" data-items-xs="2" data-items-sm="3" data-items-md="4" data-items-lg="4">

  						<div className="oc-item">
  							<div className="iportfolio">
  								<div className="portfolio-image">
  									<a href="portfolio-single.html">
  										<img src="images/portfolio/4/1.jpg" alt="Open Imagination" />
  									</a>
  									<div className="portfolio-overlay">
  										<a href="images/portfolio/full/1.jpg" className="left-icon" data-lightbox="image"><i className="icon-line-plus"></i></a>
  										<a href="portfolio-single.html" className="right-icon"><i className="icon-line-ellipsis"></i></a>
  									</div>
  								</div>
  								<div className="portfolio-desc">
  									<h3><a href="portfolio-single.html">Open Imagination</a></h3>
  									<span><a href="#">Media</a>, <a href="#">Icons</a></span>
  								</div>
  							</div>
  						</div>

  						<div className="oc-item">
  							<div className="iportfolio">
  								<div className="portfolio-image">
  									<a href="portfolio-single.html">
  										<img src="images/portfolio/4/2.jpg" alt="Locked Steel Gate" />
  									</a>
  									<div className="portfolio-overlay">
  										<a href="images/portfolio/full/2.jpg" className="left-icon" data-lightbox="image"><i className="icon-line-plus"></i></a>
  										<a href="portfolio-single.html" className="right-icon"><i className="icon-line-ellipsis"></i></a>
  									</div>
  								</div>
  								<div className="portfolio-desc">
  									<h3><a href="portfolio-single.html">Locked Steel Gate</a></h3>
  									<span><a href="#">Illustrations</a></span>
  								</div>
  							</div>
  						</div>

  						<div className="oc-item">
  							<div className="iportfolio">
  								<div className="portfolio-image">
  									<a href="#">
  										<img src="images/portfolio/4/3.jpg" alt="Mac Sunglasses" />
  									</a>
  									<div className="portfolio-overlay">
  										<a href="http://vimeo.com/89396394" className="left-icon" data-lightbox="iframe"><i className="icon-line-play"></i></a>
  										<a href="portfolio-single-video.html" className="right-icon"><i className="icon-line-ellipsis"></i></a>
  									</div>
  								</div>
  								<div className="portfolio-desc">
  									<h3><a href="portfolio-single-video.html">Mac Sunglasses</a></h3>
  									<span><a href="#">Graphics</a>, <a href="#">UI Elements</a></span>
  								</div>
  							</div>
  						</div>

  						<div className="oc-item">
  							<div className="iportfolio">
  								<div className="portfolio-image">
  									<a href="portfolio-single.html">
  										<img src="images/portfolio/4/5.jpg" alt="Console Activity" />
  									</a>
  									<div className="portfolio-overlay">
  										<a href="images/portfolio/full/5.jpg" className="left-icon" data-lightbox="image"><i className="icon-line-plus"></i></a>
  										<a href="portfolio-single.html" className="right-icon"><i className="icon-line-ellipsis"></i></a>
  									</div>
  								</div>
  								<div className="portfolio-desc">
  									<h3><a href="portfolio-single.html">Console Activity</a></h3>
  									<span><a href="#">UI Elements</a>, <a href="#">Media</a></span>
  								</div>
  							</div>
  						</div>

  						<div className="oc-item">
  							<div className="iportfolio">
  								<div className="portfolio-image">
  									<a href="portfolio-single-video.html">
  										<img src="images/portfolio/4/7.jpg" alt="Backpack Contents" />
  									</a>
  									<div className="portfolio-overlay">
  										<a href="http://www.youtube.com/watch?v=kuceVNBTJio" className="left-icon" data-lightbox="iframe"><i className="icon-line-play"></i></a>
  										<a href="portfolio-single-video.html" className="right-icon"><i className="icon-line-ellipsis"></i></a>
  									</div>
  								</div>
  								<div className="portfolio-desc">
  									<h3><a href="portfolio-single-video.html">Backpack Contents</a></h3>
  									<span><a href="#">UI Elements</a>, <a href="#">Icons</a></span>
  								</div>
  							</div>
  						</div>

  						<div className="oc-item">
  							<div className="iportfolio">
  								<div className="portfolio-image">
  									<a href="portfolio-single.html">
  										<img src="images/portfolio/4/8.jpg" alt="Sunset Bulb Glow" />
  									</a>
  									<div className="portfolio-overlay">
  										<a href="images/portfolio/full/8.jpg" className="left-icon" data-lightbox="image"><i className="icon-line-plus"></i></a>
  										<a href="portfolio-single.html" className="right-icon"><i className="icon-line-ellipsis"></i></a>
  									</div>
  								</div>
  								<div className="portfolio-desc">
  									<h3><a href="portfolio-single.html">Sunset Bulb Glow</a></h3>
  									<span><a href="#">Graphics</a></span>
  								</div>
  							</div>
  						</div>

  						<div className="oc-item">
  							<div className="iportfolio">
  								<div className="portfolio-image">
  									<a href="portfolio-single-video.html">
  										<img src="images/portfolio/4/10.jpg" alt="Study Table" />
  									</a>
  									<div className="portfolio-overlay">
  										<a href="http://vimeo.com/91973305" className="left-icon" data-lightbox="iframe"><i className="icon-line-play"></i></a>
  										<a href="portfolio-single-video.html" className="right-icon"><i className="icon-line-ellipsis"></i></a>
  									</div>
  								</div>
  								<div className="portfolio-desc">
  									<h3><a href="portfolio-single-video.html">Study Table</a></h3>
  									<span><a href="#">Graphics</a>, <a href="#">Media</a></span>
  								</div>
  							</div>
  						</div>

  						<div className="oc-item">
  							<div className="iportfolio">
  								<div className="portfolio-image">
  									<a href="portfolio-single.html">
  										<img src="images/portfolio/4/11.jpg" alt="Workspace Stuff" />
  									</a>
  									<div className="portfolio-overlay">
  										<a href="images/portfolio/full/11.jpg" className="left-icon" data-lightbox="image"><i className="icon-line-plus"></i></a>
  										<a href="portfolio-single.html" className="right-icon"><i className="icon-line-ellipsis"></i></a>
  									</div>
  								</div>
  								<div className="portfolio-desc">
  									<h3><a href="portfolio-single.html">Workspace Stuff</a></h3>
  									<span><a href="#">Media</a>, <a href="#">Icons</a></span>
  								</div>
  							</div>
  						</div>

  					</div>

            <div className="line"></div>
            { */  }

          </div>
        </div>
        <div className='google-maps'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d97232.10536024057!2d-105.074812!3d40.3977!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876953019483ef99%3A0xa03191559f341b44!2s1351+N+Cleveland+Ave%2C+Loveland%2C+CO+80537!5e0!3m2!1sen!2sus!4v1492878219979"
            width="800" height="200"
            frameborder="0" style={ { border: '0' } } allowfullscreen></iframe>
        </div>

		  </section> { /* <!-- #content end --> */ }

    <footer className={footer}>
    </footer>
  </div>;


App.propTypes = {
  children: PropTypes.object
};

export default App;
