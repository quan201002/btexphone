import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div className="col-4">
        <img className="w-100" src={this.props.data.image} all=""></img>
        <h4>{this.props.data.name}</h4>
        <button
          className="btn btn-primary"
          onClick={() => {
            this.props.handelAddtoCart(this.props.data);
          }}
        >
          add
        </button>
      </div>
    );
  }
}
