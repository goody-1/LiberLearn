import './divOne.css';
import rightPix from '../Image/LittleBoy.png';
import Button from '../Navigation/button';

function DivOne() {
  return (
    <div className="landingDiv">
      <div className="topLeft1">
        <div className="green1"></div>
        <h1 className="noFlex">
          <span>
            <span className="blueText">Empowering</span> Minds,
          </span>
          <span>
            Shaping <span className="blueText">Futures</span>
          </span>
        </h1>
        <p>
          Picture a learning adventure for juvenile offenders that's not just engaging, but electrifying.<br />
          Imagine interactions that aren't just informative, but inspiring.
        </p>
        <p>
          With us, education becomes more that just a classroom; it is an exploration of possibilities waiting to be
          discovered.
        </p>
        <div className="green2"></div>
        {/* <a href='#' className='getStarted'>Get Started</a>         */}
        <Button url="#" buttonText="Get Started" />
      </div>
      <div className="topRight">
        <div className="rightTop"></div>
        <div
          className="rightMid"
          style={{ backgroundImage: `url(${rightPix})` }}
        >
          {" "}
        </div>
        <div className="rightLower"></div>
      </div>
    </div>
  );
}

export default DivOne;