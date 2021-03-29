import React, { useState, useEffect } from 'react'
import './App.css';

const PAGE_NUMBER = 4;

export default function App() {
  const [state, setState] = useState([]);
  const [page, setPage] = useState(PAGE_NUMBER);

  useEffect(() => {
    fetch(`https://dog.ceo/api/breeds/image/random/${page}`)
      .then(res => res.json())
      .then(json => setState([...state, ...json.message]))
  }, [page])

  const scrollToEnd = () => {
    setPage( page + 1 )
  }

  window.onscroll = function() {
    //check if the page has scrolled to the bottom
    if (
      window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
    ) {
      scrollToEnd()
    }
  }

  return (
    <div className="App">
      {
        state.length > 0 && state.map((elem, i)=>
          <div key={i} className="container">
            <img src={elem} alt=""/>            
          </div>
        )
      }
    </div>    
  )
}

      {/* {state.length > 0 && state.map((el, i) => 
        <div key={i} className={'container'}>
          <h4>ID : {el._id}</h4>
          <h4>Name : {el.name}</h4>
          <h4>Trips: {el.trips}</h4>
        </div>
      )} */}