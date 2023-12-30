import OrangeDiv from "../../components/OrangeDiv";
import GraphicDesignCards from "../../components/graphicDesignCards";
import { AppDesignLink, WebDesignLink } from "../../components/home";
import jsonData from "../../graphicData.json";
import styled from "styled-components";

const GraphicDesign = () => {
  const data = {
    Title: "Graphic Design",
    Description:
      "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
  };

  return (
    <>
      <OrangeDiv data={data} />
      <CardsDiv>
        {jsonData.map((item, index) => (
          <GraphicDesignCards key={index} graphicCardsInfo={item} />
        ))}
      </CardsDiv>
      <WebDesignLink />
      <AppDesignLink />
    </>
  );
};

export default GraphicDesign;

const CardsDiv = styled.div`
  padding: 100px 24px 0 24px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;
