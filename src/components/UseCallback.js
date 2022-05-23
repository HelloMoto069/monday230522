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
      <div><h1>Main Count: {count}</h1>
        <h1>Other Count: {otherCounter}</h1></div>
      <br />
      <div className='buttons'>

        <button onClick={increment}><span>+</span></button>
        <button onClick={decrement}><span>-</span></button>
        <button onClick={incrementOtherCounter}><span>incrementOtherCounter</span></button>
      </div>
    </>
  )
}

export default UseCallback;