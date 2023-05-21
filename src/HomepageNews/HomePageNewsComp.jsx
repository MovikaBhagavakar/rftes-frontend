import React from "react";

const HomePageNewsComp = ({ data }) => {
  let { title, description, urlToImage, url, author, date, source, id } = data;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={
          urlToImage
            ? urlToImage
            : "https:static.toiimg.com/thumb/msid-93287340,width-1070,height-580,imgsize-221349,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg "
        }
        className="card-img-top"
        alt="img"
        height="150px"
        width="100%"
      />
      <div className="card-body">
        <h5 className="card-title fw-bolder" style={{ height: "50px" }}>
          {title?.slice(0, 25)}...
        </h5>
        <p className="card-text" style={{ height: "50px" }}>
          {description?.slice(0, 50)}...
        </p>
        <p className="card-text" style={{ height: "40px" }}>
          By {!author ? "unknown" : author} on {new Date(date).toGMTString()}
        </p>

        <a
          rel="noreferrer"
          href={url}
          target="_blank"
          className="btn btn-sm btn-primary"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default HomePageNewsComp;
