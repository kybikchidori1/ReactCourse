import React, { Component } from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Technologies />
    </div>
  );
};

const Technologies = () => {
  return (
    <div>
      <ul>
        <li>Компонента - это функция, возвращающася разметку JSX </li>
        <li>Компонента - это тег</li>
        <li>dsds</li>
        <li>dsds</li>
      </ul>
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <a href="#s">Home</a>
      <a href="#s">News Feed</a>
      <a href="#s">Messages</a>
    </div>
  );
};

export default App;
