import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  console.log("props", props);
  return (
    <div>
      <ProfileInfo />
      {props && (
        <MyPostsContainer
          posts={props.profilePage?.posts}
          newPostText={props.profilePage?.newPostText}
          dispatch={props.dispatch}
        />
      )}
    </div>
  );
};

export default Profile;
