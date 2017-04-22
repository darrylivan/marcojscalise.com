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

  						<div className="col-md-6  bottommargin center">
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

  					<div className="line notopmargin"></div>

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

            <div id="google-map5"
              style={ { height: '400px', marginBottom: '20px' } }
              className="gmap"></div>

            <div className="line"></div>

  					<h3 className="center">What <span>Clients</span> Say</h3>

  					<div className="fslider testimonial testimonial-full noshadow noborder nopadding divcenter"
              data-animation="fade" data-arrows="false"
              style={{maxWidth: '700px'}}>
  						<div className="flexslider">
  							<div className="slider-wrap">
  								<div className="slide">
  									<div className="testi-content">
  										<p>Similique fugit repellendus expedita excepturi iure perferendis provident quia eaque. Repellendus, vero numquam?</p>
  										<div className="testi-meta">
  											Steve Jobs
  											<span>Apple Inc.</span>
  										</div>
  									</div>
  								</div>
  								<div className="slide">
  									<div className="testi-content">
  										<p>Natus voluptatum enim quod necessitatibus quis expedita harum provident eos obcaecati id culpa corporis molestias.</p>
  										<div className="testi-meta">
										Collis Taeed
										<span>Envato Inc.</span>
									</div>
								</div>
							</div>
							<div className="slide">
								<div className="testi-content">
									<p>Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam quibusdam cum libero illo rerum!</p>
									<div className="testi-meta">
										John Doe
										<span>XYZ Inc.</span>
									</div>
								</div>
							</div>
						</div>
					</div>
          </div>
          </div>
          </div>

		  </section> { /* <!-- #content end --> */ }

    <footer className={footer}>
    </footer>
  </div>;


App.propTypes = {
  children: PropTypes.object
};

export default App;
