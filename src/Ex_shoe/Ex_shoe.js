import React, { Component } from "react";
import List from "./List";
import Card from "./Card";
import { shoeArr } from "./data";
export default class Ex_shoe extends Component {
  state = {
    shoeArr: shoeArr,
    cart: [],
  };
  handelAddtoCart = (shoe) => {
    let cloneCart = [...this.state.cart];
    let index = cloneCart.findIndex((item) => item.id == shoe.id);
    if (index == -1) {
      let newShoe = { ...shoe, soLuong: 1 };
      cloneCart.push(newShoe);
    } else {
      cloneCart[index].soLuong++;
    }
    this.setState({ cart: cloneCart });
  };
  handelDelete = (id) => {
    let newCart = this.state.cart.filter((item) => {
      return item.id != id;
    });
    this.setState({ cart: newCart });
  };
  render() {
    return (
      <div className="row">
        <Card handelDelete={this.handelDelete} cart={this.state.cart} />
        <List
          handelAddtoCart={this.handelAddtoCart}
          list={this.state.shoeArr}
        />
      </div>
    );
  }
}
