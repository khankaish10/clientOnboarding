import { ERROR, AUTH, LOGOUT, LOADING } from "./actionTypes";

const initialState = {
  currentUser: null,
  error: "",
  isLoading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    //Authentication...
    case AUTH:
      return {
        ...state,
        currentUser: action.payload,
      };
      break;

    case LOGOUT:
      return {
        ...state,
        currentUser: null,
      };
      break;

    case ERROR:
      return {
        ...state,
        error: action?.payload,
      };
    
    case LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
      break;
  }
};

export default authReducer;
