/**
 * Created by darryl on 1/24/17.
 */
import React from 'react';

const CriminalLaw = () =>
  <div className="container clearfix">
    <div className="row clearfix">

      <div className="heading-block topmargin-sm">
  			<h2>Serving Northern Colorado Since 1994</h2>
  			<span>I handle felonies, misdemeanors, domestic violence, traffic offenses,
          DUI cases and municipal court violations.  I clearly explain your
          options to you to allow you to make an
          informed decision about your case.</span>
  		</div>
      <p>
        <ul className="iconlist">
          <li><i className="icon-legal"></i> DUI</li>
          <li><i className="icon-legal"></i> Felonies</li>
          <li><i className="icon-legal"></i> Misdemeanors</li>
          <li><i className="icon-legal"></i> Drugs</li>
          <li><i className="icon-legal"></i> Domestic Violence</li>
          <li><i className="icon-legal"></i> Juvenile</li>
          <li><i className="icon-legal"></i> Traffic Violations</li>
        </ul>
      </p>
			<div className="fslider testimonial testimonial-full noshadow noborder nopadding divcenter"
        data-animation="fade" data-arrows="false"
        style={ { maxWidth: '700px' } } >
				<div className="flexslider">
					<div className="slider-wrap">
						<div className="slide">
							<div className="testi-content">
								<p>
                I will defend your rights to the fullest extent the law allows. </p>
								<div className="testi-meta">
									Marco J Scalise
									<span>Integrity.</span>
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
  </div>;


export default CriminalLaw;
