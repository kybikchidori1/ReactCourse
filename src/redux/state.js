let store = {
  _state: {
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
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state changed");
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
window.state = store;
