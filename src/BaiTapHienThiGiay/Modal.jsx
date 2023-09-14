import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const { modal, data } = this.props;
    console.log(data);
    return (
      <div>
        <div class="modal" style={{ display: "block" }} tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <table className="table">
                  <tbody>
                    <tr>
                      <th>Image</th>
                      <td>
                        {" "}
                        <img src={data.image} alt="" width={100} />{" "}
                      </td>
                    </tr>
                    <tr>
                      <th>Name</th>
                      <td>{data.name}</td>
                    </tr>
                    <tr>
                      <th>Price</th>
                      <td>{data.price}</td>
                    </tr>
                    <tr>
                      <th>Description</th>
                      <td>{data.description}</td>
                    </tr>
                    <tr>
                      <th>Quantity</th>
                      <td>{data.quantity}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => modal()}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
