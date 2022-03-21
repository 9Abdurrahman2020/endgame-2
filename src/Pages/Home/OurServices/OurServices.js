import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import useAuth from "../../../context/useAuth";

const OurServices = () => {
  const { services } = useAuth();
  return (
    <Container className="my-5">
      <div className="text-center">
        <h1>OUR SERVICES</h1>
        <hr style={{ height: "2px" }} className="ourdoctors-horizental-line" />
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {services?.length > 1 &&
            services.map((s) => {
              const url = `/service/${s.id}`;
              return (
                <SwiperSlide className="mb-5 card-box">
                  <Link to={url}>
                    <Card className="card">
                      <Card.Img variant="top" src={s.img} />
                      <Card.Body>
                        <Card.Title>{s.title}</Card.Title>
                        <Card.Text>{s.des[0].slice(0, 80)}..</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </Container>
  );
};

export default OurServices;
