import { PropsChildren } from "../../../models/Model";

const Wrapper = ({ children }: PropsChildren) => {
  return (
    <div
      className="こやつか min-h-screen px-6 pt-14 pb-24 dark:bg-slate-800"
      style={{ minHeight: "100vh" }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
