import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://i.pinimg.com/originals/f6/7a/3a/f67a3a261f0c952640f9c1d214d73e96.png" />
      </header>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>

        <div>
          <a>Messages</a>
        </div>

        <div>
          <a>News</a>
        </div>

        <div>
          <a>Music</a>
        </div>

        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img src="https://media.discordapp.net/attachments/886915691951824898/963878321605734500/Koshka_udachi_trehzvetnaya.jpg" />
        </div>
        <div>ava + description</div>
        <div>
          My posts
          <div>New Post</div>
          <div>
            <div>post 1</div>
            <div>post 2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
