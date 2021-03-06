import { Content, Heading, PortfolioBlock } from "../StyledComponents";
import styled from "styled-components";
import { ReactComponent as JavascriptLogo } from "../Logos/TechStack/Javascript.svg";
import { ReactComponent as ReactLogo } from "../Logos/TechStack/React.svg";
import { ReactComponent as NodejsLogo } from "../Logos/TechStack/Node.js.svg";
import { ReactComponent as MongoDBLogo } from "../Logos/TechStack/MongoDB.svg";
import { ReactComponent as HTMLLogo } from "../Logos/TechStack/HTML.svg";
import { ReactComponent as CSSLogo } from "../Logos/TechStack/CSS.svg";
import { ReactComponent as PythonLogo } from "../Logos/TechStack/Python.svg";
import { ReactComponent as GithubLogo } from "../Logos/TechStack/Github(Stack).svg";

const TechnologyStack = () => {
  return (
    <PortfolioBlock fadedBG>
      <Heading>Technology Stack</Heading>
      <TechStackIcons>
        <ReactLogo />
        <NodejsLogo />
        <MongoDBLogo />
        <JavascriptLogo />
        <HTMLLogo />
        <CSSLogo />
        <PythonLogo />
        <GithubLogo />
      </TechStackIcons>
    </PortfolioBlock>
  );
};

export default TechnologyStack;

const TechStackIcons = styled(Content)`
  align-items: center;
  gap: 1.5em;
  margin: 1em auto;
`;
