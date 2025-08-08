import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Particles from "../particles/particles.json";

const ParticleBackground=()=> {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={Particles}
    />
  );
}


export default ParticleBackground;
