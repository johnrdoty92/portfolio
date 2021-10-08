import { useSprings, animated } from "@react-spring/web";
import styled from "styled-components";

const items = [
  { left: "0%", scale: 2 },
  { right: "0%", scale: 1.8 },
  { left: "10%", scale: 2.7 },
  { right: "10%", scale: 1.5 },
  { left: "20%", scale: 1 },
  { right: "20%", scale: 0.9 },
  { left: "30%", scale: 0.7 },
  { right: "30%", scale: 0.6 },
  { left: "40%", scale: 0.4 },
  { right: "40%", scale: 0.6 },
];

const HeroAnimated = () => {
  const springs = useSprings(
    items.length,
    items.map((item, i) => ({
      from: {
        transformOrigin: "bottom",
        scale: item.scale,
        left: item.left,
        right: item.right,
        opacity: 0.7,
        bottom: "120%",
      },
      to: {
        opacity: 0,
        bottom: "0%",
      },
      delay: 1250 * i,
      loop: true,
      config: { tension: 250, friction: 600 },
    }))
  );
  return (
    <>
      {springs.map((styles, i) => (
        <AnimatedDiv
          key={i}
          style={styles}
          onClick={(e) => {
            e.stopPropagation();
            console.log("click!");
          }}
        />
      ))}
    </>
  );
};

export default HeroAnimated;

const AnimatedDiv = styled(animated.div)`
  position: absolute;
  width: 10vw;
  height: 10vw;
  background-color: ${(props) => props.theme.primary};
  border-radius: 5px;
`;
