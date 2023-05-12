import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const CarouselContainer = ({ items, heading }) => {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-center">
      <Card body className="w-75 my-3">
        {heading && <h2>{heading}</h2>}
        <Carousel activeIndex={index} onSelect={handleSelect} l>
          {items?.map((item, key) => {
            return (
              <Carousel.Item
                key={key}
                onClick={() => {
                  navigate(item?.url);
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
  );
};

export default CarouselContainer;
