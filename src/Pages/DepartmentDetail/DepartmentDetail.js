import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useAuth from "../../context/useAuth";

const DepartmentDetail = () => {
  const [service, setService] = useState([]);
  const [otherService, setOtherService] = useState([]);
  const { department } = useAuth();
  const { id } = useParams();
  useEffect(() => {
    const thisService = department.filter((d) => d.id == id);
    const thisOtherService = department.filter((d) => d.id != id);
    setService(thisService);
    setOtherService(thisOtherService);
  }, []);
  return (
    <Container>
      <div className="w-50 text-center mx-auto my-5">
        <div>
          <img src={service[0]?.img} alt="" />
        </div>
        <div>
          <h3>{service[0]?.title}</h3>
          <p>{service[0]?.des}</p>
          <br />
        </div>
      </div>
      <h2>Other Departments</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
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
        {otherService?.length > 1 &&
          otherService.map((s) => {
            const url = `/service/${s.id}`;
            return (
              <SwiperSlide className="mb-5 card-box">
                <Link to={url}>
                  <Card className="card">
                    <Card.Img variant="top" src={s.img} />
                    <Card.Body>
                      <Card.Title>{s.title}</Card.Title>
                      <Card.Text>{s.des.slice(0, 80)}..</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </Container>
  );
};

export default DepartmentDetail;
