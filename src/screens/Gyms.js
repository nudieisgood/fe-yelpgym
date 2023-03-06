import { useEffect, useState } from "react";
import axios from "axios";
import Gym from "./Gym";
import { Link } from "react-router-dom";

const Gyms = () => {
  const [gyms, setGyms] = useState();
  useEffect(() => {
    axios.get("gyms").then((res) => {
      setGyms(res.data.gyms);
    });
  }, []);
  return (
    <>
      <h1 className="font-bold">All Gyms</h1>
      <ul>
        {gyms ? (
          gyms.map((gym) => {
            return (
              <li key={gym._id}>
                <Gym gym={gym} />
              </li>
            );
          })
        ) : (
          <h2>Loading...</h2>
        )}
      </ul>
    </>
  );
};

export default Gyms;
