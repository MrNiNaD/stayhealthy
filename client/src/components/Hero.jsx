import React from "react";
import image from "../images/heroimg.jpg";
import video from "../images/video-for-stayhealthy.mp4";
import "../styles/hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero video-section">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      </section>
      <section className="hero">
        <div className="hero-content">
          <h1>
            Your Health, <br />
            Our Responsibility
          </h1>
          <p>
            "Your Health, Our Responsibility" emphasizes a commitment to
            prioritize and care for your well-being. It signifies a dedication
            to providing the best possible health services, support, and
            guidance, ensuring that your health is in trusted hands. This title
            conveys a sense of duty and assurance, highlighting a partnership in
            achieving optimal health outcomes.
          </p>
        </div>
        <div className="hero-img">
          <img src={image} alt="hero" />
        </div>
      </section>
    </>
  );
};

export default Hero;
