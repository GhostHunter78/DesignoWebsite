import styled from "styled-components";

const OrangeDiv = (props) => {
  return (
    <Main>
      <Title>{props.data.Title}</Title>
      <Description>{props.data.Description}</Description>
      <Title></Title>
      <Description></Description>
    </Main>
  );
};

export default OrangeDiv;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #e7816b;
  padding: 105px 24px;
  background-image: url("/designPages-orangeDivCircles.png");
  background-repeat: no-repeat;
  background-size: 100%;
`;

const Title = styled.h3`
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
  font-weight: 400;
  line-height: 25px;
  margin-top: 24px;
`;
