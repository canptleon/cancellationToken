import React from 'react'
import axios from 'axios';

function AxiosSearchBar() {

  let cancelToken

  const handleSearchChange = async (searchTerm) => {

    if (typeof cancelToken != typeof undefined) {
      cancelToken.cancel()
    }

    cancelToken = axios.CancelToken.source()

    try {
      await axios.get(`https://jsonplaceholder.typicode.com/posts/${searchTerm}`,{ cancelToken: cancelToken.token })
    } 
    catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="innerDiv">
      <h1>AxiosSearchBar</h1>
      <div className='content'>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => handleSearchChange(e.target.value)}
        />
      </div>
    </div>
  )
}

export default AxiosSearchBar