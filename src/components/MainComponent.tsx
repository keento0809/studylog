const MainComponent = () => {
  return (
    <div className="">
      <form className="bg-white dark:bg-gray-800">
        <div className="max-w-3xl px-6 py-6 mx-auto text-center">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
            Add New Log
          </h1>

          <div className="flex flex-col mt-6 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
            <input
              type="text"
              className="px-4 py-2 text-gray-700 bg-white border rounded-full sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              placeholder="Text here"
            />

            <button className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-700 rounded-full sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              ADD
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MainComponent;
