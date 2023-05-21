import React from "react";
import CarouselContainer from "./carousel/CarouselContainer";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import HomePageNewsComp from "../HomepageNews/HomePageNewsComp";

const MoreNews = ({ path }) => {
  const navigate = useNavigate();
  return (
    <span
      onClick={(e) => {
        e.preventDefault();
        if (localStorage.getItem("rftes")) {
          navigate(`/${path}`);
        } else {
          alert("You're not authorized to visit this page. Please Login.");
          navigate("/login");
        }
      }}
      className="icon-link"
    >
      More News
    </span>
  );
};

function Home() {
  const [news, setNews] = React.useState([]);
  const [business, setBusiness] = React.useState([]);
  const [sports, setSports] = React.useState([]);
  const [entertainment, setEntertainment] = React.useState([]);
  const [health, setHealth] = React.useState([]);
  const [science, setScience] = React.useState([]);
  const [tech, setTech] = React.useState([]);

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
      .then((data) => setTech(data?.articles));
  }, []);

  return (
    <div
      className="d-flex flex-column w-100 justify-content-center"
      style={{ marginTop: "1500px", height: "100vh" }}
    >
      <CarouselContainer items={news} />

      {/* <div className="container-fluid">
        <CarouselContainer heading={"Business"} items={business} />
      </div>
      <div className="container-fluid">
        <CarouselContainer heading={"Sports"} items={sports} />
      </div> */}
      <div className="row justify-content-evenly">
        <div className="d-flex justify-content-between">
          <h2 style={{ marginLeft: "170px" }}>Business</h2>
          <MoreNews path={"business"} />
        </div>
        {business?.map((item, key) => {
          return <HomePageNewsComp data={item} key={key} />;
        })}
        <hr></hr>
        <div className="d-flex justify-content-between">
          <h2 style={{ marginLeft: "170px" }}>Sports</h2>
          <MoreNews path={"sports"} />
        </div>
        {sports?.map((item, key) => {
          return <HomePageNewsComp data={item} key={key} />;
        })}
        <hr></hr>
        <div className="d-flex justify-content-between">
          <h2 style={{ marginLeft: "170px" }}>Entertainment</h2>
          <MoreNews path={"entertainment"} />
        </div>
        {entertainment?.map((item, key) => {
          return <HomePageNewsComp data={item} key={key} />;
        })}
        <hr></hr>
        <div className="d-flex justify-content-between">
          <h2 style={{ marginLeft: "170px" }}>Health</h2>
          <MoreNews path={"health"} />
        </div>
        {health?.map((item, key) => {
          return <HomePageNewsComp data={item} key={key} />;
        })}
        <hr></hr>
        <div className="d-flex justify-content-between">
          <h2 style={{ marginLeft: "170px" }}>Science</h2>
          <MoreNews path={"science"} />
        </div>
        {science?.map((item, key) => {
          return <HomePageNewsComp data={item} key={key} />;
        })}
        <hr></hr>
        <div className="d-flex justify-content-between">
          <h2 style={{ marginLeft: "170px" }}>Technology</h2>
          <MoreNews path={"technology"} />
        </div>
        {tech?.map((item, key) => {
          return <HomePageNewsComp data={item} key={key} />;
        })}
      </div>
    </div>
  );
}

export default Home;
