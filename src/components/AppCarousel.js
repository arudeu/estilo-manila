import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function AppCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <Image src="/CarouselImages/carousel-1.jpg" fluid />
        <Carousel.Caption>
          <h1>First slide label</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <Image src="/CarouselImages/carousel-2.jpg" fluid />
        <Carousel.Caption>
          <h1>Second slide label</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <Image src="/CarouselImages/carousel-3.jpg" fluid />
        <Carousel.Caption>
          <h1>Third slide label</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default AppCarousel;
