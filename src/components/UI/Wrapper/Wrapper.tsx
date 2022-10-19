import { PropsChildren } from "../../../models/Model";

const Wrapper = ({ children }: PropsChildren) => {
  return (
    <div className="dark:bg-slate-800">
      <div
        className="min-h-screen px-6 pt-14 pb-24 dark:bg-slate-800 xl:max-w-7xl xl:mx-auto"
        style={{ minHeight: "100vh" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
