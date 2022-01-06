import React from 'react'

function DeliverySmallCard({image,title}){
    return (<>
        <div className='lg:hidden bg-white shodow rounded-md w-24 md:w-56'>
            <div className='w-full h-24'>
                <img src={image} alt='food' className='w-full h-full object-cover rounded-t-md' />
            </div>
            <div>
                <h3 className='text-xl my-1 font-medium text-black'>{title}</h3>
            </div>
        </div>
    </>)
}
function DeliveryLargeCard({image,title}){
    return (<>
        <div className='hidden lg:block w-64 h-full px-9'>
            <div className='w-full h-48 '>
                <img src={image} alt='food' className='w-full h-full object-cover rounded-md' />
            </div>
            <div>
                <h3 className='text-xl my-1 font-medium text-black'>{title}</h3>
            </div>
        </div>
    </>)
}

function DeliveryCategory(props) {
    return (
       <>
            <DeliverySmallCard {...props}/>
            <DeliveryLargeCard {...props}/>
       </>
    )
}

export default DeliveryCategory
