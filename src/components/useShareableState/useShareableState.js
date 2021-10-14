import  { useState } from 'react';

const useShareableState = () => {
  const [state, setstate] = useState([]);
  const [limit,setLimit] = useState(1)
  const [searchLimit,setSearchLimit] = useState(25)
  const [showLoadMoreForSearch,setShowLoadMoreForSearch] = useState(false)
  return {
    state,setstate,
    limit,setLimit,
    searchLimit,setSearchLimit,
    showLoadMoreForSearch,setShowLoadMoreForSearch
  }
}

export default useShareableState