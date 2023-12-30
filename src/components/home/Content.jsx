import styled from "styled-components";

const Content = () => {
  return (
    <Main>
      <img src="./homePage-manPicture.png" />
      <Title>passionate</Title>
      <Description>
        Each project starts with an in-depth brand research to ensure we only
        create products that serve a purpose. We merge art, design, and
        technology into exciting new solutions.
      </Description>
      <Image src="./homePage-womanPicture.png" />
      <Title>RESOURCEFUL</Title>
      <Description>
        Everything that we do has a strategic purpose. We use an agile approach
        in all of our projects and value customer collaboration. It guarantees
        superior results that fulfill our clients’ needs.
      </Description>
      <Image src="./homePage-manAndWomanPicture.png" />
      <Title>friendly</Title>
      <Description>
        We are a group of enthusiastic folks who know how to put people first.
        Our success depends on our customers, and we strive to give them the
        best experience a company can provide.
      </Description>
    </Main>
  );
};

export default Content;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 110px 24px 0 24px;
  background: #fff;
`;

const Title = styled.p`
  color: #333136;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 5px;
  text-transform: uppercase;
  margin-top: 48px;
`;

const Description = styled.p`
  width: 327px;
  color: #333136;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  margin-top: 32px;
`;

const Image = styled.img`
  margin-top: 80px;
`;
