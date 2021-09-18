import React, { useState } from "react";
import Header from "./components/header/Header";
import Card from "./components/main/Card";
import Footer from "./components/footer/Footer";

function App({ data }) {
  const [activeHouse, setActiveHouse] = useState("");

  /* const changeFavourite = (name) => 
    const items = favourite.filter((item) => item.name === name);
    console.log(items);
    items.favourite = !items.favourite;
    setFavourite(favourite);
    setFavourite({ ...favourite, favourite: favourite });
  };

  console.log("favorite : " + favourite); */

  function handleHouseButtonClick(house) {
    setActiveHouse(house);
  }

  const filteredData = data.filter(
    (character) => character.house === activeHouse || activeHouse === ""
  );

  //favorite
  const [favorites, setFavorite] = useState(() => {
    //set default value
    if (localStorage.getItem("favoritesLocalStorage")) {
      return JSON.parse(localStorage.getItem("favoritesLocalStorage"));
    } else {
      return [];
    }
  });

  function handleFavoriteButtonClick(characterName) {
    const isFavorite = favorites.includes(characterName);
    let newFavorites;
    if (isFavorite) {
      // Remove from favorites
      newFavorites = favorites.filter((item) => {
        if (item === characterName) {
          return false;
        } else {
          return true;
        }
      });
    } else {
      // Add to favorites
      newFavorites = favorites.concat(characterName);
    }
    setFavorite(newFavorites);
    localStorage.setItem("favoritesLocalStorage", JSON.stringify(newFavorites));
  }

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
          onFavoriteButtonClick={handleFavoriteButtonClick}
          isFavorite={favorites.indexOf(character.name) > -1}
          favorites={favorites}
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
