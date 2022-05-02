import MainComponent from "../components/MainComponent";
import Modal from "../components/UI/Modal/HomeModal";
import Layout from "../layouts/Layout";

const Home = () => {
  return (
    <div>
      <Layout>
        <Modal />
        <MainComponent />
      </Layout>
    </div>
  );
};

export default Home;
