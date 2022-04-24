import { SAVEWELCOME, SAVECONTENT, SUBMIT, SAVEDESIGN, FIREBASEGETDOCUMENT, SETCARD } from "./actionTypes";

const initialState = {
  data: null,
  isActive: true,
  saved: false,
  // data: {
  //   welcome: null,
  //   content: null,
  //   design: null,
  // },
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVEWELCOME:
      const welcome = { ...action.payload };

      return {
        data: {
          ...state.data,
          welcome,
        },
      };
      break;

    case SAVECONTENT:
      const content = { ...action.payload };
      // console.log(welcome)
      return {
        data: {
          ...state.data,
          content,
        },
      };
      break;

    case SAVEDESIGN:
      const design = { ...action.payload };
      // console.log(welcome)
      return {
        data: {
          ...state.data,
          design,
        },
      };
      break;

    case FIREBASEGETDOCUMENT:
      return {
        data: action.payload
      };
      break;
    
    case "ISACTIVE":
      // console.log(action.payload)
      return {
        ...state,
        isActive: action.payload
      };
      break;
    
    case "SAVED": 
      return {...state, saved: true };

    case SETCARD: 
      return {
        ...state,
        data: action.payload
      }
      
    case SUBMIT:
      return state;

    default:
      return state;
      break;
  }
};

export default cardReducer;
