/**
 * Created by darrylbrown on 1/15/17.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
// import {filterTable} from '../actions';
// import ProductTable from '../components/ProductTable';
import {home} from '../styles/home.scss';

const Home = ({ }) => {
  return (
    <div className={home}>
      Marco J Scalise. Attorney At Law.

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
