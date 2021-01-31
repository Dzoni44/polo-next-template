import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import Product from "../components/Product";

const Home = () => {
  return (
    <Layout home>
      <Carousel />
      <Product />
    </Layout>
  );
};

export default Home;
