import React, { useState, useEffect, useContext } from "react";
import NewsItem from "./NewsItem";
import Sipnner from "./Sipnner";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { wrapper } from "../App";

export default function SubNews(props) {
  const [articles, setArticles] = useState([])
  const [userData, setUserData] = useState(null)
  useEffect(() => {
    fetch(`http://localhost:8080/v1/articles?category=${props.category}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${JSON.parse(localStorage.getItem("rftes")).token}`
      }
    }).then((res) => res.json()).then((data) => { setArticles(data.responseData) }).catch((err) => console.log(err.message))
  }, [])
  return (
    <>
      <div className="container">
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element?.url}>
                <NewsItem
                  //titles came in such a size that's why used slices
                  title={element?.heading ? element.heading.slice(0, 45) : ""}
                  description={
                    element?.description ? element.description.slice(0, 88) : ""}
                  author={element?.author || "Anonymous"}
                  date={element?.createdAt}
                  source={element?.source?.name || ""}
                  imgurl={element?.imgUrl}
                  nwesurl={element?.url || `/news/${element._id}`}
                  id={element?._id}
                  userData={userData}
                  setUserData={setUserData}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );

}




