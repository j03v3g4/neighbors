import api from '../../utils/apiRequests';
import googlePlaces from '../../utils/googlePlaces';
// ACTION TYPES
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const SUBMIT_LOCATION = 'SUBMIT_LOCATION';

// ACTION CREATORS
// receives payload from an action -- in this case username
export const updateUsername = (username) => {
  return {
    type: UPDATE_USERNAME,
    username,
  };
};

export const updatePassword = (password) => {
  return {
    type: UPDATE_PASSWORD,
    password,
  };
};

export const submitLocation = (lat, lng) => {
  console.log("ACTIONS: ",lat, lng)
  googlePlaces.getNeighborhood(lat, lng)
  .then(result => {
    console.log("result in action: ", result)
  })
  return {
    type: SUBMIT_LOCATION,
    lat,
    lng,
  };
};

// Asnyc action to check database for user
// after this action run userAuthenticated
export const userLogin = () => {
  return (dispatch, getState) => {
    const username = getState().loginReducer.username;
    const password = getState().loginReducer.password;
    api.userLogin(username, password)
    .then(response => {
      dispatch(userAuthenticated(response))
    })
  };
};

export const userAuthenticated = (result) => {
  // if result is successful login log the user in
  return {
    type: USER_LOGIN,
    result,
  };
};
