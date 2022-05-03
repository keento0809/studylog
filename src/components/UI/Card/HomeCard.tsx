import { PropsChildren } from "../../../models/Model";

const HomeCard = ({ children }: PropsChildren) => {
  return (
    <div className="w-full p-6 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 text-center mb-4">
      <h3 className="text-xl pt-3 pb-6 font-bold">testing home</h3>
      {children}
    </div>
  );
};

export default HomeCard;
