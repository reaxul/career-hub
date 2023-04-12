import React, { useState } from "react";
import { appliedJobId } from "./utils/fakeDb";
import { useLoaderData } from "react-router-dom";
import PreviousApplied from "./Component/PreviousApplied";

const AppliedJob = () => {
  const appliedId = appliedJobId();

  const allJobs = useLoaderData();
  const [job, setJobs] = useState(allJobs);
  const remoteHandler = () => {
    const remoteJob = allJobs.filter(job => job.remoteOrOnsite === 'Remote');
    setJobs(remoteJob)
  }
  const onSiteHandler = () => {
    const onsiteJob = allJobs.filter(job => job.remoteOrOnsite === 'Onsite');
    setJobs(onsiteJob)
  }

  let carts = job.filter((obj) => appliedId.includes(obj.id));

  return (
    <div className="my-container">
      <button onClick={remoteHandler} className="rounded h-8 text-white bg-gradient-to-r from-blue-500 to-purple-500 text-xs px-2 py-1 font-semibold">Remote Jobs</button> <button onClick={onSiteHandler}  className="rounded h-8 text-white bg-gradient-to-r from-blue-500 to-purple-500 text-xs px-2 py-1 font-semibold">Onsite Jobs</button>
      {carts.map((cart) => (
        <PreviousApplied key={cart.id} cart={cart}></PreviousApplied>
      ))}
    </div>
  );
};

export default AppliedJob;
