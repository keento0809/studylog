import Layout from "../layouts/Layout";
import AnalysisHourChart from "../components/UI/Chart/AnalysisHourChart";
import AnalysisCostChart from "../components/UI/Chart/AnalysisCostChart";

const Analysis = () => {
  return (
    <Layout>
      <div className="py-8">
        <div className="pb-3 text-center">
          <h1 className="text-xl tracking-tighter font-semibold text-gray-800 dark:text-gray-100">
            Analysis
          </h1>
        </div>
        <div className="mx-auto">
          {/* temporary */}
          <div className="mx-auto md:w-2/3 lg:flex lg:w-full">
            <div className="lg:basis-1/2">
              <AnalysisHourChart />
            </div>
            <div className="lg:basis-1/2 lg:pl-2">
              <AnalysisCostChart />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Analysis;
