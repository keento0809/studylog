import Layout from "../layouts/Layout";
import LogList from "../components/Log/LogList";

const History = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8 text-center max-h-fit overflow-scroll">
        <div className="pb-3">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
            History
          </h1>
        </div>
        <LogList />
      </div>
    </Layout>
  );
};

export default History;
