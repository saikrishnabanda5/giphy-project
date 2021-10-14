import React,{useState,useEffect} from 'react'
import { useBetween } from 'use-between';
import useShareableState from '../useShareableState/useShareableState';
import giphySearchAPI from '../../APIs/giphySearchAPI';
import './index.css'
function Search() {

    const [searchInput, setsearchInput] = useState("")
    const [errorMessage,setErrorMessage] = useState(false)
    const {setstate,searchLimit,setShowLoadMoreForSearch} = useBetween(useShareableState);

    const searchGetRequest = async ()=>{
        await giphySearchAPI(searchInput,searchLimit)
          .then((response)=>{
            setstate(response.data.data)
          })
            .catch((error)=>{
                console.log(error)
            })
        }

    const onSearchGiphy = (event)=>{
         setsearchInput(event.target.value)
        }

    const handleKeyPress = (event)=>{
        if(event.key === "Enter" && searchInput !==""){
            setShowLoadMoreForSearch(true)
            setErrorMessage(false)
            searchGetRequest()
        }
        else if(searchInput === "" && event.key === "Enter"){
            setErrorMessage(true)
        }
    }
        
        useEffect(() => {
            searchGetRequest()
        },[searchLimit])
    
    return (<div className="search-input">
            <img className="giphy-image" src="https://res.cloudinary.com/dfxicv9iv/image/upload/v1634234561/800px-Giphy-logo.svg_vzuup2.png"/>
            <div className="input-message">
                <input type="text" className="search" placeholder="Type and press enter" onChange={onSearchGiphy} onKeyPress={handleKeyPress}/>
                <span className="error-message">{errorMessage ? "Please type something": null} </span>
            </div>
            </div>
        )
    }

export default Search
