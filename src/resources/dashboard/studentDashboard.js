// import './studentDashboard.css';

function StudentDashboard() {
    return (
      <div className="studentDashboardBody">
        <div className="leftBody">
            {/* import component from outside */}</div>
        <div className="rightBody">
          <div className="rightBodyTop">
            {/* import component from outside */}
          </div>
          <div className="rightBodyMid">
            {/* import components created below */}
          </div>
          <div className="rightBodyLow">
            <div className="rightBodyLow-Left">
              <h2>Courses</h2>
              {/* import components created below */}
            </div>
            <div className="rightBodyLow-Right">
              <h2>Upcoming Task</h2>
              {/* import components created below */}
            </div>
          </div>
        </div>
      </div>
    );
 }

export default StudentDashboard;