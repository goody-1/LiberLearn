import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
<<<<<<< HEAD
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
=======
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from 'react-router-dom';
>>>>>>> 9ed4e172f68ecf7f0d2356be858631e713ffb11a

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
