import "./studentCourseDetails.css";
import SideBar from "../sideBar";
import TopBar from "../topBar";

function StudentCourseDetails() {
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
                <div className="bottomBorder">
                  {/* <a href="/enroll" className="enrollBtn"> */}
                  <a href="/course-detail-content" className="enrollBtn">
                    Enroll
                  </a>
                </div>
                <div className="bottomBorder">
                  <h2>What you'll learn</h2>
                  <p>
                    You will learnt he basic of Computer Programming using HTML
                    and CSS
                  </p>
                </div>
                <div className="bottomBorder">
                  <h2>This includes:</h2>
                  <p>100% positive reviews</p>
                  <p>20 Students</p>
                  <p>15 Lessons (***)</p>
                  <p>8 Courses</p>
                  <p>20 downloads (20 files)</p>
                  <p>Available from the app</p>
                  <p>Audio: English</p>
                  <p>
                    Level <span className="level">Beginner</span>
                  </p>
                </div>

                <div className="tags">
                  <h2>Tags:</h2>
                  <p>
                    <span>HTML X</span> <span>CSS X</span>
                  </p>
                  <br />
                  <p>
                    <span>togs X</span> <span>coding X</span>
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

export default StudentCourseDetails;

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
      <article>
        <p>
          Welcome to the exciting world of computer programming! Computer
          programming is like giving instructions to a computer to perform
          specific tasks. It's like teaching your electronic friend to do cool
          and fun things! Just like learning a new language, programming
          involves using special words and phrases, known as "code," to
          communicate with the computer.{" "}
        </p>

        
        
        <p>
          In programming, you'll learn about algorithms, which are step-by-step
          instructions that help solve problems. You'll use programming
          languages, such as HTML abd CSS, to write these instructions. As you
          gain more skills, you'll be able to create games, animations, and
          interactive stories. So, get ready to unlock your creativity and start
          your journey into the magical world of computer programming, where
          you'll become a digital wizard and make your ideas come to life!
          Remember, practice and patience are the keys to becoming a pro
          programmer. Happy coding! 🚀
        </p>
      </article>
    </div>
  );
}
