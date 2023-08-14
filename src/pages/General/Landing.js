import React from "react";
import Header from "../../components/Landing/Header";
import Button from "../../components/Landing/Button";
import Footer from "../../components/Landing/Footer";
import './Landing.css'

function LandingPage() {
  return (
    <div className="landing">
      <Header homeActive="home-active" />
      <div className="landing-sections">
        <section className="get-started">
          <div className="left">
            <div className="green-circle big-cicle"></div>
            <h1 className="motto">
              <span className="purple">
                <span className="blue">Empowering</span> Minds,
              </span>
              <span className="purple">
                Shaping <span className="blue">Futures</span>
              </span>
            </h1>
            <p>
              We are committed to providing exceptional, <br />
              learning experience that is engaging, interactive and fun.
            </p>
            <div className="green-cicle small-circle"></div>
            <Button url="#" buttonText="Get Started" />
          </div>
          <div className="right">
            <div className="shape1"></div>
            <div className="get-started-img"></div>
            <div className="shape2"></div>
          </div>
        </section>
        <section className="know-more">

        </section>
        <section className="explore">

        </section>
        <section className="mentors">

        </section>
        <section className="contact-us">

        </section>
      </div>
      <Footer />
    </div>

  );
}
export default LandingPage;
