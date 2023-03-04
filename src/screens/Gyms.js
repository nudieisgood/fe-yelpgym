import { useEffect, useState } from "react";
import axios from "axios";
import Gym from "./Gym";

const Gyms = () => {
  const [gyms, setGyms] = useState();
  useEffect(() => {
    axios.get("http://localhost:3001/gyms").then((res) => {
      console.log(res);
      console.log(res.data.gyms);
      setGyms(res.data.gyms);
    });
  }, []);
  return (
    <>
      <h1>All Gyms</h1>
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
