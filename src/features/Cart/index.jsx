import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { cartTotalSelector } from './selectors';

CartFeature.propTypes = {
  
};

function CartFeature(props) {
  const cartTotal = useSelector(cartTotalSelector);

  return (
    <div>
      <h4>Số tiền bạn cần thanh toán: {cartTotal}</h4> 
    </div>
  );
}

export default CartFeature;