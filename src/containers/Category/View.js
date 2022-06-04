import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCategories } from "../../redux/actions/actions";

export default function View() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Category.js");
    dispatch(getAllCategories());
  }, []);
  return (
    <div className="conatiner">
      <div className="row">
        <div className="col-md-12 mt-5">
          <div className="card">
            <div className="card-header">
              <div
                className="title"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <h4>All Categories List</h4>
                <button className="btn btn-primary">
                  <i className="fa fa-plus"></i>Add category
                </button>
              </div>
            </div>
            <div className="card-body"></div>
          </div>
        </div>
      </div>

      {/* <!-- The Modal --> */}
      <div class="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
            {/* <!-- Modal Header --> */}
            <div class="modal-header">
              <h4 class="modal-title">Modal Heading</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            {/* <!-- Modal body --> */}
            <div class="modal-body">Modal body..</div>

            {/* <!-- Modal footer --> */}
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>


      
    </div>
  );
}
