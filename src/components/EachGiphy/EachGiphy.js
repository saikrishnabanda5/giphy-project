import React from 'react'
import './index.css'

function EachGiphy(props) {
    const {url} = props
    return (
            <img className="image" src={url}/>
    )
}

export default EachGiphy
