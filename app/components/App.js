import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {footer} from '../styles/footer.scss';

const App = ({children}) =>
<div>
    <header id="header" class="sticky-style-2">
        <div class="container clearfix">
            <div id="logo" class="divcenter">
                <a href="/" class="standard-logo">
                    <h1>Marco J. Scalise. Attorney At Law</h1>
                </a></div>
        </div>
        <div id="header-wrap">
            <nav id="primary-menu" class="style-2 center">
                <div class="container clearfix">
                    <div id="primary-menu-trigger"><i class="icon-reorder"></i></div>
                    <ul class="sf-js-enabled" style="touch-action: auto;">
                        <li class="current sub-menu"><a class="" href="/">
                            <div>Home</div>
                        </a></li>
                        <li class="sub-menu"><a href="/criminalLaw">
                            <div>Criminal Law</div>
                        </a></li>
                        <li class="sub-menu"><a href="/familyLaw">
                            <div>Family Law</div>
                        </a></li>
                        <li class="sub-menu"><a href="/about">
                            <div>About</div>
                        </a></li>
                        <li class="sub-menu"><a href="/contact">
                            <div>Contact</div>
                        </a></li>
                        <li class=""><a href="phone:970.613.1270">
                            <div>970-613-1270</div>
                        </a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</div>;

App.propTypes = {
    children: PropTypes.object
};

export default App;
