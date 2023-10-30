import "./Testimonial.css";

import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";

import { testimonialData } from "./TestimonialData/TestimonialData";
import DesignCard from "./DesignCard/DesignCard";

const Testimonial = () => {
  return (
    <section className="container">
      <div className="testimonials_container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4500,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <DesignCard
              color={testimonialData[0].color}
              quoteText={testimonialData[0].quoteText}
              quoteAuthor={testimonialData[0].quoteAuthor}
              authorTitle={testimonialData[0].authorTitle}
            />
          </SwiperSlide>
          <SwiperSlide>
            <DesignCard
              color={testimonialData[1].color}
              quoteText={testimonialData[1].quoteText}
              quoteAuthor={testimonialData[1].quoteAuthor}
              authorTitle={testimonialData[1].authorTitle}
            />
          </SwiperSlide>
          <SwiperSlide>
            <DesignCard
              color={testimonialData[2].color}
              quoteText={testimonialData[2].quoteText}
              quoteAuthor={testimonialData[2].quoteAuthor}
              authorTitle={testimonialData[2].authorTitle}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
