import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { Container } from "../common/Container/Container";
import { SectionHeader } from "../common/SectionHeader/SectionHeader";
import { slides } from "./Carousel.data";


function TdCarousel() {
  return (
    <div id="projects">
      <Container>
        <SectionHeader title="Projects" caption="Some of my projects" />
        <div
          className="px-4 md:px-16 threeD-carousel-button"
          style={{ height: "400px", margin: "0 auto" }}
        >
          <Carousel
            slides={slides}
            goToSlide={1}
            offsetRadius={2}
            showNavigation={true}
            animationConfig={config.gentle}
          />
        </div>
      </Container>
    </div>
  );
}

export default TdCarousel;
