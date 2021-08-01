import genres from "../GenresAPI/genres";

export default function PopularMovies({ items, baseImgUrl }) {
  return (
    <div className="p-10 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {items.map((el, i) => {
        return (
          <div className="rounded overflow-hidden shadow-lg" key={i}>
            <img
              className="w-full"
              src={`${baseImgUrl}w500${el.poster_path}`}
              alt="Mountain"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{el.original_title}</div>
            </div>
            <div className="px-6 pt-4 pb-2">
              {genres.map((gen) => {
                if (gen.id === el.genre_ids[0]) {
                  return (
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {gen.name}{" "}
                    </span>
                  );
                } else if (gen.id === el.genre_ids[1]) {
                  return (
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {gen.name}{" "}
                    </span>
                  );
                } else if (gen.id === el.genre_ids[2]) {
                  return (
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {gen.name}{" "}
                    </span>
                  );
                } else if (gen.id === el.genre_ids[3]) {
                  return (
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {gen.name}{" "}
                    </span>
                  );
                }
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
