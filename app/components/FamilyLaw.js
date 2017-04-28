/**
 * Created by darryl on 1/24/17.
 */
import React from 'react';

const FamilyLaw = () =>
  <div>
    <section id="page-title">
			<div className="container clearfix">
				<h1>Family Law</h1>
				<span>Experience fighting for your rights.</span>
				<ol className="breadcrumb">
					<li><a href="/">Home</a></li>
					<li className="active">Family Law</li>
				</ol>
			</div>
		</section>
    <div style={ { height: '40px' }}></div>
    <div className="container clearfix">
    <div className="row clearfix">

			<div className='container clearfix bottomborder'>
				<div className="col_one_third">
					<div className="feature-box fbox-rounded fbox-effect">
						<div className="fbox-icon">
							<i className="icon-ok i-alt"></i>
						</div>
						<h3>Divorce</h3>
						<p></p>
					</div>
				</div>

				<div className="col_one_third">
					<div className="feature-box fbox-rounded fbox-effect">
						<div className="fbox-icon">
							<i className="icon-ok i-alt"></i>
						</div>
						<h3>Parental Responsibility / Custody</h3>
						<p></p>
					</div>
				</div>

				<div className="col_one_third col_last">
					<div className="feature-box fbox-rounded fbox-effect">
						<div className="fbox-icon">
							<i className="icon-ok i-alt"></i>
						</div>
						<h3>Paternity</h3>
						<p></p>
					</div>
				</div>

				<div className="col_one_third">
					<div className="feature-box fbox-rounded fbox-effect">
						<div className="fbox-icon">
							<i className="icon-ok i-alt"></i>
						</div>
						<h3>Grandparent Rights</h3>
						<p></p>
					</div>
				</div>

			</div>

			<div className="divider"><i className="icon-circle"></i></div>

			<div className='text-center'>
				<blockquote className="quote">
					<p className='lead'>I will defend your rights to the fullest extent the law allows.</p>
					<footer>Marco J. Scalise</footer>
				</blockquote>
			</div>

      <div className="divider"><i className="icon-circle"></i></div>
    </div>
    </div>
  </div>;

export default FamilyLaw;
