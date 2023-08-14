import './App.css';
import LandingPage from './pages/General/Landing';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<LandingPage />}></Route>
      </Routes>
    </div>
  );
}
export default App;
