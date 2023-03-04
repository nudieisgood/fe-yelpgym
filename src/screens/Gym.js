const Gym = ({ gym }) => {
  return (
    <div>
      <p>Location - {gym.location}</p>
      <p>$ - {gym.price}</p>
    </div>
  );
};

export default Gym;
