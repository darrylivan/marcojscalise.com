import React from 'react';


function _calculateAge(fromDate) { // birthday is a date
  const birthday = +new Date(fromDate);
  return ((Date.now() - birthday) / (31557600000));
}

const beginDate = '1994-01-01';
const yearsSince = _calculateAge(beginDate);

const About = () =>
  <div>

    <div className="container">
      <div className="row common-height clearfix">

        <div className="col-sm-4 col-padding"
          style={ {
            background: "url('images/marcoScalise.jpg') right center no-repeat",
            // backgroundSize: 'cover',
            height: '270px'
          } }>
        </div>

        <div className="col-sm-8 col-padding">
          <div>
            <div className="heading-block">
              <span className="before-heading color">Attorney At Law</span>
              <h3>Marco J. Scalise</h3>
            </div>
          </div>
          <p>

          </p>
        </div>
      </div>

    </div>
    <div style={ { height: '30px' }}></div>

    <div className="container clearfix">
      <div className="col_one_third ">
        <div className="heading-block fancy-title nobottomborder title-bottom-border">
          <h4>Invested in <span>local</span>.</h4>
        </div>
        <p>My wife and I have lived in Colorado since 1993 and we are raising our six
          children in Loveland. We are active in their schools and in the community.</p>
      </div>

      <div className="col_one_third">
        <div className="heading-block fancy-title nobottomborder title-bottom-border">
          <h4>My <span>Experience</span>.</h4>
        </div>
        <p> I have been
          practicing law in Loveland since 1994. After gaining experience by working for two law
          firms in Loveland for four years, I started Marco J. Scalise P.C. in 1998.
          </p>
          <p>Since the
          beginning, my practice has specialized in serving clients in the areas of family law and
          criminal law.</p>
      </div>

      <div className="col_one_third col_last">
        <div className="heading-block fancy-title nobottomborder title-bottom-border">
          <h4>My <span>Education</span>.</h4>
        </div>
        <p>I received my Bachelors of Science degree from Northern Arizona University in
          1988.  I received my Law degree from Thomas M. Cooley Law School in 1993.</p>
      </div>
    </div>

    <div className="section nomargin">
      <div className="container clearfix">

        <div className="col_one_third nobottommargin center" data-animate="bounceIn">
          <i className="i-plain i-xlarge divcenter icon-line2-directions"></i>
          <div className="counter counter-lined">
          <span data-from="0"
            data-to={yearsSince} data-refresh-interval="50" data-speed="2000">
          </span>+</div>
          <h5>Years practicing law</h5>
        </div>

        <div className="col_one_third nobottommargin center col_last"
          data-animate="bounceIn" data-delay="600">
          <i className="i-plain i-xlarge divcenter nobottommargin icon-line2-clock"></i>
          <div className="counter counter-lined">
          <span data-from="1" data-to="250" data-refresh-interval="30" data-speed="2700">
          </span>+</div>
          <h5>Clients</h5>
        </div>

      </div>
    </div>

    <div style={ { height: '100px' }}></div>
  </div>;


export default About;
