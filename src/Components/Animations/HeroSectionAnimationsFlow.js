import { useSprings, animated } from "@react-spring/web";
import { useState } from "react";
import styled from "styled-components";

const items = [
  { scale: 3, bottom: "0%" },
  { scale: 4, bottom: "18%" },
  { scale: 1.2, bottom: "36%" },
  { scale: 0.5, bottom: "54%" },
  { scale: 2, bottom: "72%" },
  { scale: 0.75, bottom: "0%" },
  { scale: 4.5, bottom: "18%" },
  { scale: 2, bottom: "36%" },
  { scale: 2.5, bottom: "54%" },
  { scale: 3.5, bottom: "72%" },
];

const HeroAnimated = () => {
  const [flip, set] = useState(false);
  const springs = useSprings(
    items.length,
    items.map((item, i) => ({
      from: {
        scale: 1,
        opacity: 0,
        left: "0%",
      },
      to: {
        scale: item.scale,
        opacity: (100.0 - parseFloat(item.bottom)) / 100.0,
        bottom: item.bottom,
        left: "150%",
      },
      delay: 500 * i,
      reset: true,
      reverse: flip,
      config: { tension: 250, friction: 500, bounce: 1.5 },
      onRest: () => {
        set(!flip);
      },
    }))
  );
  return (
    <>
      {springs.map((styles, i) => (
        <AnimatedDiv key={i} style={styles} />
      ))}
    </>
  );
};

export default HeroAnimated;

const AnimatedDiv = styled(animated.div)`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.theme.primary};
  border-radius: 5px;
`;
