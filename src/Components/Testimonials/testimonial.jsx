import React from 'react'
import './testimonial.css'
import avg1 from '../../assets/avater1.jpg'
import avg2 from '../../assets/avater2.jpg'
import avg3 from '../../assets/avater3.jpg'
import avg4 from '../../assets/avater4.jpg'
import avg6 from '../../assets/avater6.jpg'
import avg5 from '../../assets/avater5.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const review = [
  {
      avater: avg1,
      name: 'AFOLABI AKOREDE',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet placeat, ad numquam exercitationem consequuntur esse porro eius temporibus asperiores similique, doloribus impedit voluptate commodi explicabo neque itaque necessitatibus laboriosam beatae.'

  },
  {
      avater: avg2,
      name: 'AFOLABI AKOREDE',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet placeat, ad numquam exercitationem consequuntur esse porro eius temporibus asperiores similique, doloribus impedit voluptate commodi explicabo neque itaque necessitatibus laboriosam beatae.'

  },
  {
      avater: avg3,
      name: 'EZEUGWA FAVOUR',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet placeat, ad numquam exercitationem consequuntur esse porro eius temporibus asperiores similique, doloribus impedit voluptate commodi explicabo neque itaque necessitatibus laboriosam beatae.'

  },
  {
      avater: avg4,
      name: 'APUA TITIGRATIS',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet placeat, ad numquam exercitationem consequuntur esse porro eius temporibus asperiores similique, doloribus impedit voluptate commodi explicabo neque itaque necessitatibus laboriosam beatae.'

  },
  {
      avater: avg5,
      name: 'HATIM EDIDINAM',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet placeat, ad numquam exercitationem consequuntur esse porro eius temporibus asperiores similique, doloribus impedit voluptate commodi explicabo neque itaque necessitatibus laboriosam beatae.'

  },
  {
      avater: avg6,
      name: 'ESTHER UDONYAN',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet placeat, ad numquam exercitationem consequuntur esse porro eius temporibus asperiores similique, doloribus impedit voluptate commodi explicabo neque itaque necessitatibus laboriosam beatae.'

  }
  ];
const Testimonial = () => {
  return (
    <section id='Testimonials'>
      <h5>Review from colleagues</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
      { review.map(({avater, name, review}, index)=>{
        return (
          <SwiperSlide key={index} className="testimonial">
          <div className="client__avater">
            <img src={avater} alt="avater one" />
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client_review'>{review}</small>
        </SwiperSlide>
        )
       })
      }
      </Swiper>
    </section>
  )
}

export default Testimonial