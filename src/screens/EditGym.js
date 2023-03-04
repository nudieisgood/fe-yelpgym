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
        <div>
          <form id="editGym" onSubmit={handleSubmit}>
            {}
            <div>
              <label for="title">Gym title:</label>
              <input
                onChange={(e) => {
                  setTempGym({ ...tempGym, title: e.target.value });
                }}
                id="title"
                type="text"
                value={tempGym.title}
              />
            </div>
            <div>
              <label for="location">Location:</label>
              <input
                onChange={(e) => {
                  setTempGym({ ...tempGym, location: e.target.value });
                }}
                id="location"
                type="text"
                value={tempGym.location}
              />
            </div>
            <div>
              <label for="price">Price:</label>
              <input
                onChange={(e) => {
                  const value = parseInt(e.target.value || 0);
                  setTempGym({ ...tempGym, price: value });
                }}
                id="price"
                type="number"
                value={tempGym.price || ""}
              />
            </div>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              Save
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
};

export default EditGym;
