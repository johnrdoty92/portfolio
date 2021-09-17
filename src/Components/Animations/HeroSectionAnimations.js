import { useSpring, animated, to } from "@react-spring/web";
import styled from "styled-components";

const HeroAnimated = () => {
  const style = useSpring({
    loop: { reverse: true },
    from: { top: "0%", background: "red" },
    top: "100%",
    background: "green",
  });
  return <AnimatedStyledDiv width="50%" style={style}></AnimatedStyledDiv>;
};

export default HeroAnimated;

const AnimatedStyledDiv = styled(animated.div)`
  width: ${props => props.width};
  height: 50px;
  background: green;
  position: absolute;
  z-index: -1000;
`;
