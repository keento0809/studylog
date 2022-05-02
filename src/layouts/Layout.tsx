import Header from "./Header";
import Modal from "../components/UI/Modal/HomeModal";
import Footer from "./Footer";
import Wrapper from "../components/UI/Wrapper/Wrapper";
import { PropsChildren } from "../models/Model";

const Layout = ({ children }: PropsChildren) => {
  return (
    <div>
      <Header />
      <Modal />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </div>
  );
};

export default Layout;
