import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { useBetween } from 'use-between';
import useShareableState from '../useShareableState/useShareableState';
import giphyTrendingAPI from '../../APIs/giphyTrendingAPI';
import { failedData, receiveData, startRequest } from '../../store/actions/actions';
import './index.css'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';


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

        
        const onLoadMoreGifsForTrending = ()=>{
            setLimit(limit+25)
        }
        
        const onLoadMoreGifsForSearch = ()=>{
            setSearchLimit(searchLimit+25)
        }
        
        useEffect(() => {
            sendGetRequest()
        },[limit])

    return ( <div className="giphy-page">
            {failed? <div className="api-failed">
                <img className="failed-image" src="https://res.cloudinary.com/dfxicv9iv/image/upload/v1634237129/oops-png-4_icrzy3.png" />
                <span className="failed-message">{failedError}</span>
            </div> : null}
            {loading ? <Loader className="loader" type="ThreeDots" color="#00BFFF" height={100} width={100} timeout={9000}  />:
            <div className="giphy-list">{renderGiphys()} </div>}

         {showLoadMoreForSearch ? 
           <Button variant="primary" onClick={onLoadMoreGifsForSearch}> Load more ...</Button> : 
           <Button variant="primary" onClick={onLoadMoreGifsForTrending}> Load more ...</Button>
         }
             </div>
        )
 }

export default GiphyPage
