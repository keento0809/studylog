import { Link } from "react-router-dom";
import { PropsChildren } from "../../../models/Model";

const HomeSectionCard = ({ children }: PropsChildren) => {
  return (
    <div className="block w-full mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-700">
      {children}
    </div>
  );
};

export default HomeSectionCard;
