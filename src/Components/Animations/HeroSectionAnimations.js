import { useSprings, animated } from "@react-spring/web";
import { useState } from "react";
import styled from "styled-components";

const items = [
  { left: "4%", bottom: "0%" },
  { left: "5%", bottom: "18%" },
  { left: "4%", bottom: "36%" },
  { left: "6%", bottom: "54%" },
  { left: "5%", bottom: "72%" },
  { right: "5%", bottom: "0%" },
  { right: "4%", bottom: "18%" },
  { right: "6%", bottom: "36%" },
  { right: "5%", bottom: "54%" },
  { right: "4%", bottom: "72%" },
];

const HeroAnimated = () => {
  const [flip, set] = useState(false);
  const springs = useSprings(
    items.length,
    items.map((item, i) => ({
      from: {
        scaleX: 1,
        opacity: 0,
        bottom: "120%",
        left: item.left,
        right: item.right,
      },
      to: {
        opacity: (100.0 - parseFloat(item.bottom)) / 100.0,
        bottom: item.bottom,
      },
      delay: 500 * i,
      reset: true,
      reverse: flip,
      config: { tension: 250, friction: 15, bounce: 1.5 },
      onRest: () => {
        setTimeout(() => {
          set(!flip);
        }, 2250);
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
  width: 12%;
  height: 50px;
  background-color: ${(props) => props.theme.primary};
  border-radius: 5px;
`;
