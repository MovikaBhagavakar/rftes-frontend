import React, { useState, useEffect, useContext } from "react";
import NewsItem from "./NewsItem";
import Sipnner from "./Sipnner";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { wrapper } from "../App";

export default function SubNews(props) {
  const [articles, setArticles] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:8080/v1/articles?category=${props.category}`, {
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        "authorization":`Bearer ${JSON.parse(localStorage.getItem("rftes")).token}`
      }
    }).then((res)=>res.json()).then((data)=> {console.log(data); setArticles(data.responseData)}).catch((err) => console.log(err.message))
  },[])
  return (
    <>
    {/* title and category pass  */}
      {/* <h1 className="text-center " style={{ marginTop: "150px" }}>RFTES-Top {props.category} Headline</h1> */}
      {/* //infinite scroll use for infinite scrolling */}
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              console.log(element)
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
                    imgurl={element?.urlToImage || ""}  
                    nwesurl={element?.url || ""}
                    id={element?._id}
                  />
                </div>
              );
            })}
          </div>
        </div>
    </>
  );

}




