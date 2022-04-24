import { db } from "../../config/index";
import { SAVECONTENT, SAVEWELCOME,SAVEDESIGN } from "../reducer/actionTypes";

//card data------
export const saveCardData = (cardData, uid) => async (dispatch) => {
  const keys = Object.keys(cardData);

  const names = keys.find((item) => item === "welcome" || "content" || "design");
  switch (names) {
    case "welcome":
      saveToFirebase(cardData, dispatch, names, uid);

      break;
    case "content":
      saveToFirebase(cardData, dispatch, names, uid);
      break;
    case "design":
      saveToFirebase(cardData, dispatch, names, uid);
      break;
    default:
      break;
  }
};

const saveToFirebase = (firebaseData, dispatch, names, uid) => {
  db.collection("card")
    .doc(`${uid}`)
    .set(
      {
        data: {
          [names]: firebaseData,
        },
      },
      { merge: true }
    )
    .then((doc) => {
      dispatch({type: 'SAVED'})
      console.log("Document successfully written!");
      let dispatchType;

      if (names === "welcome") {
        dispatchType = SAVEWELCOME;
      } else if (names === "content") {
        dispatchType = SAVECONTENT;
      } else if(names === "design"){
        dispatchType = SAVEDESIGN;
      }

      dispatch({
        type: dispatchType,
        payload: firebaseData,
      });
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
};

export const modifiedGetDocument = (getDocument) => {
  delete getDocument.drivingNeedTopTwo;
  delete getDocument.drivingNeedTopThree;
  delete getDocument.selectedDay;
  return getDocument
};
