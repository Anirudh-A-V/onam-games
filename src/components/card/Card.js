import React, { useEffect, useRef, useState } from "react";
import "./card.css";

import onam_poster from '../../images/onam-poster.jpg'

const Card = (props) => {
  const [img, setImg] = useState();
  const [desc, setDesc] = useState();
  const showRef = useRef();
  const { game, description, person } = props.item;
  const [sortperson, setPerson] = useState([]);

  

  useEffect(() => {
    const setimg = () => {
      switch (game) {
        case "Pookalam":
          setImg(onam_poster);
          setDesc("Pookalam is an intricate and colourful arrangement of flowers laid on the floor.");
          break;
        case "Pulikkali":
          setImg(onam_poster);
          setDesc("Pulikkali is a recreational folk art from the state of Kerala, people dress up as tigers and perform.");
          break;
        case "Uriyadi":
          setImg(onam_poster);
          setDesc("In Uriyadi, a player tries to catch a swinging earthen pot.");
          break;
        case "Vadamvali":
          setImg(onam_poster);
          setDesc("Vadamvali or tug-of-war is played with great enthusiasm all across the State during Onam.")
          break;
        case "Panjagusthi":
          setImg(onam_poster);
          setDesc("A sport where opponents who face each other with their bent elbows placed on a table and hands firmly gripped, then attempt to force the opponent's hand down to the table.")
          break;
        case "Kaserakali":
          setImg(onam_poster);
          setDesc("Play the music and have the players walk around the perimeter of the chair circle. When the music stops, everyone must immediately sit in a chair.")
          break;
        case "Sundarikku PottuThodu":
          setImg(onam_poster);
          setDesc("'Sundariykk pottu thodal', is the most popular game where the participant in blindfold have to place a bindi on the forehead of a woman's face drawn on a blackboard.")
          break;

        default:
          setImg(onam_poster);
          setDesc("Come and play the exciting that we have prepared to blow your minds. ");
          break;
      }
    };
    setimg();
  });

  const show = () => {
    setPerson(
      person
        .sort((a, b) => {
          return a.score - b.score;
        })
        .reverse()
    );

    console.log(game, description, sortperson);
    showRef.current.style.opacity = 1;
    showRef.current.style.visibility = "visible";
  };

  const hide = () => {
    showRef.current.style.opacity = 0;
    showRef.current.style.visibility = "hidden";
  };

  return (
    <div className="card">
      <div className="card-details">
        <div className="top">
          <img src={img} alt="" />
        </div>
        <div className="bottom">
          <div className="title">{game}</div>
          <div className="desc">{desc}</div>
          <button onClick={show}>LEADERBOARD</button>
        </div>
      </div>

      <div className="leaderboard" ref={showRef}>
        <div className="title">{game}</div>
        <div className="details">
          <div className="title det-title">LEADERBOARD</div>
          <table>
            <tr>
              <th colSpan={2}>Name</th>
              <th>Points</th>
            </tr>
            {sortperson[0] && (
              <tr>
                <td>1</td>
                <td>{sortperson[0].name} </td>
                <td>{sortperson[0].score}</td>
              </tr>
            )}
            {sortperson[1] && (
              <tr>
                <td>2</td>
                <td>{sortperson[1].name}</td>
                <td>{sortperson[1].score}</td>
              </tr>
            )}
            {sortperson[2] && (
              <tr>
                <td>3</td>
                <td>{sortperson[2].name}</td>
                <td>{sortperson[2].score}</td>
              </tr>
            )}
          </table>
        </div>
        <div className="close" onClick={hide}>
          &#x2715;
        </div>
      </div>
    </div>
  );
};

export default Card;