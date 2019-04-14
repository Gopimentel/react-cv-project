import { userData as fixedUserData } from "../../fixtures/userData";

const loadDataAction = inputUserData => ({
  type: "LOAD_DATA",
  userData: inputUserData
});

const fetchUserData = () => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      //simulating request to server
      setTimeout(() => {
        try {
          //throw 404 //testing error page;
          resolve(fixedUserData);
          dispatch(loadDataAction(fixedUserData));
        
        } catch (e) {
          reject(e);
        }
      }, 2000);
    });
  };
};

export { fetchUserData };
