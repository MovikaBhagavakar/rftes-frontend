import React from "react";
import { useState } from "react";
import NewsItem from "./NewsItem";
import { useEffect } from "react";

const Favorites = () => {
  const [fav, setFav] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     `http://localhost:8080/v1/users/${
  //       JSON.parse(localStorage.getItem("rftes")).userExist._id
  //     }`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${
  //           JSON.parse(localStorage.getItem("rftes")).token
  //         }`,
  //       },
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setFav(data.responseData.favourites));
  // }, []);

  return (
    <div className="container" style={{ marginTop: "150px" }}>
      <h2 className="fw-bold">My Favorite(s)</h2>
      {/* <div className="row">
        {fav?.map((element) => {
          console.log(element);
          return (
            <div className="col-md-4" key={element?.url}>
              <NewsItem
                //titles came in such a size that's why used slices
                title={element?.heading ? element.heading.slice(0, 45) : ""}
                description={
                  element?.description ? element.description.slice(0, 88) : ""
                }
                author={element?.author || "Anonymous"}
                date={element?.createdAt}
                source={element?.source?.name || ""}
                imgurl={element?.urlToImage || ""}
                nwesurl={element?.url || `/news/${element._id}`}
                id={element?._id}
                userData={userData}
                setUserData={setUserData}
              />
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Favorites;
