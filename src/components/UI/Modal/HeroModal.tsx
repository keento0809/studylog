import { Fragment } from "react";

const HeroModal = () => {
  return (
    <Fragment>
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="heroModal"
        tab-index="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="flex-1 md:flex md:items-center md:justify-between z-10 px-6 py-6 mx-auto">
              <div className="">
                <p>I'll add descriptions of this app.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HeroModal;
