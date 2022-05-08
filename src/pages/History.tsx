import Layout from "../layouts/Layout";
import LogList from "../components/Log/LogList";

const History = () => {
  return (
    <Layout>
      <div className="text-center">
        <div className="py-3">
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
