import Layout from "../layouts/Layout";
// temporary
import LogCard from "../components/UI/Card/LogCard";

const History = () => {
  return (
    <Layout>
      <div className="text-center">
        <div className="py-3">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
            History
          </h1>
        </div>
        {/* temporary: need to set max-height and overflow: scroll */}
        <div className="">
          {/* I'm gonna add logList here. */}
          <LogCard />
          <LogCard />
          <LogCard />
          <LogCard />
        </div>
      </div>
    </Layout>
  );
};

export default History;
