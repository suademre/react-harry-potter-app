import { useState } from "react";
import "./Footer.css";

function Footer() {
  const [activeHouse, setActiveHouse] = useState("");

  return (
    <footer className="footer">
      <nav className="navigation">
        <button
          className={
            activeHouse === "Gryffindor"
              ? "footer__button--active"
              : "navigation__button"
          }
          onClick={() => setActiveHouse("Gryffindor")}
        >
          Gryffindor
        </button>
        <button
          className={
            activeHouse === "Hufflepuff"
              ? "footer__button--active"
              : "navigation__button"
          }
          onClick={() => setActiveHouse("Hufflepuff")}
        >
          Hufflepuff
        </button>
        <button
          className={
            activeHouse === "Ravenclaw"
              ? "footer__button--active"
              : "navigation__button"
          }
          onClick={() => setActiveHouse("Ravenclaw")}
        >
          Ravenclaw
        </button>
        <button
          className={
            activeHouse === "Slytherin"
              ? "footer__button--active"
              : "navigation__button"
          }
          onClick={() => setActiveHouse("Slytherin")}
        >
          Slytherin
        </button>
      </nav>
    </footer>
  );
}

export default Footer;
