import React from "react";
import Particles from "react-particles-js";
import Header from "../components/Header";
function Home() {
  return (
    <>
      <Particles
        className="particle-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 300,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 10,
                color: "f9ab00",
              },
            },
          },
        }}
      />
      <Header />
    </>
  );
}

export default Home;
