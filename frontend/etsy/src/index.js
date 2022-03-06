import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Register from './components/Register';
import Login from './components/Login';
import reportWebVitals from './reportWebVitals';
import Favorites from './components/Favorites';
import ShopName from './components/ShopName';
import ProfilePage from './components/ProfilePage';

ReactDOM.render(
  <React.StrictMode>
    <ProfilePage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
