import { Container, Row, Col } from "react-bootstrap";
import AppCard from "../components/Card";
import { Navigation } from "swiper/modules";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PreviewProducts from "../components/PreviewProducts";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "http://ec2-3-142-164-9.us-east-2.compute.amazonaws.com/b4/product/active"
    )
      .then((res) => res.json())
      .then((data) => {
        const numbers = [];
        const featured = [];

        const generateRandomNums = () => {
          let randomNum = Math.floor(Math.random() * data.length);

          if (numbers.indexOf(randomNum) === -1) {
            numbers.push(randomNum);
          } else {
            generateRandomNums();
          }
        };

        for (let i = 0; i < 3; i++) {
          generateRandomNums();

          featured.push(
            <SwiperSlide>
              <PreviewProducts
                data={data[numbers[i]]}
                key={data[numbers[i]]._id}
              />
            </SwiperSlide>
          );
        }
        setProducts(featured);
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
          {products}
        </Swiper>
      </Row>
    </Container>
  );
}
