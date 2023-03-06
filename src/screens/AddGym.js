import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddGym = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState();
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { title: title, location: location, price: price };
    axios
      .post("/gyms/new", body)
      .then((res) => {
        if (res.status === 200) {
          navigate(`/gym/${res.data.newGymId}`);
        }
        if (res.status === 401) {
          navigate("/login");
        }
        if (!res.status) {
          throw new Error("Something went wrong");
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <>
      <div className="grid grid-cols-6">
        <div className="col-start-3 col-span-2">
          <h1 className="text-center font-bold text-gray-500">Add Gym</h1>
          <form id="addGym" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="text-gray-500 font-bold" for="title">
                Gym title:
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                id="title"
                type="text"
                value={title}
              />
            </div>
            <div className="mb-3">
              <label className="text-gray-500 font-bold" for="location">
                Location:
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                id="location"
                type="text"
                value={location}
              />
            </div>
            <div className="mb-3">
              <label className="text-gray-500 font-bold" for="price">
                Price:
              </label>
              <div className="relative">
                <div class="pointer-events-none absolute inset-y-0 -left-1 flex items-center pl-3">
                  <span class="mr-3 text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  onChange={(e) => {
                    const value = parseInt(e.target.value || 0);
                    setPrice(value);
                  }}
                  id="price"
                  type="number"
                  value={price || ""}
                />
              </div>
              <div className="mb-3">
                <label className="text-gray-500 font-bold" for="image">
                  Image:
                </label>
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                  id="image"
                  type="text"
                  value={image}
                />
              </div>
              <div className="mb-3">
                <label className="text-gray-500 font-bold" for="description">
                  Description:
                </label>
                <textarea
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  id="description"
                  type="text"
                  value={description}
                />
              </div>
            </div>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default AddGym;
