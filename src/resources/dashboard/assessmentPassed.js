import "./assessmentPassed.css";
import passImage from '../Image/image2/e commerce completed order.png';
import userImage from "../Image/image2/userImage.png";
import SideBar from "../sideBar";
import TopBar from "../topBar";

function AssessmentPassed() {
  return (
    <div className="assessmentPassedBody">
      <div className="assPassedLeftBody">
        <SideBar />
      </div>

      <div className="assPassedRightBody">
        <div className="rightBodyTop">
            <TopBar avatar={ userImage } />
        </div>

        <section className="assPassedRightSection">
          <h2>Discover</h2>
          <p>Courses Computer Programming Assessment</p>
          <h1>Congrats</h1>
          <p>
            Congratulations on completing your course! 🎉🎓 Your hard work and
            dedication have paid off. Keep striving for excellence and embrace
            the opportunities ahead. Here's to a bright future! 🌟🌱
          </p>
          <div className="passMark">
            <h1>70%</h1>
            <img src={passImage} alt="e commerce completed order" />
          </div>
          <a href="/assessment-fail">Home</a>
        </section>
      </div>
    </div>
  );
}

export default AssessmentPassed;

