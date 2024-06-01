"use client";

import { useEffect, useMemo, useState } from "react";
import type { Container, Engine, ISourceOptions } from "@tsparticles/engine";
import ParticlesComponent, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

interface ParticleProps {
  id?: string;
  backgroundColor?: string;
  color?: string | string[];
  shape?: string;
  configuration?: string;
  fullScreen?: boolean;
}

export const Particles = ({ id = "home" }: ParticleProps) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    void initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (_container?: Container): Promise<void> => {};

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: false,
      fpsLimit: 60,
      particles: {
        move: {
          bounce: false,
          direction: "none",
          enable: true,
          outModes: "out",
          random: false,
          speed: {
            min: 0.3,
            max: 2,
          },
          straight: false,
        },
        number: { density: { enable: true, area: 800 }, value: 80 },
        opacity: {
          value: {
            min: 0.3,
            max: 1,
          },
        },
        color: {
          value: ["#9A8025", "#EDE060"],
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 2, max: 5 },
        },
        shadow: {
          enable: true,
          color: "#EDE060",
          blur: 10,
        },
      },
      themes: [
        {
          name: "light",
          default: {
            value: true,
            mode: "light",
          },
          options: {
            background: {
              color: "transparent",
            },
            particles: {
              color: {
                value: ["#9A8025", "#EDE060"],
              },
            },
          },
        },
        {
          name: "dark",
          default: {
            value: true,
            mode: "dark",
          },
          options: {
            background: {
              color: "transparent",
            },
            particles: {
              color: {
                value: ["#9A8025", "#EDE060"],
              },
            },
          },
        },
      ],
    }),
    [],
  );

  if (init) {
    return (
      <ParticlesComponent
        id={id}
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};
