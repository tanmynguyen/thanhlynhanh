import React, { PropTypes } from 'react';
import {connect} from 'react-redux';

import {productDetail} from './detail';

class Checkout extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      arrProduct: this.props.arrProduct
    }
  }

  componentWillMount() {
    console.log(this.state.arrProduct);
  }

  render () {
    return (
      <div></div>
    )
  }
}

export default connect(
  (state) => ({
    arrProduct: state.reducer.arrDetailCheckOut
  })
)(Checkout);
