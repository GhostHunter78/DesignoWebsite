import styled from "styled-components";

const AppDesignCards = ({ appCardsInfo }) => {
  const { imageSrc, title, description } = appCardsInfo;

  return (
    <Main>
      <Image src={imageSrc} />
      <BelowDiv>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </BelowDiv>
    </Main>
  );
};

export default AppDesignCards;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const BelowDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #fdf3f0;
  padding: 32px 30px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const Title = styled.h3`
  color: #e7816b;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 5px;
  text-transform: uppercase;
`;

const Description = styled.p`
  color: #333136;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  margin-top: 16px;
`;
