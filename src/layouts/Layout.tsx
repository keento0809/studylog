import Header from "./Header";
import Footer from "./Footer";
import Wrapper from "../components/UI/Wrapper/Wrapper";
import { PropsChildren } from "../models/Model";

const Layout = ({ children }: PropsChildren) => {
  return (
    <div>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </div>
  );
};

export default Layout;
