import styled from "styled-components";
import { Facebook, Instagram, Pinterest, Twitter, Youtube } from "../SVGs";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/Contact");
  };

  const handleCompanyClick = () => {
    navigate("/About");
  };

  const handleContactClick = () => {
    navigate("/Contact");
  };

  const handleLocationsClick = () => {
    navigate("/Locations");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <Main>
      <OrangeDiv>
        <Title>Let’s talk about your project</Title>
        <Description>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </Description>
        <Button onClick={handleButtonClick}>get in touch</Button>
      </OrangeDiv>
      <BlackDiv>
        <img src="/logoLight.png" onClick={handleLogoClick} />
        <GrayLine></GrayLine>
        <NavList>
          <ListItems onClick={handleCompanyClick}>OUR COMPANY</ListItems>
          <ListItems onClick={handleLocationsClick}>LOCATIONS</ListItems>
          <ListItems onClick={handleContactClick}>CONTACT</ListItems>
        </NavList>
        <LocationInfoDiv>
          <CentralOffice>Designo Central Office</CentralOffice>
          <Adress>
            3886 Wellington Street <br />
            Toronto, Ontario M9C 3J5
          </Adress>
        </LocationInfoDiv>
        <LocationInfoDiv>
          <CentralOffice>Contact Us (Central Office)</CentralOffice>
          <Adress>
            P : +1 253-863-8967 <br /> M : contact@designo.co
          </Adress>
        </LocationInfoDiv>
        <IconsDiv>
          <Facebook />
          <Youtube />
          <Twitter />
          <Pinterest />
          <Instagram />
        </IconsDiv>
      </BlackDiv>
    </Main>
  );
};

export default Footer;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const OrangeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 327px;
  border-radius: 15px;
  background: #e7816b;
  padding: 64px 24px;
  background-image: url("/homePage-threeCirclesForFooter.png");
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;
  z-index: 10;
  top: 120px;
`;

const Title = styled.h3`
  color: #fff;
  text-align: center;
  font-size: 32px;
  font-weight: 500;
  line-height: 36px;
`;

const Description = styled.p`
  width: 279px;
  color: #fff;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  line-height: 25px;
  margin-top: 25px;
`;

const Button = styled.button`
  width: 169px;
  border-radius: 8px;
  background: #fff;
  padding: 17px 19px;
  color: #333136;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 32px;
  border: none;
`;

const BlackDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #1d1c1e;
  padding-top: 253px;
  padding-bottom: 64px;
  margin-top: 311px;
  position: relative;
`;

const GrayLine = styled.div`
  width: 327px;
  height: 1px;
  opacity: 0.1;
  background: #fff;
  margin-top: 32px;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  gap: 32px;
  text-transform: uppercase;
`;

const ListItems = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 2px;
`;

const LocationInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const CentralOffice = styled.p`
  color: #8d8787;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
`;

const Adress = styled(CentralOffice)`
  font-weight: 400;
`;

const IconsDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
`;
