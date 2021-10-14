

export const startRequest = (loadingStatus) => {
    console.log("loadingStatus",loadingStatus)
    return {
      type: "START_REQUEST",
      loading:loadingStatus
    };
  };
  
  export const receiveData = loadingStatus => {
    return {
      type: "RECEIVE_DATA",
      loading:loadingStatus
    };
  };


  export const failedData = failed => {
    return {
      type: "FAILED_DATA",
      payload:{loading:false,
                failed,
                failedError:"Unable to get gifs.Please try agian"}
    };
  };