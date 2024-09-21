import { Container, Row, Col } from "react-bootstrap";
import AppCard from "../components/Card";
import { Navigation } from "swiper/modules";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "http://ec2-3-142-164-9.us-east-2.compute.amazonaws.com/b4/product/active"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setProducts(data);
      });
  }, []);
  return (
    <Container className="my-5">
      <Row className="mb-2">
        <h1 className="fw-bolder">Featured Products</h1>
      </Row>
      <Row>
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={3}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          (
          {products.map((product) => {
            return (
              <SwiperSlide key={product._id}>
                <AppCard productProp={product} />
              </SwiperSlide>
            );
          })}
          )?(<h1>No Products Found</h1>)
        </Swiper>
      </Row>
    </Container>
  );
}
