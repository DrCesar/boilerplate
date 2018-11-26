import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './counter.css';
import { incNum, decNum } from '../../actions';

const Counter = ({ value, incNumber, decNumber }) => (
  <div className="main-container">
    <div className="row">
      <div className="col s6">
        <h2>{value}</h2>
      </div>
      <div className="col s6">
        <button type="button" className="waves-effect waves-light btn" onClick={() => incNumber()}>+</button>
        <button type="button" className="waves-effect waves-light btn" onClick={() => decNumber()}>-</button>
      </div>
    </div>
  </div>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  incNumber: PropTypes.func.isRequired,
  decNumber: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.counter,
});

const mapDispatchToProps = dispatch => ({
  incNumber: () => dispatch(incNum()),
  decNumber: () => dispatch(decNum()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
