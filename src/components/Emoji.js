import React from "react";

function Emoji({ setEmoji }) {
  return (
    <div className="emoji__buttons">
      <button className="emoji__button" onClick={() => setEmoji("👹")}>
        👹
      </button>
      <button className="emoji__button" onClick={() => setEmoji("😥")}>
        😥
      </button>
      <button className="emoji__button" onClick={() => setEmoji("🤫")}>
        🤫
      </button>
      <button className="emoji__button" onClick={() => setEmoji("🎃")}>
        🎃
      </button>
      <button className="emoji__button" onClick={() => setEmoji("")}>
        Leer
      </button>
    </div>
  );
}

export default Emoji;
