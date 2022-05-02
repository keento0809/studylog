import { PropsChildren } from "../../../models/Model";

const Wrapper = ({ children }: PropsChildren) => {
  return <div className="px-6 py-3">{children}</div>;
};

export default Wrapper;
