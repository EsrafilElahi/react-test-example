import React, { useState } from 'react'


function Header() {

    const [h1, setH1] = useState('h1')

    const handleAlert = () => {
        setH1('hello')
    }

    return (
        <div>
            <h2 className='title'>Hello World</h2>
            <p className='paragraph'>react unit testing</p>
            <p className='h1'>hey:{h1}</p>
            <button className='alert' onClick={handleAlert}>submit</button>

            <hr className='hr' />
        </div>
    )
}

export default Header
