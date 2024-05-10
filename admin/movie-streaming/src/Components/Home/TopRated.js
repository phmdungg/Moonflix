import React, { useState } from 'react'
import Titles from '../Titles'
import { BsBookmarkStarFill } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Movies } from '../../Data/MovieData'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Rating from '../Stars'


function TopRated() {
  const [nextE1, setNextE1] = useState(null)
  const [prevE1, setPrevtE1] = useState(null)
  

  return (
    <div className='my-16'>
      <Titles title='Top Rated' Icon={BsBookmarkStarFill} />
      <div className='mt-10'>
        <Swiper
          navigation={{ nextE1, prevE1 }}
          autoplay={true}
          speed={1000}
          loop={true}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,

            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,

            },
            1280: {
                slidesPerView: 4,
                spaceBetween: 40,

            },
        }}
        >
          {
            Movies.map((movie, index) => (
              <SwiperSlide key={index}>
                <div className='p-4 h-rate hovered border border-border bg-dry rounded-lg overflow-hidden'>
                  <img
                    src={`/images/movies/${movie.titleImage}`}
                    alt={movie.name}
                    className='w-full h-full object-cover rounded-lg'
                  />
                  <div className='px-4 gap-6  hoveres absolute bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0'>
                    <button className='w-12 h-12 flex-colo transitions hover:bg-subMain rounded-full text-white'>
                      <FaHeart />
                    </button>
                    <Link className='font-semibold text-xl trancuted line-clamp-2' to={`/movie/${movie.name}`}>{movie.name}
                    </Link>
                    <div className='flex gap-2 text-star'>
                      <Rating value={movie.rate}/>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  )
}

export default TopRated