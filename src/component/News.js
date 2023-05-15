import React, { useState, useEffect, useContext } from "react";
import NewsItem from "./NewsItem";
import Sipnner from "./Sipnner";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { wrapper } from "../App";
import SubNews from "./SubNews";

export default function News(props) {
  //use state for intial value 
  const [articles, setArticle] = useState([])
  const [image, setImage] = useState(true)
  const [totalResults, setTotalResults] = useState(0)
  const [page, setPage] = useState(1);
  const { searchvalue } = useContext(wrapper)
  // document.title = `${props..category}-Newsmonkey`
  //Api LInk and async method use for reslove the promise 
  const UpdateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}&page=${page}&pagesize=${props.pagesize}&search=${searchvalue}`;
    setImage(true)
    //fetch data 
    let data = await fetch(url);
    let parseData = await data.json();
    //converting the data into json format to fetch values
    setArticle(parseData.articles)
    setTotalResults(parseData.totalResults)
    setImage(false);


  }

  useEffect(() => {
    UpdateNews()
    //eslint-disable-next-line  
  }, [searchvalue])
  console.log(searchvalue)

  const fetchMoreData = async () => {


    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}&page=${page + 1}&pagesize=${props.pagesize}`;
    // (go to the next page)
    setPage(page + 1)
    let data = await fetch(url);
    let parseData = await data.json();
    //Appending the value when goes down
    setArticle(articles.concat(parseData.articles))
    setTotalResults(parseData.toalResults)


  }


  return (
    <>
      {/* title and category pass  */}
      <h1 className="text-center " style={{ marginTop: "150px" }}>RFTES-Top {props.category} Headline</h1>
      {image && <Sipnner />}
      {/* //infinite scroll use for infinite scrolling */}
      <InfiniteScroll
        dataLength={articles?.length}
        next={fetchMoreData}
        hasMore={articles?.length !== totalResults}
        loader={<Sipnner />}
      >
        <SubNews category={props.category} userData={props.userData} setUserData={props.setUserData} />
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    //titles came in such a size that's why used slices
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description ? element.description.slice(0, 88) : ""}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                    imgurl={element.urlToImage}
                    nwesurl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>



  );

}
News.defaultProps = {
  pagesize: 8,
  country: "in",
  category: 'Sports'
}
News.propTypes = {
  pagesize: propTypes.number,
  country: propTypes.string,
  category: propTypes.string

}




