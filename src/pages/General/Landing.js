import React from "react";
import Header from "../../components/Landing/Header";
import Button from "../../components/Landing/Button";
import Footer from "../../components/Landing/Footer";
import teaching from '../../resources/images/teaching.png'
import './Landing.css'

function LandingPage() {
  return (
    <div className="landing">
      <Header homeActive="home-active" />
      <div className="landing-sections">
        <section className="get-started">
          <div className="left">
            <div className="green-circle big-circle"></div>
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
            <div className="green-circle small-circle"></div>
            <Button url="#" buttonText="Get Started" />
          </div>
          <div className="right">
            <div className="rounded-square shape1"></div>
            <img className="get-started-img" src={teaching}
              alt="Teaching two pupils at a desk" />
            <div className="rounded-square shape2"></div>
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
