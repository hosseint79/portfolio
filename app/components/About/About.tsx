import { Link } from "@remix-run/react";
import { BsMouse } from "react-icons/bs";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const About = () => {
  const particlesInit = async (main: any) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    // window.scrollTo({
    //   left: 0,
    //   top: 0,
    //   behavior: "smooth",
    // });
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-black to-[#0A192F] relative   flex">
      <Particles
        style={{ position: "absolute" }}
        id="tsparticles"
        init={particlesInit}
        options={{
          autoPlay: true,

          fullScreen: {
            enable: false,
            zIndex: 0,
          },

          detectRetina: true,
          duration: 0,
          fpsLimit: 120,
          interactivity: {
            detectsOn: "window",
            events: {
              onClick: {
                enable: true,
                mode: "repulse",
              },

              onHover: {
                enable: true,
                mode: "connect",
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10,
                },
              },
              resize: true,
            },
            modes: {
              attract: {
                distance: 200,
                duration: 0.4,

                factor: 1,
                maxSpeed: 50,
                speed: 1,
              },
              bounce: {
                distance: 200,
              },
              bubble: {
                distance: 250,
                duration: 2,
                mix: false,
                opacity: 0,
                size: 0,
                divs: {
                  distance: 200,
                  duration: 0.4,
                  mix: false,
                  selectors: [],
                },
              },
              connect: {
                distance: 80,
                links: {
                  opacity: 0.5,
                },
                radius: 60,
              },
              grab: {
                distance: 400,
                links: {
                  blink: false,
                  consent: false,
                  opacity: 1,
                },
              },
              light: {
                area: {
                  gradient: {
                    start: {
                      value: "#ffffff",
                    },
                    stop: {
                      value: "#000000",
                    },
                  },
                  radius: 1000,
                },
                shadow: {
                  color: {
                    value: "#000000",
                  },
                  length: 2000,
                },
              },
              push: {
                default: true,
                groups: [],
                quantity: 4,
              },
              remove: {
                quantity: 2,
              },
              repulse: {
                distance: 400,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
              },
              slow: {
                factor: 3,
                radius: 200,
              },
              trail: {
                delay: 1,
                pauseOnStop: false,
                quantity: 1,
              },
            },
          },
          manualParticles: [],
          motion: {
            disable: false,
            reduce: {
              factor: 4,
              value: true,
            },
          },
          particles: {
            bounce: {
              horizontal: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              vertical: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
            },
            collisions: {
              bounce: {
                horizontal: {
                  random: {
                    enable: false,
                    minimumValue: 0.1,
                  },
                  value: 1,
                },
                vertical: {
                  random: {
                    enable: false,
                    minimumValue: 0.1,
                  },
                  value: 1,
                },
              },
              enable: false,
              mode: "bounce",
              overlap: {
                enable: true,
                retries: 0,
              },
            },
            color: {
              value: "#ffffff",
              animation: {
                h: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  sync: true,
                },
                s: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  sync: true,
                },
                l: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  sync: true,
                },
              },
            },
            destroy: {
              split: {
                count: 1,
                factor: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 3,
                },
                rate: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: {
                    min: 4,
                    max: 9,
                  },
                },
                sizeOffset: true,
              },
            },
            gradient: [],
            groups: {},
            life: {
              count: 0,
              delay: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
                sync: false,
              },
              duration: {
                random: {
                  enable: false,
                  minimumValue: 0.0001,
                },
                value: 0,
                sync: false,
              },
            },
            links: {
              blink: false,
              color: {
                value: "#ffffff",
              },
              consent: false,
              distance: 150,
              enable: false,
              frequency: 1,
              opacity: 0.4,
              shadow: {
                blur: 5,
                color: {
                  value: "#000",
                },
                enable: false,
              },
              triangles: {
                enable: false,
                frequency: 1,
              },
              width: 1,
              warp: false,
            },
            move: {
              angle: {
                offset: 0,
                value: 90,
              },
              attract: {
                distance: 200,
                enable: false,
                rotate: {
                  x: 600,
                  y: 600,
                },
              },
              center: {
                x: 50,
                y: 50,
                radius: 0,
              },
              decay: 0,
              distance: {},
              direction: "none",
              drift: 0,
              enable: true,
              gravity: {
                acceleration: 9.81,
                enable: false,
                inverse: false,
                maxSpeed: 50,
              },
              path: {
                clamp: true,
                delay: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 0,
                },
                enable: false,
                options: {},
              },
              outModes: {
                default: "out",
                bottom: "out",
                left: "out",
                right: "out",
                top: "out",
              },
              random: true,
              size: false,
              speed: 1,
              spin: {
                acceleration: 0,
                enable: false,
              },
              straight: false,
              trail: {
                enable: false,
                length: 10,
                fillColor: {
                  value: "#000000",
                },
              },
              vibrate: false,
              warp: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
                factor: 1000,
              },
              limit: 0,
              value: 160,
            },
            opacity: {
              random: {
                enable: true,
                minimumValue: 0.1,
              },
              value: {
                min: 0,
                max: 1,
              },
              animation: {
                count: 0,
                enable: true,
                speed: 1,
                sync: false,
                destroy: "none",
                startValue: "random",
                minimumValue: 0,
              },
            },
            orbit: {
              animation: {
                count: 0,
                enable: false,
                speed: 1,
                sync: false,
              },
              enable: false,
              opacity: 1,
              rotation: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 45,
              },
              width: 1,
            },
            reduceDuplicates: false,
            repulse: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
              enabled: false,
              distance: 1,
              duration: 1,
              factor: 1,
              speed: 1,
            },
            roll: {
              darken: {
                enable: false,
                value: 0,
              },
              enable: false,
              enlighten: {
                enable: false,
                value: 0,
              },
              mode: "vertical",
              speed: 25,
            },
            rotate: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
              animation: {
                enable: false,
                speed: 0,
                sync: false,
              },
              direction: "clockwise",
              path: false,
            },
            shadow: {
              blur: 0,
              color: {
                value: "#000",
              },
              enable: false,
              offset: {
                x: 0,
                y: 0,
              },
            },
            shape: {
              options: {},
              type: "circle",
            },
            size: {
              random: {
                enable: true,
                minimumValue: 1,
              },
              value: {
                min: 1,
                max: 3,
              },
              animation: {
                count: 0,
                enable: false,
                speed: 4,
                sync: false,
                destroy: "none",
                startValue: "random",
                minimumValue: 0.3,
              },
            },
            stroke: {
              width: 0,
            },
            tilt: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
              animation: {
                enable: false,
                speed: 0,
                sync: false,
              },
              direction: "clockwise",
              enable: false,
            },
            twinkle: {
              lines: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
              },
              particles: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
              },
            },
            wobble: {
              distance: 5,
              enable: false,
              speed: 50,
            },
          },
          pauseOnBlur: true,
          pauseOnOutsideViewport: true,
          responsive: [],
          style: {},
          themes: [],
        }}
      />

      <div className=" p-8 w-4/6 z-10 flex justify-end items-center  ">
        <main className="w-3/4 relative">
          <div
            style={{ fontFamily: "monospace", fontStyle: "italic" }}
            className="z-10 relative border-2 border-solid  border-white backdrop-blur-[6px] text-white text-xl py-14 px-11"
          >
            I'm a front-end developer located in iran. I love to create simple
            yet beautiful websites with great user experience.
            <br /> <br />
            I'm interested in the whole frontend stack Like trying new things
            and building great projects. I'm an independent freelancer and
            blogger. I love to write blogs and read books.
            <br /> <br />I believe everything is an Art when you put your
            consciousness in it. You can connect with me via social links.
          </div>

          <h1
            className=" text-9xl z-0 absolute font-semibold -top-20 -left-16"
            style={{
              fontFamily: "sans-serif",
              fontSize: "calc(5rem + 5vw)",
              color: "rgba(252,246,244,0.1)",
            }}
          >
            ABOUT
          </h1>
        </main>
      </div>
      <div className=" w-2/6  flex justify-center items-center z-10 ">
        <img
          className=" w-64 h-auto animate-wiggle mb-36"
          src="/images/spaceman.png"
        />
      </div>

      <a
        href="#footer"
        className="flex items-center h-auto absolute  z-50 -right-12 bottom-28 p-4 rotate-90 text-white"
      >
        <span className="h-[3px] w-6 border border-white mx-3"> </span>
        <h6>SCROLL DOWN</h6>
        <BsMouse className="ml-2 rotate-90" />
        <span className="h-[3px] w-6 border border-white mx-3"> </span>
      </a>
    </div>
  );
};
export { About };
