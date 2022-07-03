import React from "react";
import LivestreamSection from "./LivestreamSection";
import Navigation from "./Navigation";

const Home = () => {
  const changeColor = (e) => {
    const currentTarget = e.currentTarget;

    currentTarget.children[1].classList.add("creator-tag-hover");
  };

  const revertChangeColor = (e) => {
    const currentTarget = e.currentTarget;

    currentTarget.children[1].classList.remove("creator-tag-hover");
  };
  return (
    <div>
      <Navigation />
      <div
        className="creator-container"
        onMouseEnter={changeColor}
        onMouseLeave={revertChangeColor}
      >
        <div className="creator-name-card">
          <p className="creator-name">creator</p>
        </div>
        <div className="creator-tag"></div>
      </div>
      <LivestreamSection />
    </div>
  );
};

export default Home;
