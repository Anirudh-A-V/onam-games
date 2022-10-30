import React, { useEffect, useRef, useState } from "react";
import "./body.css";
import cs from "../../images/AV.svg";
import Card from "../card/Card";
import axios from "axios";
import Onam_logo from "../../images/Onam-logo.svg";
import SimpleSlider from "../slider/Slider";

const Body = () => {
  const [data, setData] = useState({ score: [] });
  const loadRef = useRef();

  const startloading = () => {
    loadRef.current.style.visibility = "visible";
    loadRef.current.style.opacity = 1;
  };

  const endloading = () => {
    loadRef.current.style.opacity = 0;
    loadRef.current.style.visibility = "hidden";
  };

  useEffect(() => {
    const getdata = async () => {
      try {
        startloading();
        const res = await axios.get(
          `${process.env.REACT_APP_API_URI}/scoreboard`
        );
        setData({ ...res.data });
        setTimeout(() => {
          endloading();
        }, 1000);
      } catch (err) {
        console.log(err);
      }
    };
    getdata();
  }, []);

  return (
    <div className="body">
      {/* =========== LOADING =========== */}
      <div className="loading" ref={loadRef}>
        <div class="multi-spinner-container">
          <div class="multi-spinner">
            <div class="multi-spinner">
              <div class="multi-spinner">
                <div class="multi-spinner">
                  <div class="multi-spinner">
                    <div class="multi-spinner"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header">
        <img src={Onam_logo} className="img img-onam" alt="" />
        {/* <span>DRISHTI 2022</span> */}
        <div className="website-name">
          <span className="website-name-text">ONAM GAMES</span>
        </div>
        <img src={cs} className="img img-av" alt="" />
      </div>
      {/* =========== CARDS =========== */}
      <div className="cards">
        <span className="games-title">GAMES</span>
        {data.score.map((item) => {
          console.log(item);
          return <Card item={item} />;
        })}
      </div>
        <SimpleSlider />
    </div>
  );
};

export default Body;
