import React from "react";
import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from "../../../redux/profile-reducer.js";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  console.log("props", props);
  return (
    <StoreContext.Consumer>
      {(store) => {
        console.log("store", store);
        let state = store.getState();
        let addPostClick = () => {
          store.dispatch(addPostActionCreator());
        };
        let onPostChange = (body) => {
          store.dispatch(updateNewPostTextActionCreator(body));
          // store.dispatch(body);
        };

        return (
          <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPostClick}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
