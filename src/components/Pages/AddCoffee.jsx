// import React from 'react';
import { IoArrowBack } from "react-icons/io5";
import Swal from 'sweetalert2'
import addCoffeeBg from "../../assets/more/addCoffeeBg.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const AddCoffee = () => {
  const { register, handleSubmit,reset } = useForm();

  const onSubmit = (newCoffee) => {
    console.log(newCoffee);
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {console.log("response form post method", data)
      if(data.insertedId){
        reset();
        Swal.fire({
            title: 'success!',
            text: 'Coffee Added Successfully',
            icon: 'success',
            confirmButtonText: 'Ok',
            successButtonColor:'#331A15'
          })
    }
    }
    
    );
  };

  return (
    <div
      style={{ backgroundImage: `url(${addCoffeeBg})` }}
      className="bg-cover bg-no-repeat"
    >
      {/* form section*/}
      <div className="md:max-w-5xl mx-auto">
        <Link to="/">
          <h2 className="pt-12 flex items-center font-medium text-[#374151] font-rancho text-2xl">
            <IoArrowBack /> Back to home
          </h2>
        </Link>
        <div className="mt-12 bg-[#F4F3F0] py-12 px-16 rounded-md">
          <div className="text-center">
            <h2 className="text-[#374151] text-5xl font-rancho">Add Coffee</h2>
            <p className="text-[#1B1A1AB3] text-base">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          {/* form start here */}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
            {/* row 1 */}
            <div className="md:flex gap-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>

                <input
                  type="text"
                  placeholder="Enter coffee name"
                  name="name"
                  {...register("name")}
                  className="input border-[#331A15] md:w-full"
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Chef</span>
                </label>

                <input
                  type="text"
                  placeholder="Enter coffee chef"
                  name="chef"
                  {...register("chef")}
                  className="input border-[#331A15] md:w-full"
                />
              </div>
            </div>
            {/* row 2 */}
            <div className="md:flex gap-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Supplier</span>
                </label>

                <input
                  type="text"
                  placeholder="Enter coffee supplier"
                  name="supplier"
                  {...register("supplier")}
                  className="input border-[#331A15] md:w-full"
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Taste</span>
                </label>

                <input
                  type="text"
                  placeholder="Enter coffee taste"
                  name="taste"
                  {...register("taste")}
                  className="input border-[#331A15] md:w-full"
                />
              </div>
            </div>
            {/* row 3 */}
            <div className="md:flex gap-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>

                <input
                  type="text"
                  placeholder="Enter coffee category"
                  name="category"
                  {...register("category")}
                  className="input border-[#331A15] md:w-full"
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>

                <input
                  type="text"
                  placeholder="Enter coffee details"
                  name="details"
                  {...register("details")}
                  className="input border-[#331A15] md:w-full"
                />
              </div>
            </div>
            {/* row 4 */}
            <div className="w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>

                <input
                  type="text"
                  placeholder="Enter photo URL"
                  name="photo"
                  {...register("photo")}
                  className="input border-[#331A15] md:w-full"
                />
              </div>
            </div>
            <input
              className="btn w-full bg-[#D2B48C] text-[#331A15] font-rancho text-xl border-2 border-[#331A15]"
              type="submit"
              value="Add Coffee"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
