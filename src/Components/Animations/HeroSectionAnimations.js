import { useSprings, animated, to, config } from "@react-spring/web";
import styled from "styled-components";

const items = [
  { top: "0%" },
  { top: "10%" },
  { top: "20%" },
  { top: "30%" },
  { top: "40%" },
  { top: "50%" },
  { top: "60%" },
  { top: "70%" },
  { top: "80%" },
  { top: "90%" },
  { top: "100%" },
];

const HeroAnimated = () => {
  const springs = useSprings(
    items.length,
    items.map((item, i) => ({
      from: { ...item, width: "100%", scaleX: 0, background: "red" },
      to: { scaleX: 5 * (i / 100), background: "green" },
      top: item.top,
      loop: { reverse: true },
      config: config.molasses,
      delay: 100 * i,
    }))
  );
  return (
    <>
      {springs.map((animation, i) => (
        <AnimatedStyledDiv key={i} style={animation} />
      ))}
    </>
  );
};

export default HeroAnimated;

const AnimatedStyledDiv = styled(animated.div)`
  height: 25px;
  transform-origin: right;
  background: grey;
  position: absolute;
  z-index: -1000;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.1);
`;
