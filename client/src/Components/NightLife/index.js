import React from 'react'

//components
import NightLifeCarousel from './NightLifeCarousel'

function NightLife() {
    return (
        <div>
            <h1 className='text-xl font-bold my-4 md:my-8 md:text-3xl md:semi-bold'>
                Collections
            </h1>
            <h3 className='text-xl text-gray-500 mb-6'>Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</h3>
            <NightLifeCarousel />
        </div>
    )
}

export default NightLife
