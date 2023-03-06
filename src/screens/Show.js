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
          <div className="grid grid-cols-8 mb-5">
            <div className="col-start-3 col-span-4">
              <div class="rounded overflow-hidden shadow-lg">
                <img class="w-full" src={gym.image} alt={gym.description} />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">{gym.title}</div>
                  <p class="text-gray-700 text-base">{gym.description}</p>
                </div>
                <ul class="px-6 pt-4 pb-2">
                  <li class="border block  px-3 py-1 text-sm font-semibold text-gray-7  00 mr-2 mb-2">
                    $ {gym.price} / mounth
                  </li>
                  <li class="border block  px-3 py-1 text-sm font-semibold text-slate-400 mr-2 mb-2">
                    {gym.location}
                  </li>

                  <li class="my-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #workout
                  </li>
                </ul>

                <Link
                  className="inline-block ml-3 bg-fuchsia-400 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded"
                  to="/gyms"
                >
                  All gyms
                </Link>
                <div className="flex">
                  <Link
                    className="m-3 bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    to={`/gyms/${id}/edit`}
                  >
                    Edit
                  </Link>
                  <button
                    className="m-3 block bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h2>No exist gym</h2>
      )}
    </>
  );
};

export default Show;
