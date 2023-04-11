import React from "react";

const FeaturedJob = ({ feature }) => {
  const {
    companyLogo,
    jobTitle,
    companyName,
    remoteOrOnsite,
    location,
    salary,
    fulltimeOrPartTime,
  } = feature;

  return (
    <div className="border rounded p-3">
      <img className="w-31  max-h-7" src={companyLogo} alt="" />
      <h3 className="font-semibold text-xl">{jobTitle}</h3>
      <p className="font-light text-gray-700 text-xs">{companyName}</p>

      <div className="flex my-3">
        <div className="border px-2 border-purple-500 rounded text-xs text-purple-500 flex font-semibold items-center ">
          {remoteOrOnsite}
        </div>
        <div className="border px-2 border-purple-500 rounded text-xs text-purple-500 flex font-semibold items-center ms-2">
          {fulltimeOrPartTime}
        </div>
      </div>
      <div>
        <div className="flex gap-5 mb-3">
          <div className="flex">
            <img className="w-5 h-5" src="location.png" alt="" />
            <small> {location}</small>
          </div>
          <div className="flex">
            <img className="w-5 h-5" src="dollar.png" alt="" />
            <small>{salary}</small>
          </div>
        </div>
        <button className="rounded text-white bg-gradient-to-r from-blue-500 to-purple-500 text-xs px-2 py-1 font-semibold">
          View Details
        </button>
      </div>
    </div>
  );
};

export default FeaturedJob;
