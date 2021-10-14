
const initialState = {
    loading: true,
}

const reducerFunction = (state = initialState, action) => {
  switch (action.type) {
    case "START_REQUEST":
      return {
        ...state,...action.loading
        };
    case "RECEIVE_DATA":
    return {
        ...state,loading:false
        };
    case "FAILED_DATA":
    return {
        ...state,...action.payload
        };
    default:
      return state;
  }
};

export default reducerFunction;
