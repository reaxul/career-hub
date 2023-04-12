import React from "react";
import { useNavigate } from "react-router-dom";

const PreviousApplied = ({ cart }) => {
    const navigate=useNavigate()
  const {
    companyLogo,
    jobTitle,
    companyName,
    remoteOrOnsite,
    location,
    salary,
    fulltimeOrPartTime,
    id,
  } = cart;
  return (
      <div className="my-4">
          <div className=" flex border p-2 items-center justify-between">
    
    <div className="flex items-center">
      <img
        className="w-52 bg-gray-100 px-11 py-14 rounded-sm mr-3"
        src={companyLogo}
        alt=""
      />
      <div>
        <h3 className="font-semibold text-xl">{jobTitle}</h3>
        <p className="font-light text-gray-700 text-xs">{companyName}</p>
        <p
          className="inline-block border mr-2
                 px-2 border-purple-500 rounded text-xs text-purple-500 font-semibold items-center"
        >
          {remoteOrOnsite}
        </p>

        <p
          className="inline-block border mb-4 mt-2
                 px-2 border-purple-500 rounded text-xs text-purple-500 font-semibold items-center"
        >
          {fulltimeOrPartTime}
        </p>
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
      </div>
    </div>
    <button onClick={()=>{navigate(`/job-details/${id}`)}} className="rounded h-8 text-white bg-gradient-to-r from-blue-500 to-purple-500 text-xs px-2 py-1 font-semibold">
      View Details
    </button>
  </div>
      </div>
  );
};

export default PreviousApplied;
