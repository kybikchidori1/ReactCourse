import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://i.pinimg.com/originals/0b/3f/74/0b3f74a151b808a193820874ba3bc555.jpg"></img>
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
