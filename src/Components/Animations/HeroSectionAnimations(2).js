import { useSprings, animated, config } from "@react-spring/web";
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
      from: { background: "red" },
      to: { background: "green" },
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
  width: 25px;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  z-index: -1000;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.1);
`;
