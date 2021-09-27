import { useTransition, animated } from "@react-spring/web";
import { RelativeWrapper } from "./StyledComponents";
import styled from "styled-components";
import { Switch, Route, useLocation } from "react-router-dom";
import About from "./About";
import Portfolio from "./Portfolio/Portfolio";

const MainContent = () => {
  const location = useLocation();
  const transition = useTransition(location, {
    from: { opacity: 0, translateX: "-100%", position: "absolute" },
    enter: { opacity: 1, translateX: "0%", position: "initial" },
    leave: { opacity: 0, translateX: "100%", position: "absolute" },
  });

  return (
    <MainWrapper>
      {transition((style, item) => {
        return (
          <animated.section style={style}>
            <Switch location={item}>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Portfolio />
              </Route>
            </Switch>
          </animated.section>
        );
      })}
    </MainWrapper>
  );
};

export default MainContent;

//This allows for transitioning between routes
const MainWrapper = styled.main`
  position: relative;
`;
