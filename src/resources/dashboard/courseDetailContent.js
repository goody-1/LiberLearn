import "./courseDetailContent.css";
import SideBar from "../sideBar";
import TopBar from "../topBar";
import Button from "../Navigation/button";
import U1 from "../Image/image2/U1.png";
import MarkUp from "../Image/image2/MarkUp.png";
import TU2 from "../Image/image2/TU2.png";
import TU3 from "../Image/image2/TU3.png";
import TU4 from "../Image/image2/TU4.png";
import TU5 from "../Image/image2/TU5.png";
import TU6 from "../Image/image2/TU6.png";
import TU7 from "../Image/image2/TU7.png";
import TU8 from "../Image/image2/TU8.png";
import Avatar from "../Image/image2/Avatar.png";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

function CourseDetailContent() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch(`https://liberlearn-backend.up.railway.app/api/subjects/${courseId}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setCourse(data);
      })
      .catch(error => {
        console.error('Error fetching course details:', error);
      });
  }, [courseId]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="studentDashboardBody">
      <div className="leftBodyOO">
        <SideBar />
      </div>

      <div className="rightBody">
        <div className="rightBodyTop">
          <TopBar avatar={Avatar} />
        </div>

        <section className="rightSection">
          <div className="rightBodyLow">
            <div className="rightBodyLow-Left">
              <div className="leftContainer">
                <h2>Discover</h2>
                <p>Courses &gt; Computer Programming</p>
                <CourseDetail
                  key = {course.title}
                  title = {course.title}
                  info = {course.info}
                  number_of_courses = {course.number_of_courses}
                  courses = {course.courses}

                />
              </div>
            </div>
            <div className="rightBodyLow-Right">
              <div className="rightContainer">
                <h2>Basics Overview</h2>

                <div className="bottomBorder">
                  <h2>MODULE 1 - INTRODUCTION</h2>
                  <p>
                    <span>
                      <img src={U1} alt="UI"></img>Definition of HTML
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>

                  <p>
                    <span>
                      <img src={TU2} alt="UI"></img>HTML tags and elements
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={TU3} alt="UI"></img>Text formatting and ...
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={TU4} alt="UI"></img>Links and anchor
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={TU5} alt="UI"></img>Images and multimedia
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={TU6} alt="UI"></img>HTML forms
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={TU7} alt="UI"></img>Semantics HTML
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={TU8} alt="UI"></img>Tables
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                </div>

                <div className="bottomBorder">
                  <h2>COURSE 2 - Learn Manufacturing</h2>
                  <p>
                    <span>
                      <img src={U1} alt="UI"></img>Introduction to CSS
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={TU2} alt="UI"></img>CSS selector
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={TU3} alt="UI"></img>CSS properties
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={TU4} alt="UI"></img>CSS box models
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={TU5} alt="UI"></img>Styling
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={TU6} alt="UI"></img>CSS color
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={TU7} alt="UI"></img>CSS color
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={TU8} alt="UI"></img>CSS transitions
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CourseDetailContent;

// An Internal Component

function CourseDetail(props) {
  return (
    <div className="border">
      <div className="imageArea">
        <iframe
          width="620"
          height="380"
          src="https://www.youtube.com/embed/zOjov-2OZ0E"
          title="I                                                                                                                                                                                                                                                                                            ntroduction to Programming and Computer Science - Full Course"
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <h3>{props.title}</h3>
      <p>By Oluwasijibomi Fayilenu, Computer Programming Expert</p>
      <div className="courseInfo">
        <span>Information</span>
        <span className="roundedTextBox">Content</span>
        <span>Content</span>
        <span>Community</span>
        <span>Students</span>
      </div>

      <div className="directToUnit">
        <div className="dirToUnit-Container">
          <p>Module 1 of {props.number_of_courses}</p>
          <p>Module 1 - Introduction</p>
          <div className="hr-lightOrange">
            <div className="hr-orange"></div>
          </div>
          <p>1 completed unit of {
            props.courses && props.courses.map(course => {
              if (course.id === 1) {
                return `${course.lessons.length}`;
              }
              return '';
            })
          } available</p>
        </div>
        <Button buttonText="Go to Unit 2" />
      </div>
      <article className="courseDetailArticle">
        <h3>
          Module 1 - Introduction<span>img</span>
        </h3>
        <p style={{ backgroundImage: `url(${U1})` }}>
          Lesson 1: HTML fundamentals <span>im</span>
        </p>
        <p>Lesson 2: HTML semantic elements</p>
        <p>
          <span className="TakeAssessment">
            You have completed course 1:{" "}
            <a href="assessment">Take Assessment</a>
          </span>
        </p>
        <h3>Module 2- CSS BASICS</h3>
        <h3>Course 3-CSS Layouts and Styling</h3>
      </article>
    </div>
  );
}
