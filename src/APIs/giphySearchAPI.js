import axios from 'axios';

const giphySearchAPI = (searchWord,limit) => {

  const url =  'https://api.giphy.com/v1/gifs/search'
  const APIkey = "YOD5a0FtB9uGJQwPPGH3WJYgKHJ0IiSS";

    return axios.get(url,{ 
        params:{
            api_key:APIkey,
            q:searchWord,
            limit:limit,
            offset:2,
        }
    })
};

export default giphySearchAPI;



