import { useSprings, animated, config } from "@react-spring/web";
import { circle, parallelogram, square } from "./AnimationElements/svgData";
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
      to: [
        {
          opacity: (100.0 - parseFloat(item.bottom)) / 100.0,
          bottom: item.bottom,
        },
        { opacity: 0 },
      ],
      delay: 500 * i,
      config: { friction: 10, bounce: 1 },
    }))
  );
  return (
    <>
      {springs.map((styles, index) => (
        <AnimatedDiv style={styles} />
      ))}
    </>
  );
};

export default HeroAnimated;

const AnimatedSVG = styled(animated.svg)`
  position: absolute;

  /* <AnimatedSVG
          style={{...styles}}
          viewBox={square.viewBox}
          width={square.width}
          height={square.height}
        >
          <rect
            width={square.width}
            height={square.height}
            rx={square.rx}
            fill="#4280DD"
          />
        </AnimatedSVG> */
`;

const AnimatedDiv = styled(animated.div)`
  position: absolute;
  width: 12%;
  height: 50px;
  background-color: ${(props) => props.theme.primary};
  border-radius: 5px;
`;
