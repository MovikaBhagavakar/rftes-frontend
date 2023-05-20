import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const CarouselContainer = ({ items, heading }) => {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  var date = new Date();

  // Define the days of the week and months
  var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get the day of the week, date, month, and year
  var dayOfWeek = daysOfWeek[date.getDay()];
  var day = date.getDate();
  var month = months[date.getMonth()];
  var year = date.getFullYear();

  // Format the date string
  var formattedDate = dayOfWeek + ", " + day + " " + month + " " + year + ".";

  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex justify-content-evenly">
        <h1 style={{ fontFamily: "Sono, sans-serif", color: "gray" }}>
          Welcome to RFTES.com
        </h1>
        <h1>{formattedDate}</h1>
      </div>

      <div className="d-flex justify-content-center">
        <Card body className="w-75 my-3">
          {heading && <h2>{heading}</h2>}
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {items?.map((item, key) => {
              return (
                <Carousel.Item
                  key={key}
                  onClick={() => {
                    window.location.href = item?.url;
                  }}
                >
                  <img
                    className="d-block w-100"
                    src={
                      item?.urlToImage ||
                      "https:static.toiimg.com/thumb/msid-93287340,width-1070,height-580,imgsize-221349,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
                    }
                    alt={`Slide = ${key + 1}`}
                  />
                  <Carousel.Caption>
                    <h3>{item?.title}</h3>
                    <p>{item?.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Card>
      </div>
    </>
  );
};

export default CarouselContainer;
