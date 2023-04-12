import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToDb } from "./utils/fakeDb";

const JobDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const JobDetails = data.find((obj) => obj.id === id);
  if (JobDetails) {
      const {
        id,
      jobTitle,
      companyName,
      remoteOrOnsite,
      location,
      salary,
      fulltimeOrPartTime,
      jobDescription,
      jobResponsibility,
      experiences,
      educationalRequirements,
      contactInformation,
    } = JobDetails;
    }
    const handleAppliedJob = id => {
        addToDb(id)
    }
  return (
    <div className="grid grid-cols-12 gap-4 my-container">
      <div className="col-span-7">
        <p className="font-bold">Job Description: </p>
        <small className="font-semibold mb-10 text-gray-500">
          {JobDetails?.jobDescription}
        </small>
        <p className="font-bold mt-5">Job Responsibility: </p>
        <small className="font-semibold mb-10 text-gray-500">
          {JobDetails?.jobResponsibility}
        </small>
        <p className="font-bold mt-7">Educational Requirements: </p>
        <small className="font-semibold mb-10 text-gray-500">
          {JobDetails?.educationalRequirements}
        </small>
        <p className="font-bold mt-7">Experience: </p>
        <small className="font-semibold mb-10 text-gray-500">
          {JobDetails?.experiences}
        </small>
      </div>
      <div className="col-span-5">
        <div className=" bg-purple-100 p-4 rounded ">
          <h2 className="font-bold border-b border-gray-400 pb-2 my-3">
            Job details
          </h2>
          <div>
            <div className="flex my-2">
              <img
                className="w-5 h-5 mr-1"
                src="https://i.ibb.co/Fm1D4Tf/Frame.png"
                alt=""
              />
              <p className="font-semibold text-sm mr-1">Salary: </p>
              <small className="text-sm text-gray-600 ">
                {JobDetails?.salary}
              </small>
            </div>
            <div className="flex my-2">
              <img
                className="w-5 h-5 mr-1"
                src="https://i.ibb.co/dQfchhD/Frame-1.png"
                alt=""
              />
              <p className="font-semibold mr-1 text-sm">Job Title: </p>
              <small className="text-sm text-gray-600 ">
                {JobDetails?.jobTitle}
              </small>
            </div>
            <p className="font-bold border-b border-gray-400 pb-2 my-3">
              Contact Information
            </p>
            <div className="flex my-2">
              <img
                className="w-5 h-5 mr-1"
                src="https://i.ibb.co/02kkVHV/Frame-2.png"
                alt=""
              />
              <p className="font-semibold mr-1 text-sm">Phone: </p>
              <small className="text-sm text-gray-600 ">
                {JobDetails?.contactInformation.phone}
              </small>
            </div>
            <div className="flex my-2">
              <img
                className="w-5 h-5 mr-1"
                src="https://i.ibb.co/ZhDT4Hx/Frame-3.png"
                alt=""
              />
              <p className="font-semibold mr-1 text-sm">Email: </p>
              <small className="text-sm text-gray-600 ">
                {JobDetails?.contactInformation.email}
              </small>
            </div>
            <div className="flex my-1">
              <img
                className="w-5 h-5 mr-1"
                src="https://i.ibb.co/KzWhJzD/Location-Icon.png"
                alt=""
              />
              <p className="font-semibold mr-1 text-sm">Address: </p>
              <small className="text-sm text-gray-600 ">
                {JobDetails?.location}
              </small>
            </div>
          </div>
              </div>
              <button onClick={()=>handleAppliedJob(id)} className="w-full mt-2 py-2 font-bold text-base rounded text-white bg-gradient-to-r from-blue-500 to-purple-500">Apply Now</button>
      </div>
    </div>
  );
};

export default JobDetails;
/* 









*/
