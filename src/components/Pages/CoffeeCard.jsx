import PropTypes from "prop-types";
import { FaPen, FaRegEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  console.log("response form card", coffee);
  const { _id, chef, name, photo, supplier } = coffee;
  const handleDelete = (_id) => {
    console.log("want to delete", _id);
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure that you want to delete it",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("response from delete method", data);
            if (data.deletedId > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="card md:card-side md:justify-between bg-base-100 shadow-xl mt-5 bg-[#F5F4F1]">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex items-center justify-between w-full">
        <div className="md:ml-8">
          <h2 className="card-title">
            <span>Name</span>:{name}
          </h2>
          <p>
            <span>Chef</span>:{chef}
          </p>
          <p>
            <span>Supplier</span>:{supplier}
          </p>
        </div>
        <div className="flex mr-12 text-2xl flex-col space-y-4">
          {/* <button className="btn btn-primary">Watch</button>
           */}
          <div
            className="bg-[#D2B48C] w-8 h-8 flex items-center justify-center tooltip tooltip-top"
            data-tip="coffee-details"
          >
            <FaRegEye className=" text-lg text-white" />
          </div>
          <div
            className="bg-[#3C393B] w-8 h-8 flex items-center justify-center tooltip tooltip-top"
            data-tip="edit-coffee"
          >
            <Link to={`/updateCoffee/${_id}`}>
            <FaPen className=" text-lg text-white" />
            </Link>
          </div>
          <div
            onClick={() => handleDelete(_id)}
            className="bg-[#EA4744] w-8 h-8 flex items-center justify-center tooltip tooltip-top"
            data-tip="delete-coffee"
          >
            <MdDelete className=" text-lg text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.object,
};
export default CoffeeCard;
