import React from "react";
import "../styles/styles.css";

const LivestreamButtons = () => {
  const handleClick = (e) => {
    const click = e.target.className;
    const streamerContainer = document.querySelector(".streamer-container");
    const streamerCard = document.querySelector(".streamer-card");
    const cardWidth = streamerCard.getBoundingClientRect().width + 57 * 2;
    const startPosition = streamerContainer.getBoundingClientRect().left;

    let currentPosition = startPosition.left;
    let moveByPixelAmount = 5;

    const id = setInterval(moveStreamContainer);

    function moveStreamContainer() {
      currentPosition = streamerContainer.getBoundingClientRect().left;

      if (Math.abs(currentPosition - startPosition) > cardWidth - 10) {
        moveByPixelAmount = 1;
      }

      if (Math.abs(currentPosition - startPosition) >= cardWidth) {
        clearInterval(id);
      } else {
        if (click === "right-live-button") {
          streamerContainer.style.left =
            currentPosition - moveByPixelAmount + "px";
        } else if (click === "left-live-button") {
          streamerContainer.style.left =
            currentPosition + moveByPixelAmount + "px";
        }
      }
    }
  };

  return (
    <div className="live-button-container">
      <button className="left-live-button" onClick={handleClick}>
        {"<"}
      </button>
      <button className="right-live-button" onClick={handleClick}>
        {">"}
      </button>
    </div>
  );
};

export default LivestreamButtons;
