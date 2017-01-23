import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {footer} from '../styles/footer.scss';

const App = ({ children }) =>
  <div>
      <header id='header' className='sticky-style-2'>

          <div className='container clearfix'>
              { /* <!-- Logo
              ============================================= -->
              */ }
              <div id='logo' className='divcenter'>
                  <a href='/' className='standard-logo'>
                      <h1>
                      Marco J. Scalise.
                      Attorney At Law
                      </h1>
                  </a>
              </div>{ /*  <!-- #logo end --> */ }
          </div>

          <div id='header-wrap'>

              { /*  <!-- Primary Navigation
              ============================================= --> */ }
              <nav id='primary-menu' className='style-2 center'>

                  <div className='container clearfix'>

                      <div id='primary-menu-trigger'><i className='icon-reorder'></i></div>

                      <ul className='sf-js-enabled' style={{touchAction: 'pan-y'}}>

                          <li className='current sub-menu'>
                              <Link to="/" className=""><div>Home</div></Link>
                          </li>
                          <li className=' sub-menu'>
                              <Link to="/criminalLaw"><div>Criminal Law</div></Link>
                          </li>
                          <li className=' sub-menu'>
                              <Link to="/familyLaw"><div>Family Law</div></Link>
                          </li>
                          <li className=' sub-menu'>
                              <Link to="/criminalLaw"><div>Criminal Law</div></Link>
                          </li>
                          <li className=' sub-menu'>
                              <Link to="/criminalLaw"><div>Criminal Law</div></Link>
                          </li>
                          <li className=' sub-menu'>
                              <Link to="/criminalLaw"><div>Criminal Law</div></Link>
                          </li>

                      </ul>

                  </div>

              </nav>{ /*  <!-- #primary-menu end --> */ }

          </div>

      </header>
    { children }
    <footer className={footer}>
    </footer>
  </div>;

App.propTypes = {
  children: PropTypes.object
};

export default App;
