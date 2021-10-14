import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { useBetween } from 'use-between';
import useShareableState from '../useShareableState/useShareableState';
import giphyTrendingAPI from '../../APIs/giphyTrendingAPI';
import { failedData, receiveData, startRequest } from '../../store/actions/actions';
import './index.css'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


function GiphyPage() {
    
    const [limit,setLimit] = useState(25)
    const dispatch = useDispatch()
    const {failed,failedError,loading} = useSelector(state => state)
    const {state, setstate,showLoadMoreForSearch,searchLimit,setSearchLimit} = useBetween(useShareableState);

    const sendGetRequest = async ()=>{
            dispatch(startRequest(true));
            await giphyTrendingAPI(limit,2)
            .then((response)=>{
                setstate(response.data.data)
                dispatch(receiveData(false));           
                })
            .catch(()=>{
                    dispatch(failedData(true))
            })
        }
  
        const renderGiphys =  ()=>{
            return state.map(item =>{
                return (
                    <div key ={item.id}>
                        <img className="giphy" src={item.images.downsized_still.url}/>
                    </div>
                )
            })
        }

        
        const onLoadMoreGifs = ()=>{
            setLimit(limit+1)
        }
        
        const onLoadMoreGifsForSearch = ()=>{
            setSearchLimit(searchLimit+1)
        }
        
        useEffect(() => {
            sendGetRequest()
        },[limit])

    return ( <>
            {failed? failedError : null}
            {loading ?<div> 
                <Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={9000}  />
                </div>:
                 <div className="giphy-list">{renderGiphys()} </div>}
            {showLoadMoreForSearch ?  <button onClick={onLoadMoreGifsForSearch}> Load more ..</button> : <button variant="primary" onClick={onLoadMoreGifs}> Load more ...</button>}
             </>
        )
       
 }

export default GiphyPage
