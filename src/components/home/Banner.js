import React from 'react'
import Slider from "react-slick";
import {bannerImgOne, bannerImgTwo, bannerImgThree, bannerImgFour, bannerImgFive} from '../../assets'

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
  return (
    <div>
        <Slider {...settings}>
          <div>
            <img src={bannerImgOne} alt='bannerOne' />
          </div>
          <div>
            <img src={bannerImgTwo} alt='bannerOne' />
          </div>
          <div>
            <img src={bannerImgThree} alt='bannerOne' />
          </div>
          <div>
            <img src={bannerImgFour} alt='bannerOne' />
          </div>
          <div>
            <img src={bannerImgFive} alt='bannerOne' />
          </div>
        </Slider>
      </div>
  )
}

export default Banner