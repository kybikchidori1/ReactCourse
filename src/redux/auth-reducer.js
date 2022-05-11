/*jshint -W119*/
const SET_USER_DATA = "SET-USER-DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    default:
  }
};
export const setAuthUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: { userId, email, login },
});

export default authReducer;
/*jshint +W119*/
