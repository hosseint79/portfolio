
import Carousel from "react-spring-3d-carousel";

import { config } from "react-spring";
import { Container } from "../common/Container/Container";
import { SectionHeader } from "../common/SectionHeader/SectionHeader";

let slides = [
  {
    key: 11,
    content: <img src="https://picsum.photos/800/801/?random" alt="1" style={{width:"500px",height:"500px"}} />
  },
  {
    key: 22,
    content: <img src="https://picsum.photos/800/802/?random" alt="2" style={{width:"500px",height:"500px"}}/>
  },
  {
    key: 33,
    content: <img src="https://picsum.photos/600/803/?random" alt="3" style={{width:"500px",height:"500px"}}/>
  },


];
function TdCarousel() {
     return (
        
        <Container>
            <SectionHeader title="Projects" caption="Some of my projects"/>
            <div className="px-16 threeD-carousel-button" style={{ height: "400px", margin: "0 auto" }} >
                <Carousel
                    slides={slides}
                    goToSlide={1}
                    offsetRadius={2}
                    showNavigation={true}
                    animationConfig={config.gentle}
                />          
            </div>
        </Container>

    ); 
}

export default TdCarousel;

