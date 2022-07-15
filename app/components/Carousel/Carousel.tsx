
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { Container } from "../common/Container/Container";
import { SectionHeader } from "../common/SectionHeader/SectionHeader";

let slides = [
   {
    key: 11,
    content: <a href="https://erp.sabak.org/" target="__blank" className="relative group">
      <div className="absolute top-0 left-0 rounded-md w-full h-full bg-gray-900 duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-90"></div>
      <img className="h-[210px] sm:h-[240px] md:h-[350px]" src="/images/works/work1.png" alt="1" style={{borderRadius:"10px",boxShadow:"0 0px 10px 3px #564f7f"}} />
    </a>
  },
   {
    key: 33,
    content: <a href="https://navaa.co/" target="__blank" className="relative group">
            <div className="absolute top-0 left-0 rounded-md w-full h-full bg-gray-900 duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-90"></div>
      <img className="h-[210px] sm:h-[240px] md:h-[350px]" src="/images/works/work3.png" alt="2" style={{borderRadius:"10px",boxShadow:"0 0px 10px 3px #564f7f"}}/>
    </a> 
  },
  
  {
    key: 22,
    content: <a href="https://zeemind.ir/" target="__blank" className="relative group">
            <div className="absolute top-0 left-0 rounded-md w-full h-full bg-gray-900 duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-90"></div>
      <img className="h-[210px] sm:h-[240px] md:h-[350px]"src="/images/works/work2.png" alt="2" style={{borderRadius:"10px",boxShadow:"0 0px 10px 3px #564f7f"}}/>
    </a> 
  },



];
function TdCarousel() {
     return (
        <div id="projects">
          <Container>
              <SectionHeader title="Projects" caption="Some of my projects"/>
              <div className="px-4 md:px-16 threeD-carousel-button" style={{ height: "400px", margin: "0 auto" }} >
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



