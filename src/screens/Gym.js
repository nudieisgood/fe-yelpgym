import { Link } from "react-router-dom";

const Gym = ({ gym }) => {
  return (
    <div>
      <Link to={`/gym/${gym._id}`}>
        <p>{gym.title}</p>
      </Link>
    </div>
  );
};

export default Gym;
