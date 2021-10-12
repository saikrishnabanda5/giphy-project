import React,{useEffect,useState} from 'react'
import axios from 'axios';
import EachGiphy from '../EachGiphy/EachGiphy';


function GiphyPage() {

    const [state, setstate] = useState([])

    let APIkey =  "00wKDgTbW66Uus6ivdDbQKHIGZHlnB81";
    const sendGetRequest = async ()=>{
        await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${APIkey}&limit=100`)
        .then((response)=>{
            const data = response.data.data.map(obj => obj);
              setstate(data)
            })
          .catch((err)=>{
           console.log("erroe",err)
          })
   }
  
   useEffect(() => {
        sendGetRequest()
    })


    return (
            <div className="image-container">
                    {state.map((giphy)=>{
                        for (const keys in giphy) {
                        for(const key in giphy.images){
                            return <EachGiphy url = {giphy.images[key].url}/>
                            }
                            }
                        }
                )}
            </div>
    )

    }
export default GiphyPage
