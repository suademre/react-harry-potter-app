import React, { useState } from "react";
import Header from "./components/header/Header";
import Card from "./components/main/Card";
import Footer from "./components/footer/Footer";

function App({ data }) {
  const [activeHouse, setActiveHouse] = useState("");

  function handleHouseButtonClick(house) {
    setActiveHouse(house);
  }

  const filteredData = data.filter(
    (character) => character.house === activeHouse || activeHouse === ""
  );

  return (
    <div className="App">
      <Header />
      {filteredData.map((character) => (
        <Card
          key={character.name}
          characterName={character.name}
          house={character.house}
          imgUrl={character.image}
          actor={character.actor}
          gender={character.gender}
          birthday={character.dateOfBirth}
          yearOfBirth={character.yearOfBirth}
        />
      ))}

      <Footer
        activeHouse={activeHouse}
        onHouseButtonClick={handleHouseButtonClick}
      />
    </div>
  );
}

export default App;
