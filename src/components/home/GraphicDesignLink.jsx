import styled from "styled-components";
import { RightArrowIcon } from "../../SVGs";
import { useNavigate } from "react-router-dom";

const GraphicDesignLink = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/GraphicDesign");
  };

  return (
    <Main onClick={handleClick}>
      <GraphicDesignDiv>
        <DesignTitle>graphic design</DesignTitle>
        <LinksDiv>
          <ViewProjects>view projects</ViewProjects>
          <RightArrowIcon />
        </LinksDiv>
      </GraphicDesignDiv>
    </Main>
  );
};

export default GraphicDesignLink;

const Main = styled.div`
  background: #fff;
  padding: 24px 24px 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GraphicDesignDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 327px;
  padding: 91px 36px;
  border-radius: 15px;
  background-image: url("/homePage-graphicDesignImg.png");
  background-size: 100%;
  background-repeat: no-repeat;
`;

const DesignTitle = styled.p`
  color: #fff;
  text-align: center;
  font-size: 28px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`;

const LinksDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 2px;
`;

const ViewProjects = styled.p`
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 5px;
  text-transform: uppercase;
`;
