import { rerenderEntireTree } from "../render.js";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, How are you?", likesCount: 12 },
      { id: 2, message: "Its my first post", likesCount: 13 },
    ],
    newPostText: "it-kamasutra.com",
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Dimych" },
      { id: 2, name: "Andrew" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Dio" },
      { id: 5, name: "Loh" },
      { id: 6, name: "Admiral" },
    ],
    messages: [
      { id: 1, message: "hi" },
      { id: 2, message: "how are you" },
      { id: 3, message: "yo" },
      { id: 4, message: "yo" },
      { id: 5, message: "yo" },
    ],
  },
  sidebar: {},
};

window.state = state;

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;
