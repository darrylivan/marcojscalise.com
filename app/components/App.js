import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {footer} from '../styles/footer.scss';

const App = ({ children }) =>
  <div>
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
    { children }
    <footer className={footer}>
    </footer>
  </div>;

App.propTypes = {
  children: PropTypes.object
};

export default App;
