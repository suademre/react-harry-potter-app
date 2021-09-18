import React from "react";
import "./Emoji.css";

function Emoji({ handleImojiClick }) {
  return (
    <div className="emoji__buttons">
      <button className="emoji__button" onClick={() => handleImojiClick("👹")}>
        👹
      </button>
      <button className="emoji__button" onClick={() => handleImojiClick("😥")}>
        😥
      </button>
      <button className="emoji__button" onClick={() => handleImojiClick("🤫")}>
        🤫
      </button>
      <button className="emoji__button" onClick={() => handleImojiClick("🎃")}>
        🎃
      </button>
    </div>
  );
}

export default Emoji;
