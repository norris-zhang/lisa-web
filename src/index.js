import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import Classes from './components/teacher/Classes';
import Students from './components/teacher/Students';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="login" element={<Login />} />
        <Route path="classes" element={<Classes />} />
        <Route path="class/:classId" element={<Students />} />
        <Route path="*" element={
          <main style={{ padding: "1rem" }}>
            <p>404</p>
          </main>
        } />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
