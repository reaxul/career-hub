import React from 'react';

const FeaturedJob = ({ feature }) => {
    console.log(feature);
    const { companyLogo ,jobTitle,companyName,remoteOrOnsite,location,salary,} = feature;
    return (
        <div>
            <img src={companyLogo} alt="" />
            <h3>{jobTitle}</h3>
            <p>{companyName}</p>
        </div>
    );
};

export default FeaturedJob;