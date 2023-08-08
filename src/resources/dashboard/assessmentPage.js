import "./assessmentPage.css";
import cancelIcon from "../Image/image2/cancel icon.png";
import SideBar from "../sideBar";
import TopBar from "../topBar";
import userImage from "../Image/image2/userImage.png";
import Button from "../Navigation/button";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getModuleIdFromSlug from "./getModuleIdFromSlug";

function AssessmentPage() {
  const { slug } = useParams();
	const [assessment, setAssessment] = useState(null);

	useEffect(() => {
    async function fetchModule() {
      const moduleId = await getModuleIdFromSlug(slug);

      if (moduleId !== null) {
        fetch(`https://liberlearn-backend.up.railway.app/api/assessments`)
        .then(response => response.json())
        .then(assessments => {
          // console.log(assessments)
          if (assessments) {
            const dAssessment = assessments.find(assessment => assessment.course === parseInt(moduleId));
            console.log(dAssessment);
            setAssessment(dAssessment);
          }
        })
        .catch(error => {
          console.error('Error fetching assessment:', error);
        });
      }
    }

    fetchModule();
  }, [slug]);

  if (!assessment) {
    return <div>Loading your assessment...</div>
  }
  return (
    <div className="assessmentPageBody">
      <div className="assPageLeftBody">
        <SideBar />
      </div>

      <div className="assPageRightBody">
        <div className="rightBodyTop">
          <TopBar avatar={userImage} />
        </div>
        <Assessment
          moduleId = {assessment.course}
          title = {assessment.title}
          desc = {assessment.description}
          questions = {assessment.questions}
        />
      </div>
    </div>
  );
}
export default AssessmentPage;


function Assessment(props) {
  return (
    <section className="assPageRightSection">
      <div className="assPageTop">
        <div>
          <h2>Discover</h2>
          <p className="text-faint">Courses &gt; Computer Programming &gt;<span> {props.title}</span> </p>
        </div>
        <Button url="/trial-link" buttonText="Submit" />
      </div>
      <div className="assPageLower">
        <h1>WELCOME!</h1>
        <h2> Instruction</h2>
        <p>
          This assessment is timed for 10 minutes
          <br />
          Choose the correct option
        </p>

        {
          props.questions && props.questions.map((question, index) =>  (
            <form className="assessmentForm">
              <p>
                <span className="Ash">Question {index + 1}/{props.questions.length}</span>
                {question.text}
              </p>
              {
                question.choices && question.choices.map(choice => (
                  <label className="inputType">
                    <span>{choice.text}</span>{" "}
                    <input type="radio" name={`question_${question.id}`} value={choice.is_correct} />
                  </label>
                ))
              }
            </form>
          ))
        }
      </div>
    </section>
  )
}
