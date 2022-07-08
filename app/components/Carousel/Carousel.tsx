
import Carousel from "react-spring-3d-carousel";

import { config } from "react-spring";
import { Container } from "../common/Container/Container";
import { SectionHeader } from "../common/SectionHeader/SectionHeader";
import { ActionFunction, redirect } from "@remix-run/node";

let slides = [
   {
    key: 11,
    content: <a href="https://erp.sabak.org/" target="__blank">
      <img src="/images/works/work1.png" alt="1" style={{height:"350px",borderRadius:"10px",boxShadow:"0 0px 10px 3px #564f7f"}} />
    </a>
  },
   {
    key: 33,
    content: <a href="https://navaa.co/" target="__blank">
      <img src="/images/works/work3.png" alt="2" style={{height:"350px",borderRadius:"10px",boxShadow:"0 0px 10px 3px #564f7f"}}/>
    </a> 
  },
  
  {
    key: 22,
    content: <a href="https://zeemind.ir/" target="__blank">
      <img src="/images/works/work2.png" alt="2" style={{height:"350px",borderRadius:"10px",boxShadow:"0 0px 10px 3px #564f7f"}}/>
    </a> 
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



