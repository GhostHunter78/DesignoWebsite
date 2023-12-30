import {
  AppDesignLink,
  GraphicDesignLink,
  WebDesignLink,
} from "../../components/home";
import Banner from "../../components/home/Banner";
import Content from "../../components/home/Content";

const Home = () => {
  return (
    <>
      <Banner />
      <WebDesignLink />
      <AppDesignLink />
      <GraphicDesignLink />
      <Content />
    </>
  );
};

export default Home;
