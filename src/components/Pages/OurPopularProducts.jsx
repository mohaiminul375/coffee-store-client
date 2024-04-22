import { useLoaderData } from "react-router-dom";

const OurPopularProducts = () => {
  const coffees = useLoaderData();
  console.log(coffees);
  return (
    <div className="mt-28 md:max-w-5xl mx-auto">
      <div className="text-center">
        <small> --- Sip & Savor --- </small>
      </div>
    </div>
  );
};

export default OurPopularProducts;
