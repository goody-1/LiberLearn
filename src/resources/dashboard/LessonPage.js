import './courseDetailContent.css'
import './lessonPage.css'
import SideBar from "../sideBar";
import TopBar from "../topBar";
import Avatar from "../Image/image2/Avatar.png";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getModuleIdFromSlug from './getModuleIdFromSlug';


function LessonPage() {
	const { slug, lessonId } = useParams();
	const [lesson, setLesson] = useState(null);

	useEffect(() => {
    async function fetchCourse() {
      const moduleId = await getModuleIdFromSlug(slug);

      if (moduleId !== null) {
        fetch(`https://liberlearn-backend.up.railway.app/api/courses/${moduleId}`)
        .then(response => response.json())
        .then(data => {
          // console.log(data)
          if (data.lessons) {
            const selectedLesson = data.lessons.find(lesson => lesson.id === parseInt(lessonId));
            console.log(selectedLesson);
            const updatedLesson = {
              ...selectedLesson,
              moduleId: data.id,
              moduleTitle: data.title,
            };
            setLesson(updatedLesson);
          }
        })
        .catch(error => {
          console.error('Error fetching course details:', error);
        });
      }
    }

    fetchCourse();
  }, [slug, lessonId]);

  if (!lesson) {
    return <div>Loading...</div>;
  }

  return (
    <div className="studentDashboardBody detail">
      <div className="leftBodyOO">
        <SideBar />
      </div>

      <div className="rightBody">
        <div className="rightBodyTop">
          <TopBar avatar={Avatar} />
        </div>

        <LessonComponent
          id = {lesson.id}
          title = {lesson.title}
          desc = {lesson.description}
          contents = {lesson.contents}
          moduleId = {lesson.moduleId}
          moduleTitle = {lesson.moduleTitle}
        />
      </div>
    </div>
  );
}
export default LessonPage;

function LessonComponent(props) {
  const { slug } = useParams();
  const [module, setModule] = useState(null);

  useEffect(() => {
    fetch(`https://liberlearn-backend.up.railway.app/api/courses/${props.moduleId}`)
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        setModule(data);
      })
      .catch(error => {
        console.error('Error fetching course details:', error);
      });
  }, [slug, props.moduleId]);

  if (!module) {
    return <div>Waiting for module ...</div>
  };

  return (
    <section className="rightSection">
      <div className="rightBodyLow">
        <div className="rightBodyLow-Left">
          <div className="leftContainer">
            <h2>Discover</h2>
            <p className="course-breadcrumb">Courses &gt; {props.moduleTitle} &gt; <span>{props.title}</span></p>
            <div className="border">
              <div className="imageArea">
                {props.contents.map(content => {
                  if (content.content_type === "Video") {
                    const iframeSrc = content.item.match(/src="([^"]+)"/)[1];
                    return (
                      <iframe
                        key={content.id}
                        title={props.title}
                        src={iframeSrc}
                        loading="lazy"
                        allowFullScreen
                      />
                    );
                  } else {
                    return null;
                  }
                })
                }
              </div>

              {props.contents.map(content => {
                if (content.content_type === "Text") {
                  return (
                    <div className='lesson-text text-black'
                      dangerouslySetInnerHTML={{ __html: content.item }} />
                  );
                  } else {
                    return null;
                  }
                })
              }
            </div>
          </div>
        </div>
        <LessonsNav
          moduleId = {module.id}
          title = {module.title}
          lessons = {module.lessons}
        />
      </div>
    </section>
  );
}

function LessonsNav(props) {

  return (
    <div className="rightBodyLow-Right">
      <div className="rightContainer">
        <h2>Module Overview</h2>
        <div className="bottomBorder">
          <h2>MODULE {props.moduleId} - {props.title.toUpperCase()}</h2>
          {
            props.lessons && props.lessons.map((lesson, index) => (
              <p>
                <div className="lesson-menu">
                  <span className="symbol">
                    {`L${index + 1}`}
                  </span>
                  {lesson.title}

                  {/* <img src={MarkUp} alt="MarkUp" /> */}
                </div>
              </p>
            ))
          }
        </div>
      </div>
    </div>
  );
}
