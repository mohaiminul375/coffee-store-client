import { Link, useLoaderData } from "react-router-dom";
import { LiaMugHotSolid } from "react-icons/lia";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";

const OurPopularProducts = () => {
  const loadedCoffees = useLoaderData();
  const [coffees,setCoffees]=useState(loadedCoffees)

//   console.log(coffees);
  return (
    <div className="mt-28 md:max-w-6xl mx-auto">
      <div className="text-center space-y-3">
        <h5 className="text-lg font-raleway"> --- Sip & Savor --- </h5>
        <h2 className="text-[#331A15] font-rancho text-5xl font-semibold pb-4">
          Our Popular Products
        </h2>
        <Link 
          className="btn gap-2 items-center bg-[#E3B577] text-white p-2 rounded-md font-rancho text-xl font-medium"
          to="/addCoffee"
        >
          Add Coffee <LiaMugHotSolid className="text-[#331A15]"/>
        </Link>
      </div>
      {/* coffees */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
       {
        coffees.map(coffee=><CoffeeCard
           key={coffee._id}
           coffees={coffees}
           setCoffees={setCoffees}
           coffee={coffee}></CoffeeCard>)
       }
      </div>
    </div>
  );
};

export default OurPopularProducts;
