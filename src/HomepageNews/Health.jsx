import React from "react";

function Health({ data }) {
  const { title, description, urlToImage, nwesurl, author, date, source, id } =
    data;
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={
            urlToImage
              ? urlToImage
              : "https:static.toiimg.com/thumb/msid-93287340,width-1070,height-580,imgsize-221349,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg "
          }
          className="card-img-top"
          alt="img"
        />
        <div className="card-body">
          <h5 className="card-title">{title?.slice(0, 45)}...</h5>
          <p className="card-text">{description?.slice(0, 88)}...</p>
          <p className="card-text">
            By {!author ? "unknown" : author} on {new Date(date).toGMTString()}
          </p>

          <a
            rel="noreferrer"
            href={nwesurl}
            target="_blank"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </>
  );
}

export default Health;
