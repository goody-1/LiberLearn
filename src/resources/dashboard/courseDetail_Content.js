import "./courseDetail_Content.css";
import SideBar from "../sideBar";
import TopBar from "../topBar";
import Button from "../Navigation/button";
import UI from "../Image/image2/UI.png";
import MarkUp from "../Image/image2/MarkUp.png";

function CourseDetail_Content() {
  return (
    <div className="studentDashboardBody">
      <div className="leftBodyOO">
        <SideBar />
      </div>

      <div className="rightBody">
        <div className="rightBodyTop">
          <TopBar />
        </div>

        <section className="rightSection">
          <div className="rightBodyLow">
            <div className="rightBodyLow-Left">
              <div className="leftContainer">
                <h2>Discover</h2>
                <p>Courses ** Computer Programming</p>
                <CourseDetail />
              </div>
            </div>
            <div className="rightBodyLow-Right">
              <div className="rightContainer">
                <h2>Basics Overview</h2>

                <div className="bottomBorder">
                  <h2>MODULE 1 - INTRODUCTION</h2>
                  <p>
                    <img src={UI} alt="UI"></img>Definition of HTML <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>HTML tags and elements</p>
                  <p>Text formatting and ...</p>
                  <p>20 Students</p>
                  <p>20 Students</p>
                </div>

                <div className="bottomBorder">
                  <h2>COURSE 2 - Learn Manufacturing</h2>
                  <p>100% positive reviews</p>
                  <p>20 Students</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CourseDetail_Content;

// An Internal Component

function CourseDetail() {
  return (
    <div className="border">
      <div className="imageArea">
        <iframe
          width="770"
          height="491"
          src="https://www.youtube.com/embed/zOjov-2OZ0E"
          title="Introduction to Programming and Computer Science - Full Course"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <h3>Computer Programming</h3>
      <p>By Oluwasijibomi Fayilenu, Computer Programming Expert</p>
      <div className="courseInfo">
        <span className="roundedTextBox">Information</span>
        <span>Content</span>
        <span>Community</span>
        <span>Students</span>
      </div>

      <div className="directToUnit">
        <div>
          <p>Course 1 of 6</p>
          <p>Course 1 - Introduction</p>
          <div className="hr-lightOrange">
            <div className="hr-orange"></div>
          </div>
          <p>1 completed units of 6 available</p>
        </div>
        <Button url="#" buttonText="Go to Unit 3" />
      </div>
      <article>
        <h2>Course 1 - Introduction</h2>
      
        <p>Module 2: HTML semantic elements</p>
        <p>You have completed Course 1: Take Assessment</p>
        <h2>Course 2 - CSS Basics</h2>
        <h2>Course 3 - CSS Layouts and Styling</h2>
      </article>
    </div>
  );
}
