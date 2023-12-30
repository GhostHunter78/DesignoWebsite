import styled from "styled-components";

const Locations = () => {
  return (
    <>
      <Main>
        <img
          src="/locationPage-canadaLocationImg.png"
          style={{ width: "100%" }}
        />
        <Card>
          <CountryName>Canada</CountryName>
          <AddressDiv>
            <Office>Designo Central Office</Office>
            <Adress>
              3886 Wellington Street <br />
              Toronto, Ontario M9C 3J5
            </Adress>
          </AddressDiv>
          <AddressDiv style={{ marginBottom: "0" }}>
            <Office>Contact</Office>
            <Adress>
              P : +1 253-863-8967 <br /> M : contact@designo.co
            </Adress>
          </AddressDiv>
        </Card>
        <img
          src="/locationPage-australiaLocationImg.png"
          style={{ width: "100%", marginTop: "30px" }}
        />
        <Card>
          <CountryName>Australia</CountryName>
          <AddressDiv>
            <Office>Designo AU Office</Office>
            <Adress>
              19 Balonne Street
              <br />
              New South Wales 2443
            </Adress>
          </AddressDiv>
          <AddressDiv style={{ marginBottom: "0" }}>
            <Office>Contact</Office>
            <Adress>
              P : (02) 6720 9092 <br /> M : contact@designo.au
            </Adress>
          </AddressDiv>
        </Card>
        <img
          src="/locationPage-UKLocationImg.png"
          style={{ width: "100%", marginTop: "30px" }}
        />
        <Card>
          <CountryName>United Kingdom</CountryName>
          <AddressDiv>
            <Office>Designo UK Office</Office>
            <Adress>
              13 Colorado Way <br />
              Rhyd-y-fro SA8 9GA
            </Adress>
          </AddressDiv>
          <AddressDiv style={{ marginBottom: "0" }}>
            <Office>Contact</Office>
            <Adress>
              P : 078 3115 1400 <br /> M : contact@designo.uk
            </Adress>
          </AddressDiv>
        </Card>
      </Main>
    </>
  );
};

export default Locations;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Card = styled(Main)`
  background: linear-gradient(
    90deg,
    rgba(93, 2, 2, 0) 0%,
    rgba(93, 2, 2, 0.5) 100%
  );
  padding: 60px 24px;
`;

const CountryName = styled.h2`
  color: #e7816b;
  text-align: center;
  font-size: 32px;
  font-weight: 500;
  line-height: 36px;
`;

const AddressDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  margin-top: 24px;
`;

const Office = styled.p`
  color: #333136;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  line-height: 25px;
`;

const Adress = styled(Office)`
  font-weight: 400;
`;
