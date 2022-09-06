import React, { Component } from "react";
import "./slider.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import arrow_left from "../../icons/arrow_left.svg";
import arrow_right from "../../icons/arrow_right.svg"

import onam_poster from '../../images/onam-poster.jpg'

export default class SimpleSlider extends Component {

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  state = { isOpen: false };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("cliked");
  };
  
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      // autoplay: true,
      // speed: 3500,
      // autoplaySpeed: 2000,
      cssEase: "linear",
      pauseOnHover: true,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
       responsive: [
        {
          breakpoint: 525,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            pauseOnHover: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
      ]
    };
    const Card = (props) => (
      <div className="poster-card">
        <img src={props.imgUrl}
          alt={props.alt || 'Image'} />

      </div>
    );

    // const CardContainer = (props) => (
    //   <div className="poster-cards-container">
    //     {
    //       props.cards.map((card) => (
    //         <Card title={card.title}
    //           imgUrl={card.imgUrl} />
    //       ))
    //     }
    //   </div>
    // );

    return (
      <div className="poster-container">
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div key={1}>
            <Card imgUrl={onam_poster}/>
            </div>
          <div key={2}>
            <Card imgUrl={onam_poster}/>
            </div>
          <div key={3}>
            <Card imgUrl={onam_poster}/>
            </div>
          <div key={4}>
            <Card imgUrl={onam_poster}/>
            </div>
          <div key={5}>
            <Card imgUrl={onam_poster}/>
          </div>
          <div key={6}>
            <Card imgUrl={onam_poster}/>
          </div>
          <div key={7}>
            <Card imgUrl={onam_poster}/>
          </div>
          <div key={8}>
            <Card imgUrl={onam_poster}/>
          </div>
          
        </Slider>
        <div className="arrow-container">
            <div className="arrow-set">
              <div className="button" onClick={this.previous}>
                <img src={arrow_left} alt="arrow_left" className="button" onClick={this.previous}/>
              </div>
              <div className="button" onClick={this.next}>
                <img src={arrow_right} alt="arrow_right" className="button" onClick={this.next}/>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
