import './App.css';
import Login from './resources/login.js';
import onBoard from './resources/Image/onBoard.jpg';
// import mentor from './resources/Image/mentor.png';
// import admin from './resources/Image/admin.png';
import LandingPage from './resources/landing/LandingPage.js';
import CoursesBody from './resources/courses/courses';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" exact  element={<LandingPage />}></Route>
      <Route path="/login"  element={<Login image={onBoard}/>}></Route>
      <Route path="/courses"  element={<CoursesBody />}></Route>
        
      </Routes>
    </div>
  );
  
}


export default App;


