import { Link } from "react-router-dom";
import genres from "../GenresAPI/genres";

export default function ListMovies({ items, baseImgUrl }) {
  return (
    <div className="p-10 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-5">
      {items.map((el) => {
        return (
          <div
            className="rounded overflow-hidden shadow-lg"
            key={el.original_title}
          >
            <img
              className="w-full"
              src={`${baseImgUrl}w500${el.poster_path}`}
              alt={el.original_title}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{el.original_title}</div>
            </div>
            <div className="px-6 pt-4 pb-2">
              {genres.map((gen) => {
                if (gen.id === el.genre_ids[0])
                  return (
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {gen.name}
                    </span>
                  );
                else if (gen.id === el.genre_ids[1])
                  return (
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {gen.name}
                    </span>
                  );
                else if (gen.id === el.genre_ids[2])
                  return (
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {gen.name}
                    </span>
                  );
                else if (gen.id === el.genre_ids[3])
                  return (
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {gen.name}
                    </span>
                  );
                return <div></div>;
              })}
            </div>
            <button
              className="p-0 w-12 h-10 bg-blue-300 rounded-md hover:bg-blue-400 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
              // onClick={() => {}}
            >
              <svg
                viewBox="0 0 20 20"
                enableBackground="new 0 0 20 20"
                className="w-6 h-6 inline-block"
              >
                <path
                  fill="#FFFFFF"
                  d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                        C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                        C15.952,9,16,9.447,16,10z"
                />
              </svg>
            </button>
            <Link to={`/movies/${el.id}`}>
              <button className="p-0 w-16 h-10 bg-blue-300 rounded-md hover:bg-blue-400 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none text-white ml-5">
                Details
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
