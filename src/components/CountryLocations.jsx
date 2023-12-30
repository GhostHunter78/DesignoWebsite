import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CountryLocations = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Locations");
  };

  return (
    <>
      <Main>
        <img src="/canadaImg.png" />
        <CountryAndButton>
          <Country>canada</Country>
          <Button onClick={handleClick}>see location</Button>
        </CountryAndButton>
        <img src="/australiaImg.png" />
        <CountryAndButton>
          <Country>australia</Country>
          <Button onClick={handleClick}>see location</Button>
        </CountryAndButton>
        <img src="/unitedkingdomImg.png" />
        <CountryAndButton>
          <Country>united kingdom</Country>
          <Button onClick={handleClick}>see location</Button>
        </CountryAndButton>
      </Main>
    </>
  );
};

export default CountryLocations;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 87px 0 87px;
  background: #fff;
  gap: 48px;
`;

const Country = styled.h3`
  width: 350px;
  color: #333136;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 5px;
  text-transform: uppercase;
`;

const Button = styled.button`
  width: 162px;
  border-radius: 8px;
  background: #e7816b;
  color: #fff;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 18px 18.5px 16px 18.5px;
  border: none;
`;

const CountryAndButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;
