import { useState } from "react";
import Emoji from "../Emoji";
import "./Card.css";

function tellColorName(house) {
  let color;
  if (house === "Gryffindor") {
    color = "red";
  } else if (house === "Hufflepuff") {
    color = "yellow";
  } else if (house === "Ravenclaw") {
    color = "blue";
  } else if (house === "Slytherin") {
    color = "green";
  } else {
    color = "white";
  }
  return color;
}

function Main({
  characterName,
  house,
  imgUrl,
  actor,
  gender,
  birthday,
  yearOfBirth,
}) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [emoji, setEmoji] = useState("");

  const color = tellColorName(house);

  return (
    <>
      <div className="character__card">
        <section className="card">
          <div className="card__img">
            <img className="card__img__tag" src={imgUrl} alt={characterName} />
          </div>
          <div className="card_propertiesTag">
            <h4 className="card__name">
              {emoji} Name : {characterName}{" "}
            </h4>

            <h6 className="card__actor">Actor's Name{actor}</h6>
            <h6 className={color}>House : {house}</h6>
            <button onClick={() => setShowAnswer(!showAnswer)} className="more">
              More
            </button>
            {showAnswer && (
              <div className="moreInfo">
                <h6>Gender : {gender}</h6>
                <h6>Birthday : {birthday}</h6>
                <h6>Birthyear : {yearOfBirth}</h6>
              </div>
            )}
            {characterName === "Harry Potter"
              ? "⚡"
              : characterName === "Hermione Granger"
              ? "😥"
              : characterName === "Ron Weasley"
              ? "🤫"
              : ""}

            <Emoji setEmoji={setEmoji} />
          </div>
        </section>
      </div>
    </>
  );
}

export default Main;
