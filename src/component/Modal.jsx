import React from "react";

const CustomAdminModal = ({ id, data }) => {
  return (
    <div
      class="modal fade"
      id={id}
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              {data?.heading}
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <img
              width={"100%"}
              height={"100%"}
              src={
                data?.imgUrl ||
                "https:static.toiimg.com/thumb/msid-93287340,width-1070,height-580,imgsize-221349,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
              }
            />
          </div>
          <div class="modal-footer d-flex justify-content-start">
            <h6>{data?.description}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomAdminModal;
