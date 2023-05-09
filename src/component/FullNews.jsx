import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const FullNews = () => {
  const location = useLocation();
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    fetch(
      `http://localhost:8080/v1/articles/${location.pathname.split("/")[2]}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("rftes")).token
          }`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setNewsData(data.responseData))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div style={{ marginTop: "150px" }}>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <img
          src={
            newsData?.article?.imgUrl ||
            "https:static.toiimg.com/thumb/msid-93287340,width-1070,height-580,imgsize-221349,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
          }
          width={"75%"}
        />
        <div className="text-start w-75 mt-5">
          <div>
            <h5>By {newsData?.user?.name || "Anonymous"}</h5>
            <h6>At {newsData?.article?.createdAt}</h6>
          </div>
          <h2 className="mt-3">
            {newsData?.article?.heading}
            {"  "}({newsData?.article?.category})
          </h2>
          <p className="fs-5">{newsData?.article?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FullNews;
