import OrangeDiv from "../../components/OrangeDiv";
import jsonData from "../../appDesignData.json";
import AppDesignCards from "../../components/AppDesignCards";
import styled from "styled-components";
import { GraphicDesignLink, WebDesignLink } from "../../components/home";

const AppDesign = () => {
  const data = {
    Title: "App Design",
    Description:
      "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
  };

  return (
    <>
      <OrangeDiv data={data} />
      <CardsDiv>
        {jsonData.map((item, index) => (
          <AppDesignCards key={index} appCardsInfo={item} />
        ))}
      </CardsDiv>
      <WebDesignLink />
      <GraphicDesignLink />
    </>
  );
};

export default AppDesign;

const CardsDiv = styled.div`
  padding: 100px 24px 0 24px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;
