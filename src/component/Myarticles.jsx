import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const MyArticles = () => {
  const [articles, setArticles] = useState([]);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(
      `http://localhost:8080/v1/userArticle/${
        JSON.parse(localStorage.getItem("rftes")).userExist._id
      }`,
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
      .then((data) => setArticles(data.responseData.articles));
  }, []);
  return (
    <div className="container" style={{ marginTop: "150px" }}>
      <h2>My Articles</h2>
      <div className="container d-flex flex-wrap">
        {articles?.map((article, key) => {
          return (
            <NewsItem
              title={article.heading}
              description={article.description}
              imgurl={article.imgUrl}
              author={JSON.parse(localStorage.getItem("rftes")).userExist.name}
              date={article.createdAt}
              id={article._id}
              userData={userData}
              setUserData={setUserData}
              source={article.published ? "Published" : "Not Published"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyArticles;
