const defaultUserDataState = {};

export default (state = defaultUserDataState, action) => {
  switch (action.type) {
    case "LOAD_DATA":
      return {...state, ...action.userData};

    default:
      return state;
  }
};
