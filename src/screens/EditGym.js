import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const EditGym = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [gym, setGym] = useState();
  const [tempGym, setTempGym] = useState();
  useEffect(() => {
    axios.get(`/gym/${id}`).then((res) => {
      setGym(res.data.gym);
      setTempGym(res.data.gym);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = tempGym;
    axios.post(`/gyms/${id}/edit`, body).then((res) => {
      console.log(res);
      console.log(res.data.newGymId);
      navigate(`/gym/${res.data.newGymId}`);
    });
  };

  return (
    <>
      {gym ? (
        <div className="grid grid-cols-6">
          <div className="col-start-3 col-span-2">
            <h1 className="text-center font-bold text-gray-500">
              Edit {gym.title}
            </h1>
            <form id="editGym" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="text-gray-500 font-bold" for="title">
                  Gym title:
                </label>
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  onChange={(e) => {
                    setTempGym({ ...tempGym, title: e.target.value });
                  }}
                  id="title"
                  type="text"
                  value={tempGym.title}
                />
              </div>
              <div className="mb-3">
                <label className="text-gray-500 font-bold" for="location">
                  Location:
                </label>
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  onChange={(e) => {
                    setTempGym({ ...tempGym, location: e.target.value });
                  }}
                  id="location"
                  type="text"
                  value={tempGym.location}
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
                      setTempGym({ ...tempGym, price: value });
                    }}
                    id="price"
                    type="number"
                    value={tempGym.price || ""}
                  />
                </div>
                <div className="mb-3">
                  <label className="text-gray-500 font-bold" for="image">
                    Image:
                  </label>
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    onChange={(e) => {
                      setTempGym({ ...tempGym, image: e.target.value });
                    }}
                    id="image"
                    type="text"
                    value={tempGym.image}
                  />
                </div>
                <div className="mb-3">
                  <label className="text-gray-500 font-bold" for="description">
                    Description:
                  </label>
                  <textarea
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    onChange={(e) => {
                      setTempGym({ ...tempGym, description: e.target.value });
                    }}
                    id="description"
                    type="text"
                    value={tempGym.description}
                  />
                </div>
              </div>
              <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default EditGym;
