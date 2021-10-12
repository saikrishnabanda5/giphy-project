import React,{useState} from 'react'
import axios from 'axios';

function Search() {

    const [searchInput, setsearchInput] = useState([])
    const [data, setdata] = useState([])

    let APIkey =  "YOD5a0FtB9uGJQwPPGH3WJYgKHJ0IiSS";
    const searchGetRequest = async ()=>{
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIkey}&limit=10&q=`
        
        url = url.concat(searchInput)

        await axios.get(url)
        .then((response)=>{
            const data = response.data.data.map(obj => obj);
            setdata(data)
            })
          .catch((error)=>{
           console.log("erroe",error)
          })
   }

   const onSearchGiphy = (e)=>{
    console.log(e.target.value)
    setsearchInput(e.target.value)
    searchGetRequest()
 }
 
    return (
        <input type="search" onChange={onSearchGiphy}/>
    )
}

export default Search
