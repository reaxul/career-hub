import React from "react";
import Active from "./Active";

const Header = () => {
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:flex justify-between">
      <div>
        <h3 className="text-base md:text-3xl font-bold tracking-wide text-gray-800 ">
          CodeCollaborate
        </h3>
      </div>
      <div className="md:flex">
        <Active to={"/statistics"}>Statistics</Active>
        <div className="md:mx-3">
          <Active to={"/applied-jobs"}>Applied Jobs</Active>
        </div>
        <Active to={"/blogs"}>Blog</Active>
      </div>
      <div>
        <button className="btn-primary">Start Applying</button>
      </div>
    </div>
  );
};

export default Header;
