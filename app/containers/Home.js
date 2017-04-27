/**
 * Created by darrylbrown on 1/15/17.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
// import {filterTable} from '../actions';
// import ProductTable from '../components/ProductTable';
// import {home} from '../styles/home.scss';

const Home = ({ }) => {
  const divStyle = {
    padding: '80px 0',
    backgroundImage: "url('images/parallax/home/6.jpg')",
    // backgroundImage: "url('images/mountains.jpg')",
    backgroundPosition: 'center'
  };
  return (
    <div >
      <div className="section parallax dark notopmargin noborder "
        style={ divStyle }
        data-stellar-background-ratio="0.4">
        <div className="container center clearfix">
          <div className="emphasis-title">
            <h2>Marco J Scalise.  Attorney At Law.</h2>
            <h3><a href="phone:970.613.1270">970-613-1270</a></h3>
            <p className="lead topmargin-sm">
              Practicing law and serving Larimer County since 1994. </p>
          </div>

        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onFilter: filterText => dispatch(filterTable(filterText))
//   };
// };

export default connect(
  mapStateToProps
  // ,
  // mapDispatchToProps
)(Home);
