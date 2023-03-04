import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

const Show = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [gym, setGym] = useState();
  useEffect(() => {
    console.log(id);
    axios.get(`/gym/${id}`).then((res) => {
      setGym(res.data.gym);
    });
  }, []);

  const handleDelete = () => {
    // axios.get(`http://localhost:3001/gyms/${id}/delete`).then((res) => {
    //   console.log(res);
    //   if (res.status === 200) {
    //     navigate("/gyms");
    //   }
    // });
    axios.delete(`/gyms/${id}`).then((res) => {
      console.log(res);
      if (res.status === 200) {
        navigate("/gyms");
      }
    });
  };

  return (
    <>
      {gym ? (
        <>
          <h2>Gym : {gym.title}</h2>
          <h3>$ - {gym.price}</h3>
          <h3>{gym.location}</h3>
        </>
      ) : (
        <h2>No exist gym</h2>
      )}
      <Link to={`/gyms/${id}/edit`}>Edit</Link>
      <Link to="/gyms">All gyms</Link>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default Show;
