/**
 * Created by darryl on 1/24/17.
 */
import React from 'react';

const Contact = () =>
    <div className="container clearfix">
        <div className="heading-block topmargin-sm">
  			<h2>Contact Me</h2>
  			<span>Call or email for an appointment.</span>
  		</div>
        <div className="row clear-bottommargin">

            <div className="col-md-4 col-sm-6 bottommargin clearfix">
                <div className="feature-box fbox-center fbox-bg fbox-plain">
                    <div className="fbox-icon">
                        <a href="#"><i className="icon-map-marker2"></i></a>
                    </div>
                    <h3>Our Headquarters<span className="subtitle">
                        1351 N. Cleveland St.<br/>
                    Loveland, CO 80537</span></h3>
                </div>
            </div>

            <div className="col-md-4 col-sm-6 bottommargin clearfix">
                <div className="feature-box fbox-center fbox-bg fbox-plain">
                    <div className="fbox-icon">
                        <a href="#"><i className="icon-phone3"></i></a>
                    </div>
                    <h3>Make an appointment<span className="subtitle">
                        <a href="tel:970.613.1270">970.613.1270</a><br/>&nbsp;</span></h3>
                </div>
            </div>

            <div className="col-md-4 col-sm-6 bottommargin clearfix">
                <div className="feature-box fbox-center fbox-bg fbox-plain">
                    <div className="fbox-icon">
                        <a href="#"><i className="icon-email"></i></a>
                    </div>
                    <h3>Send us a note<span className="subtitle">
                        marco@marcojscalise.com<br/>&nbsp;</span></h3>
                </div>
            </div>
        </div>
      <div className="divider"><i className="icon-circle"></i></div>
    </div>;

export default Contact;
