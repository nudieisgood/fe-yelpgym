import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddGym = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { title: title, location: location, price: price };
    axios.post("/gyms/new", body).then((res) => {
      console.log(res);
      console.log(res.data.newGymId);
      navigate(`/gym/${res.data.newGymId}`);
    });
  };

  return (
    <div>
      <form id="addGym" onSubmit={handleSubmit}>
        <div>
          <label for="title">Gym title:</label>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            id="title"
            type="text"
            value={title}
          />
        </div>
        <div>
          <label for="location">Location:</label>
          <input
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            id="location"
            type="text"
            value={location}
          />
        </div>
        <div>
          <label for="price">Price:</label>
          <input
            onChange={(e) => {
              const value = parseInt(e.target.value || 0);
              setPrice(value);
            }}
            id="price"
            type="number"
            value={price || ""}
          />
        </div>
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          Add Gym
        </button>
      </form>
    </div>
  );
};
export default AddGym;
