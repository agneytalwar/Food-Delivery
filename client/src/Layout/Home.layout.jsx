import React from 'react'


//components
import Navbar from '../Components/Navbar/index'
import FoodTab from '../Components/FoodTabs/index'

function Homelayout({children}) {
    return (
        <div>
            <Navbar/>
            <FoodTab/>
            <div className='container pb-24 mx-auto px-4 lg:px-20'>{children}</div>
        </div>
    )
}

export default Homelayout
