import "./styles/styles.css";
import LivestreamSection from "./components/LivestreamSection";

export default function App() {
  const changeColor = (e) => {
    const currentTarget = e.currentTarget;

    currentTarget.children[1].classList.add("creator-tag-hover");
  };

  const revertChangeColor = (e) => {
    const currentTarget = e.currentTarget;

    currentTarget.children[1].classList.remove("creator-tag-hover");
  };
  return (
    <div className="App">
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
}
