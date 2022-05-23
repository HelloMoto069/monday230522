import React, { useState, useCallback } from 'react'


const UseCallback = () => {
  const [count, setCount] = useState(0)
  const [otherCounter, setOtherCounter] = useState(0)

  const increment = useCallback(() => {
    setCount(count + 1)
  }, [count])
  const decrement = useCallback(() => {
    setCount(count - 1)
  }, [count])
  const incrementOtherCounter = useCallback(() => {
    setOtherCounter(otherCounter + 1)
  }, [otherCounter])

  return (
    <>
      <div><h1>Number Of Products: {count}</h1>
        <h1>Grocerry Products: {otherCounter}</h1></div>
      <br />
      <div className='buttons'>

        <button onClick={increment}><span>Add To Cart</span></button>
        <button onClick={decrement}><span>Remove From Cart</span></button>
        <button onClick={incrementOtherCounter}><span>Add to Grocerry</span></button>
      </div>
    </>
  )
}

export default UseCallback;