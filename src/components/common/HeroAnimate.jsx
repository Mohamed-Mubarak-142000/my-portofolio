import "./hero.css";

const HeroAnimate = () => {
  return (
    <div className="hero-container">
      <div className="particles">
        {Array.from({ length: 25 }).map((_, index) => (
          <div key={index} className="particle"></div>
        ))}
      </div>
    </div>
  );
};

export default HeroAnimate;
