import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Banner = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/About");
  };

  return (
    <Main>
      <MainTitle>
        Award-winning custom designs and digital branding solutions
      </MainTitle>
      <Description>
        With over 10 years in the industry, we are experienced in creating fully
        responsive websites, app design, and engaging brand experiences. Find
        out more about our services.
      </Description>
      <Button onClick={handleButtonClick}>learn more</Button>
      <PhoneImage src="./src/assets/mobile/home page - mobile img.png" />
    </Main>
  );
};

export default Banner;

const Main = styled.div`
  width: 100%;
  padding: 80px 24px 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e7816b;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-image: url("./src/assets/mobile/home page - background circle image.png");
  background-repeat: no-repeat;
  background-size: 100%;
`;

const MainTitle = styled.p`
  width: 327px;
  color: #fff;
  text-align: center;
  font-size: 32px;
  font-weight: 500;
  line-height: 36px;
`;

const Description = styled.p`
  width: 327px;
  color: #fff;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  margin-top: 25px;
`;

const Button = styled.button`
  padding: 18px 25px 16px 24px;
  border-radius: 8px;
  background: #fff;
  color: #333136;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 24px;
  border: none;
`;

const PhoneImage = styled.img`
  width: 284px;
  margin-top: 80px;
`;
