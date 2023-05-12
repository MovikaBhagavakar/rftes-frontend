import React from "react";
import CarouselContainer from "./carousel/CarouselContainer";

function Home() {
  const [news, setNews] = React.useState([]);
  const [business, setBusiness] = React.useState([]);
  const [sports, setSports] = React.useState([]);

  React.useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=in&category=General&apiKey=002b720333a44cb282f10cfe1427fc5d&page=1&pagesize=5&search=",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => setNews(data?.articles));
  }, []);

  React.useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=in&category=Business&apiKey=002b720333a44cb282f10cfe1427fc5d&page=1&pagesize=5&search=",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => setBusiness(data?.articles));
  }, []);

  React.useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=in&category=Sports&apiKey=002b720333a44cb282f10cfe1427fc5d&page=1&pagesize=5&search=",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => setSports(data?.articles));
  }, []);

  return (
    <div
      className="d-flex flex-column w-100 justify-content-center"
      style={{ marginTop: "200px", height: "100vh" }}
    >
      <CarouselContainer items={news} />

      <div className="container-fluid">
        <CarouselContainer heading={"Business"} items={business} />
      </div>
      <div className="container-fluid">
        <CarouselContainer heading={"Sports"} items={sports} />
      </div>
    </div>
  );
}

export default Home;
