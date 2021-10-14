import axios from 'axios';

const giphyTrendingAPI = (limit,offset) => {

  const url =  'https://api.giphy.com/v1/gifs/trending'
  const APIkey = "YOD5a0FtB9uGJQwPPGH3WJYgKHJ0IiSS";

    return axios.get(url,{
        params:{
            api_key:APIkey,
            limit:limit,
            offset:offset
        }
    })
};

export default giphyTrendingAPI;



