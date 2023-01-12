import React from 'react';
import './testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import avg1 from '../../assets/avater1.jpg';
import avg2 from '../../assets/avater2.jpg';
import avg3 from '../../assets/avater3.jpg';
import avg4 from '../../assets/avater4.jpg';
import avg6 from '../../assets/avater6.jpg';
import avg5 from '../../assets/avater5.jpg';

// Import Swiper style'
import 'swiper/css';
import 'swiper/css/pagination';

const review = [
  {
    avater: avg1,
    name: 'AFOLABI AKOREDE',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet placeat, ad numquam exercitationem consequuntur esse porro eius temporibus asperiores similique, doloribus impedit voluptate commodi explicabo neque itaque necessitatibus laboriosam beatae.',
  },
  {
    avater: avg2,
    name: 'REJOICE EVANS',
    review:
      'Ambrose is a software developer any company would love to work with. I met him while working on a group project and the enthusiasm he showed was really amazing.and within a few minutes, he managed to explain a concept I\'d been struggling with for days. he has a great way of simplifying the complex.',
  },
  {
    avater: avg3,
    name: 'EZEUGWA FAVOUR',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet placeat, ad numquam exercitationem consequuntur esse porro eius temporibus asperiores similique, doloribus impedit voluptate commodi explicabo neque itaque necessitatibus laboriosam beatae.',
  },
  {
    avater: avg4,
    name: 'APUA TITIGRATIS',
    review:
      'Ambrose is a passionate developer with exceptional collaborative skills. He always offers to help with blockers thereby proffering solutions when needed. I should mention that he is very hard working and will always take up tasks. Ambrose is definitely an asset to any organization.',
  },
  {
    avater: avg5,
    name: 'KAYONGA CHITETA',
    review:
      'I worked with Ambrose he\'s one of the best people I\'ve ever worked with. his passion, drive, and enthusiasm for making and supporting free and open-source software technologies are what make him really unique. Ambrose thinks far more steps ahead of most developers. he pays so much attention to code architecture and test-driving development (TDD). these are subjects that most developers don\'t really pay so much attention to, which could later cause the life of some awfully made software to be short-lived. Ambrose is a very good team player he would fit well in any team, even teams with the most difficult people to communicate with. I\'ve learnt a lot from Ambrose in the very few times I\'ve worked with him. no one ever works with Ambrose and doesn\'t learn a thing or two from him that\'s almost impossible. Ambrose is a perfect person for a team lead because not just his programming skills are at the top level, his communication, engagement, and always wanting to help you out of difficult situations are traits of a good leader.',
  },
  {
    avater: avg6,
    name: 'ESTHER UDONYAN',
    review:
      'Ambrose is a fantastic software engineer, and his detail-oriented approach made him a pleasure to work with. We pair-programmed extensively together while enrolled in a software development program, and during that time his work ethic blew me away. Ambrose views writing clean, accessible code as a calling, and hes great at identifying areas where we can improve UI. He\'s also super friendly; by the time our project was done, I felt like we\'d known each other for years. I can\'t recommend him enough!',
  },
];
const Testimonial = () => (
  <section id="Testimonials">
    <h5>Review from colleagues</h5>
    <h2>Testimonials</h2>
    <Swiper
      className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {review.map(({
        id, avater, name, review,
      }) => (
        <SwiperSlide key={id} className="testimonial">
          <div className="client__avater">
            <img src={avater} alt="avater one" />
          </div>
          <h5 className="client__name">{name}</h5>
          <small className="client_review">{review}</small>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default Testimonial;
