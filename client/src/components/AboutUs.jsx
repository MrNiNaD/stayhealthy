import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img src={image} alt="hero" />
          </div>
          <div className="hero-content">
            <p>
              Welcome to Stay Healthy, where your health is our priority. We
              connect patients with trusted doctors, making healthcare
              accessible and convenient. Our platform allows you to book
              appointments, consult online, and access medical records
              seamlessly. With a commitment to quality care, we ensure that your
              health is in the best hands. Join us in making healthcare simple
              and efficient.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
