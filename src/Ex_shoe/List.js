import React, { Component } from "react";
import Item from "./Item";
export default class List extends Component {
  render() {
    let { list } = this.props;
    return (
      <div className="row col-6">
        {list.map((item) => {
          return (
            <Item
              handelAddtoCart={this.props.handelAddtoCart}
              key={item.id}
              data={item}
            />
          );
        })}
      </div>
    );
  }
}
