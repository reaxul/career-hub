import React from "react";
import { appliedJobId } from "./utils/fakeDb";
import { useLoaderData } from "react-router-dom";
import PreviousApplied from "./Component/PreviousApplied";

const AppliedJob = () => {
  const appliedId = appliedJobId();

  const allJobs = useLoaderData();

  let carts = allJobs.filter((obj) => appliedId.includes(obj.id));

  return (
    <div className="my-container">
      {carts.map((cart) => (
        <PreviousApplied key={cart.id} cart={cart}></PreviousApplied>
      ))}
    </div>
  );
};

export default AppliedJob;
