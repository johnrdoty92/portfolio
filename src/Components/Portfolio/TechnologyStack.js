import styled from "styled-components";
import { Wrapper, Heading, EdgeToEdge } from "../StyledComponents";
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
    <EdgeToEdge>
      <Heading>Technology Stack</Heading>
      <TechStackWrapper>
        <ReactLogo />
        <NodejsLogo />
        <MongoDBLogo />
        <JavascriptLogo />
        <HTMLLogo />
        <CSSLogo />
        <PythonLogo />
        <GithubLogo />
      </TechStackWrapper>
    </EdgeToEdge>
  );
};

export default TechnologyStack;

const TechStackWrapper = styled(Wrapper)`
flex-flow: row wrap;
padding: 0 3em;
svg {
    margin-bottom: -2em;
}
`;

