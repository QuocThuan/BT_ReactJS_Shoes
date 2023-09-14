import React, { Component } from "react";

export default class ItemGiay extends Component {
  render() {
    // console.log(this.props.item);
    const { item } = this.props;
    const { name, price, image, id } = this.props.item;
    const { onOpenModal } = this.props;
    return (
      <div>
        <div className="card p-3 m-1" id={id}>
          <img className="w-100" src={image} alt="" />
          <h3>{name}</h3>
          <p>{price}</p>
          <button className="btn btn-dark" onClick={() => onOpenModal(item)}>
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
