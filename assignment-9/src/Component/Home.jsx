import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Catagory from "./Catagory";
import FeaturedJob from "./FeaturedJob";

const Home = () => {
    const [featuredData, setFeaturedData] = useState([]);
    useEffect(() => {
        const fetchFeaturedData = async () => {
          const response = await fetch('JobFeature.json');
          const data = await response.json();
          setFeaturedData(data);
          console.log(featuredData);
        };
        fetchFeaturedData().catch((error) => {
          console.error(error);
        });
      }, []);
console.log(featuredData);
  const catagory = useLoaderData();
  return (
    <div>
      <div className="md:flex justify-center items-center my-container mx-auto">
        <div className="md:w-1/2">
          <h1 className="text-4xl w-full font-bold sm:text-6xl lg:max-w-3xl text-center md:text-left">
            One Step <br />
            Closer To Your <br />
            <span className="text-purple-500">Dream Job</span>
          </h1>
        </div>
        <div className="md:w-1/2">
          <img className="w-2/3 mb-12 mx-auto" src="man.png" alt="" />
        </div>
      </div>
      <div>
        <div className="text-center">
          <h3 className="mb-3 text-2xl md:text-4xl font-bold">
            Job Category List
          </h3>
          <small className="font-light text-gray-500">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </small>
        </div>
        <div className="my-container grid md:grid-cols-4 gap-4 grid-cols-2">
          {catagory.map((singleCatagory, index) => (
            <Catagory key={index} catagory={singleCatagory}></Catagory>
          ))}
        </div>
        <div className="my-container">
          <div className="text-center">
            <h3 className="mb-3 text-2xl md:text-4xl font-bold">
              Featured Jobs
            </h3>
            <small className="font-light text-gray-500">
              Explore thousands of job opportunities with all the information
              you need. Its your future
            </small>
                  </div>
                  <div>
                      {
                          featuredData.map(feature => <FeaturedJob
                              key={feature.id}
                          feature={feature}
                          ></FeaturedJob>)
                      }
                  </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
