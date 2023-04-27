import React, { Component } from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = styled(Slider)`
  margin-top: 20px;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  div {
    position: absolute;
    z-index: 999;
    left: 6%;
    bottom: 28%;
    @media (max-width: 768px) {
      bottom: 33%;
    }
  }
  img {
    width: 30%;
  }
  h4 {
    position: absolute;
    bottom: 5%;
    left: 6.5%;
    z-index: 999;
    font-size: 17px;
    @media (max-width: 768px) {
      font-size: 10px;
    }
  }

  a {
    border-radius: px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

const SLIDERS = [
  {
    img: "/Images/compose.jpg",
    title: "Nominado al Óscar",
    alt: "Wakanda",
    titleImg: "/Images/titlewakanda.png",
  },
  {
    img: "/Images/slider-graves.jpg",
    alt: "Graves",
    title: "Proximamente en Disney+",
    titleImg: "/Images/titlegraves.png",
  },
  {
    img: "/Images/slider-encanto.jpg",
    alt: "Encanto",
    title: "Ganador del GRAMMY®",
    titleImg: "/Images/titleencanto.png",
  },
  {
    img: "/Images/sldier-tesoro.jpg",
    alt: "Tesoro",
    title: "Final de temporada ya disponible",
    titleImg: "/Images/titletesoro.png",
  },

  {
    img: "/Images/slider-spiderman.jpg",
    alt: "Spiderman",
    title: "Nuevos episodios ya disponibles",
    titleImg: "/Images/titlespiderman.png",
  },
  {
    img: "/Images/slider-amphibia.jpg",
    alt: "Amphibia",
    title: "Nuevos episodios ya disponibles",
    titleImg: "/Images/titleamphibia.png",
  },
  {
    img: "/Images/slider-up.jpg",
    alt: "Up",
    title: "Mes del Amor",
    titleImg: "/Images/titleUp.png",
  },
];

const ImgSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      {SLIDERS.map((slider) => {
        return (
          <Wrap>
            <div>
              <img src={slider.titleImg} alt={slider.alt} />
            </div>
            <h4>{slider.title}</h4>
            <a>
              <img src={slider.img} alt={slider.alt} />
            </a>
          </Wrap>
        );
      })}
    </Carousel>
  );
};
export default ImgSlider;
