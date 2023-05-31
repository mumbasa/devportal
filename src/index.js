import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dashboard from './pages/dashboard';
import ApplicationPage from './pages/applicantsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserPage from './pages/userpage';
import NewUser from './pages/newuser';
import Login from './pages/login';
import Searcher from './pages/searcher';
import Main from './pages/main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
    <Routes>
    <Route path="/admin" element={<App />} />
    <Route path="/admin/dashboard" element={<Dashboard />} />
    <Route path="/admin/applicants" element={<ApplicationPage />} />
    <Route path="/admin/users" element={<UserPage />} />
    <Route path="/admin/new/user" element={<NewUser />} />
    <Route path="/admin/search" element={<Searcher />} />
    <Route path="/admin/login" element={<Login />} />

</Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
