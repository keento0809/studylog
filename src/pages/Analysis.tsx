import Layout from "../layouts/Layout";
import AnalysisHourChart from "../components/UI/Chart/AnalysisHourChart";
import AnalysisCostChart from "../components/UI/Chart/AnalysisCostChart";

const Analysis = () => {
  return (
    <Layout>
      <div className="">
        <div className="py-3 text-center">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
            Analysis
          </h1>
        </div>
        <div className="mx-auto">
          {/* temporary */}
          <div className="">
            <AnalysisHourChart />
            <AnalysisCostChart />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Analysis;
