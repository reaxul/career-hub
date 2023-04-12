import React from "react";
import { appliedJobId } from "./utils/fakeDb";
import { useLoaderData } from "react-router-dom";
import PreviousApplied from "./Component/PreviousApplied";

const AppliedJob = () => {
  let carts = [];
  const appliedId = appliedJobId();
  const allJobs = useLoaderData();
  for (const storedId of appliedId) {
    carts.push(allJobs.find((job) => job.id == storedId));
  }
  return (
    <div className="my-container">
    
          {carts.map((cart) => <PreviousApplied
              key={cart.id}
              cart={cart}
          ></PreviousApplied>)}
    </div>
  );
};

export default AppliedJob;
