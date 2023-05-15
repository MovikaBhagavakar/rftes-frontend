import React from "react";
import CarouselContainer from "./carousel/CarouselContainer";
import Business from "../HomepageNews/Business";
import Sports from "../HomepageNews/Sport";
import Entertainment from "../HomepageNews/Entertainment";
import Health from "../HomepageNews/Health";
import Science from "../HomepageNews/Science";
import Technology from "../HomepageNews/Technology";

function Home() {
  const [news, setNews] = React.useState([]);
  const [business, setBusiness] = React.useState([]);
  const [sports, setSports] = React.useState([]);
  const [entertainment, setEntertainment] = React.useState([]);
  const [health, setHealth] = React.useState([]);
  const [science, setScience] = React.useState([]);
  const [tech, settech] = React.useState([]);

  React.useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=General&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}&page=1&pagesize=5&search=`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => setNews(data?.articles));
  }, []);

  React.useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=Business&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}&page=1&pagesize=3&search=`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => setBusiness(data?.articles));
  }, []);

  React.useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=Sports&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}&page=1&pagesize=3&search=`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => setSports(data?.articles));
  }, []);
  React.useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=Entertainment&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}&page=1&pagesize=3&search=`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => setEntertainment(data?.articles));
  }, []);
  React.useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=Health&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}&page=1&pagesize=3&search=`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => setHealth(data?.articles));
  }, []);
  React.useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=Science&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}&page=1&pagesize=3&search=`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => setScience(data?.articles));
  }, []);
  React.useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=Technology&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}&page=1&pagesize=3&search=`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => settech(data?.articles));
  }, []);

  return (
    <div
      className="d-flex flex-column w-100 justify-content-center"
      style={{ marginTop: "2000px", height: "100vh" }}
    >
      <CarouselContainer items={news} />

      {/* <div className="container-fluid">
        <CarouselContainer heading={"Business"} items={business} />
      </div>
      <div className="container-fluid">
        <CarouselContainer heading={"Sports"} items={sports} />
      </div> */}
      <div className="row justify-content-evenly">
        <h2 style={{ marginLeft: "290px" }}>Business</h2>
        {business.map((item, key) => {
          return <Business data={item} key={key} />;
        })}
        <hr></hr>
        <h2 style={{ marginLeft: "290px" }}>Sports</h2>
        {sports.map((item, key) => {
          return <Sports data={item} key={key} />;
        })}
        <hr></hr>
        <h2 style={{ marginLeft: "290px" }}>Entertainment</h2>
        {entertainment.map((item, key) => {
          return <Entertainment data={item} key={key} />;
        })}
        <hr></hr>
        <h2 style={{ marginLeft: "290px" }}>Health</h2>
        {health.map((item, key) => {
          return <Health data={item} key={key} />;
        })}
        <hr></hr>
        <h2 style={{ marginLeft: "290px" }}>Science</h2>
        {science.map((item, key) => {
          return <Science data={item} key={key} />;
        })}
        <hr></hr>
        <h2 style={{ marginLeft: "290px" }}>Technology</h2>
        {tech.map((item, key) => {
          return <Technology data={item} key={key} />;
        })}
      </div>
    </div>
  );
}

export default Home;
