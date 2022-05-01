import Header from "./Header";
import Footer from "./Footer";
import { PropsChildren } from "../models/Model";

const Layout = ({ children }: PropsChildren) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
