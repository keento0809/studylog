import Header from "../layouts/Header";
import MainComponent from "../components/MainComponent";
import Modal from "../components/UI/Modal";
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
