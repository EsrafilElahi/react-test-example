import React, { useState } from 'react'


function Count() {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prevState => prevState + 1)
    }

    const decrement = () => {
        setCount(prevState => prevState - 1)
    }

    return (
        <div>
            <h2>count: {count}</h2>
            <button className='inc' onClick={increment}>+</button>
            <button className='dec' onClick={decrement}>-</button>

            <hr className='hr' />
        </div>
    )
}

export default Count
