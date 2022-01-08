import React from 'react'
import Slider from 'react-slick'

//components
import {NextArrow,PrevArrow} from '../CarouselArrows'
import PictureCarouselCard from '../Dining/PictureCarouselCard'

function NightlifeCarousel() {

    const settings={
          arrows:true,
          infinite:false,
          speed:500,
          initialSlide:0,
          slidesToShow:5,
          slidesToScroll:2,
          nextArrow:<NextArrow/>,
          prevArrow:<PrevArrow/>,
          responsive:[
              {
                  breakpoint:1024,
                  settings:{
                      slidesToShow:3,
                      slidesToScroll:3,
                      infinite:true,
                      dots:true,
                  }
              },
              {
                  breakpoint:600,
                  settings:{
                      slidesToShow:2,
                      slidesToScroll:2,
                      initialSlide: 2,
                  }
              },
              {
                  breakpoint:400,
                  settings:{
                      slidesToShow:1,
                      slidesToScroll:1,
                  }
              },
          ]
    }
    return (
        <div className='w-full '>
            <Slider {...settings}>
                <PictureCarouselCard />
                <PictureCarouselCard />
                <PictureCarouselCard />
                <PictureCarouselCard />
                <PictureCarouselCard />
                <PictureCarouselCard />
                <PictureCarouselCard />
            </Slider>
        </div>
    )
}

export default NightlifeCarousel
