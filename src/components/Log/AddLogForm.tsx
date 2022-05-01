const AddLogForm = () => {
  return (
    <form className="bg-white dark:bg-gray-800">
      <div className="max-w-3xl px-6 py-6 mx-auto text-center">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
          Add New Log
        </h1>

        <div className="flex flex-col mt-6 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
          <div className="flex flex-row items-end justify-center">
            <div className="flex flex-col items-start">
              <label htmlFor="" className="block pl-4">
                Hour
              </label>
              <input
                type="text"
                className="w-4/5 mr-auto px-4 py-2 text-gray-700 bg-white border rounded-full sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-emerald-500 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                placeholder="Hour"
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="" className="block pl-4">
                Cost
              </label>
              <input
                type="text"
                className="w-fll mx-auto px-4 py-2 text-gray-700 bg-white border rounded-full sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-emerald-500 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                placeholder="$"
              />
            </div>
          </div>

          <div className="flex flex-col items-start">
            <label htmlFor="" className="pl-4">
              Summary
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 text-gray-700 bg-white border rounded-full sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-emerald-500 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              placeholder="Text here"
            />
          </div>

          <div className="py-4">
            <button className="w-full px-4 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-emerald-400 rounded-full sm:mx-2 hover:bg-emerald-500 focus:outline-none focus:bg-emerald-500">
              ADD
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddLogForm;
