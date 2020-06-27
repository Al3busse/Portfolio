import React, { Component } from "react";
import "../styles/particleBG.css";
import Particles from "react-particles-js";

/*var bg = require("../svg/bg5.jpg"); */
export class ParticleBGBH extends Component {
  render() {
    return (
      <div>
        <Particles
          id='particleBG'
          params={{
            background: {
              color: { value: "#111" },
              image: "",
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover",
              width: "100%",
              height: "100%",
            },

            detectRetina: true,
            fpsLimit: 60,

            particles: {
              collisions: {
                enable: false,
                mode: "bounce",
              },
              color: {
                value: "random",
                animation: {
                  enable: false,
                  speed: 1,
                  sync: true,
                },
              },
              links: {
                enable: false,
              },
              move: {
                attract: {
                  enable: false,
                  rotate: {
                    x: 600,
                    y: 1200,
                  },
                },
                outMode: "destroy",

                straight: true,
                direction: "down",
                enable: true,
                trail: {
                  enable: true,
                  length: 25,
                },
                noise: {
                  delay: {
                    random: {
                      enable: false,
                      minimumValue: 0,
                    },
                    value: 0,
                  },
                  enable: false,
                  factor: {
                    horizontal: {
                      value: 50,
                      offset: 0,
                    },
                    vertical: {
                      value: 10,
                      offset: 40000,
                    },
                  },
                },
              },
              number: {
                value: 0,
              },
              opacity: {
                animation: {
                  enable: false,
                  minimumValue: 1,
                  speed: 1,
                  sync: false,
                },
                random: {
                  enable: false,
                  minimumValue: 1,
                },
                value: 12,
              },
              rotate: {
                animation: {
                  enable: false,
                  speed: 0,
                  sync: false,
                },
                direction: "clockwise",
                random: false,
                value: 0,
              },
              shadow: {
                blur: 5,
                color: {
                  value: "#111",
                },
                enable: true,
                offset: {
                  x: 0,
                  y: 0,
                },
              },
              shape: {
                options: {
                  char: {
                    fill: true,
                    close: true,
                    font: "Anite",
                    style: "",
                    value: ["*"],
                    weight: "400",
                  },
                },
                type: "char",
              },
              size: {
                animation: {
                  destroy: "min",
                  enable: true,
                  minimumValue: 0.3,
                  speed: 3,
                  startValue: 10,
                  sync: true,
                },
                random: {
                  enable: true,
                  minimumValue: 17,
                },
                value: 10,
              },
              stroke: {
                color: {
                  value: "#00FF41",
                },
                width: 1.1,
                opacity: 1,
              },
            },
            pauseOnBlur: true,

            emitters: {
              direction: "bottom",
              life: {},
              rate: {
                quantity: 2,
                delay: 0.1,
              },
              size: {
                mode: "percent",
                height: 0,
                width: 100,
              },
              position: {
                x: 50,
                y: 0,
              },
            },
          }}
        />
      </div>
    );
  }
}

export default ParticleBGBH;