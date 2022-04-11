import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className='app-wrapper'>
      <header>
        <img src="https://i.pinimg.com/originals/f6/7a/3a/f67a3a261f0c952640f9c1d214d73e96.png" />
      </header>
      <nav>
        <div>Profile</div>
        <div>Messages</div>
      </nav>
      <div>Main Content</div>
    </div>
  );
};

export default App;
