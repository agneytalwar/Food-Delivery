import React from 'react'
import DiningCarousel from './DiningCarousel'


function Dining() {
    return (
        <div>
            <h1 className='text-xl font-bold my-4 md:my-8 md:text-3xl md:semi-bold'>
                Collections
            </h1>
            <h3 className='text-xl text-gray-500 mb-6'>Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</h3>
            <DiningCarousel />
        </div>
    )
}

export default Dining
