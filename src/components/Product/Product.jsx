import React, { Component } from "react";

class Product extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  logRefs = () => {
    console.log(this.refs.productname.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref="productname" />
        <button onClick={this.logRefs}>Click</button>
      </div>
    );
  }
}

Product.propTypes = {};

export default Product;

//hanlde event
//refs
