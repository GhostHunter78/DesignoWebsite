import styled from "styled-components";
import OrangeDiv from "../../components/OrangeDiv";
import jsonData from "../../data.json";
import { AppDesignLink, GraphicDesignLink } from "../../components/home";
import WebDesignCards from "../../components/WebDesignCards";

const WebDesign = () => {
  const data = {
    Title: "Web Design",
    Description:
      "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
  };

  return (
    <>
      <OrangeDiv data={data} />
      <CardsDiv>
        {jsonData.map((item, index) => (
          <WebDesignCards key={index} cardInfo={item} />
        ))}
      </CardsDiv>
      <AppDesignLink />
      <GraphicDesignLink />
    </>
  );
};

export default WebDesign;

const CardsDiv = styled.div`
  padding: 100px 24px 0 24px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;
