import { Link } from "react-router-dom";

const Gym = ({ gym }) => {
  return (
    <div className="mb-3">
      <div className="hidden sm:block">
        <div className="border grid grid-cols-12">
          <div className="col-start-1  sm:col-span-5 md:col-span-5 lg:col-span-3">
            <img className="w-full" src={gym.image} alt={gym.description} />
          </div>
          <div className="sm:col-start-6 lg:col-start-4 col-span-8">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{gym.title}</div>
              <p class="text-gray-700 text-base">{gym.description}</p>
              <div class="mt-2 block text-sm font-semibold text-slate-400">
                {gym.location}
              </div>
              <Link
                className="inline-block mt-2 bg-blue-400 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                to={`/gym/${gym._id}`}
              >
                View
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden border m-2">
        <div className="flex flex-col">
          <div className="m-2">
            <img className="w-full" src={gym.image} alt={gym.description} />
          </div>
          <div>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{gym.title}</div>
              <p class="text-gray-700 text-base">{gym.description}</p>
              <div class="mt-2 block text-sm font-semibold text-slate-400">
                {gym.location}
              </div>
              <Link
                className="inline-block mt-2 bg-blue-400 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                to={`/gym/${gym._id}`}
              >
                View
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gym;
