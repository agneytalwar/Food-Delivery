import React from 'react'

//components
import Navbar from '../Components/Navbar/index'

function Homelayout({children}) {
    return (
        <div>
            <Navbar/>
            <div className='container mx-auto px-4 lg:px-20'>{children}</div>
        </div>
    )
}

export default Homelayout
