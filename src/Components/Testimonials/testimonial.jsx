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
      'I had the pleasure of working with Ambrose Isigba on a team project and I can confidently say that he is an asset to any team. He is a highly skilled full-stack web developer. He is not only technically sound but also has excellent project management skills. He was able to understand the project requirements clearly and was able to deliver the work on time. Ambrose is a great team player and a great communicator. He is always willing to help and share his knowledge with others. His attention to detail, problem-solving skills, and debugging skills are truly outstanding. I highly recommend Ambrose for any web development project. He is a dedicated professional who is always eager to learn and improve. He would be an asset to any team and I am confident that he will be a great addition to any organization.',
  },
  {
    avater: avg2,
    name: 'REJOICE EVANS',
    review:
      'Working with Ambrose Isigba on a team project has really change way of handling conflict, and I was impressed with his ability to handle conflicts and find effective solutions. He\'s a great team player, he always puts the team\'s interest first, he is a great communicator, and is able to work together seamlessly with other team members. He is always willing to help and share his knowledge with others. What sets him apart is his ability to resolve conflicts. He is able to see different perspectives, understand everyone\'s concerns, and find a solution that is beneficial for all parties involved. He is able to keep everyone calm, focused and motivated during difficult situations. I highly recommend Ambrose for any web development project. He is a dedicated professional who is always eager to learn and improve. He would be an asset to any team and I am confident that he will be a great addition to any organization.',
  },
  {
    avater: avg3,
    name: 'EZEUGWA FAVOUR',
    review:
      'I highly recommend Ambrose Isigba as a full-stack web developer. I had the pleasure of working with him on several projects and he consistently impressed me with his technical skills and ability to deliver high-quality work on time. Ambrose is a highly motivated and dedicated individual who is always eager to learn and improve. He is very proficient in JavaScript, Ruby, React, and Ruby on Rails. He also has strong problem-solving and debugging skills. He is a great team player and a great communicator. He is always willing to help and share his knowledge with others. I believe he would be an asset to any team.',
  },
  {
    avater: avg4,
    name: 'APUA TITIGRATIS',
    review:
      'Ambrose is a passionate developer with exceptional collaborative skills, I can confidently say that he is a reliable and punctual team member. He is a developer He was able to understand the project requirements clearly, deliver the work on time. He is a great team player and a great communicator. He always goes the extra mile to ensure that the team is on the same page and is able to work together seamlessly. His attention to detail, problem-solving skills, and debugging skills are truly outstanding. What sets him apart is his punctuality. He always meets his deadlines and is able to work efficiently under pressure. He is able to manage his time effectively and is always willing to put in extra effort to meet the project requirements. I highly recommend Ambrose for any web development project. He is a dedicated professional who is always eager to learn and improve.',
  },
  {
    avater: avg5,
    name: 'KAYONGA CHITETA',
    review:
      'I worked with Ambrose he\'s one of the best people I\'ve ever worked with. his passion, drive, and enthusiasm for making and supporting free and open-source software technologies are what make him really unique. he pays so much attention to code architecture and test-driving development (TDD). Ambrose is a very good team player he would fit well in any team, even teams with the most difficult people to communicate with. I\'ve learnt a lot from Ambrose in the very few times I\'ve worked with him. no one ever works with Ambrose and doesn\'t learn a thing or two from him that\'s almost impossible.  His communication, engagement, and always wanting to help you out of difficult situations are traits of a good leader.',
  },
  {
    avater: avg6,
    name: 'ESTHER UDONYAN',
    review:
      'Working with Ambrose Isigba was a great learning experience for me, we work on a team project and I can proudly say that he is a coachable and dedicated individual. He is a great team player and a great communicator. He always goes the extra mile to ensure that the team is on the same page and is able to work together seamlessly. What sets him apart is his ability to take feedback and coaching. He is open to new ideas and willing to learn and improve. He is always looking for ways to grow and develop his skills. He is a valuable team member who is willing to put in the extra effort to achieve success. I highly recommend Ambrose for any web evelopment project. He is a dedicated professional who is always eager to learn and improve. He would be an asset to any team.',
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
