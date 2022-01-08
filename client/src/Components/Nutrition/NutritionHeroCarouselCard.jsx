import React from 'react'

function NutritionHeroCarouselCard(props) {
    return (
        <div className='w-full'> 
            <img src={props.image} alt='supplements' className='w-full h-full' />
        </div>
    )
}

export default NutritionHeroCarouselCard
