"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

function Carousel() {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);

  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  return (
    <>
      <div className="slider-container w-full flex">
        <div className="w-1/2">
          <Slider arrows={false} asNavFor={nav2 as Slider} ref={sliderRef1}>
            <div>
              <img
                className="w-full h-[20rem] object-cover objec"
                src={"/home/doc/1.jpg"}
              />
            </div>
            <div>
              <img
                className="w-full h-[20rem] object-cover objec"
                src={"/home/doc/2.jpg"}
              />
            </div>
            <div>
              <img
                className="w-full h-[20rem] object-cover objec"
                src={"/home/doc/3.jpg"}
              />
            </div>
            <div>
              <img
                className="w-full h-[20rem] object-cover objec"
                src={"/home/doc/4.jpg"}
              />
            </div>
            <div>
              <img
                className="w-full h-[20rem] object-cover objec"
                src={"/home/doc/5.jpg"}
              />
            </div>
            <div>
              <img
                className="w-full h-[20rem] object-cover objec"
                src={"/home/doc/6.jpg"}
              />
            </div>
          </Slider>
        </div>
        <div className="w-1/2">
          <div className="flex flex-col">
            <Slider
              asNavFor={nav1 as Slider}
              ref={sliderRef2}
              slidesToShow={3}
              swipeToSlide={true}
              focusOnSelect={true}
              arrows={false}
              centerMode={true}
              className="center"
            >
              <div>
                <img
                  className="w-full h-[20rem] object-cover objec"
                  src={"/home/doc/1.jpg"}
                />
              </div>
              <div>
                <img
                  className="w-full h-[20rem] object-cover objec"
                  src={"/home/doc/2.jpg"}
                />
              </div>
              <div>
                <img
                  className="w-full h-[20rem] object-cover objec"
                  src={"/home/doc/3.jpg"}
                />
              </div>
              <div>
                <img
                  className="w-full h-[20rem] object-cover objec"
                  src={"/home/doc/4.jpg"}
                />
              </div>
              <div>
                <img
                  className="w-full h-[20rem] object-cover objec"
                  src={"/home/doc/5.jpg"}
                />
              </div>
              <div>
                <img
                  className="w-full h-[20rem] object-cover objec"
                  src={"/home/doc/6.jpg"}
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
