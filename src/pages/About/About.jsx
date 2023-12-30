import styled from "styled-components";
import CountryLocations from "../../components/CountryLocations";

const About = () => {
  return (
    <>
      <Image src="/aboutPage-peoplePicture.png" />
      <Main>
        <Title>About Us</Title>
        <Description>
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </Description>
      </Main>
      <Image src="/aboutPage-womanPicture.png" />
      <WheatDiv>
        <OrangeTitle>World-class talent</OrangeTitle>
        <BlackDescription>
          We are a crew of strategists, problem-solvers, and technologists.
          Every design is thoughtfully crafted from concept to launch, ensuring
          success in its given market. We are constantly updating our skills in
          a myriad of platforms.
          <br /> <br /> Our team is multi-disciplinary and we are not merely
          interested in form — content and meaning are just as important. We
          give great importance to craftsmanship, service, and prompt delivery.
          Clients have always been impressed with our high-quality outcomes that
          encapsulates their brand’s story and mission.
        </BlackDescription>
      </WheatDiv>
      <CountryLocations />
      <Image src="/aboutPage-handsPicture.png" style={{ marginTop: "120px" }} />
      <WheatDiv>
        <OrangeTitle>The real deal</OrangeTitle>
        <BlackDescription>
          As strategic partners in our clients’ businesses, we are ready to take
          on any challenge as our own. Solving real problems require empathy and
          collaboration, and we strive to bring a fresh perspective to every
          opportunity. We make design and technology more accessible and give
          you tools to measure success. <br /> <br /> We are visual storytellers
          in appealing and captivating ways. By combining business and marketing
          strategies, we inspire audiences to take action and drive real
          results.
        </BlackDescription>
      </WheatDiv>
    </>
  );
};

export default About;

const Image = styled.img`
  width: 100%;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #e7816b;
  padding: 80px 24px;
  background-image: url("/aboutPage-orangeCircles.png");
  background-repeat: no-repeat;
  background-size: 100%;
  margin-top: -7px;
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

const WheatDiv = styled(Main)`
  background: #f2e0be;
  padding: 80px 24px;
  background-image: url("/aboutPage-WheatCircles.png");
`;

const OrangeTitle = styled(Title)`
  color: #e7816b;
`;

const BlackDescription = styled(Description)`
  color: #333136;
`;
