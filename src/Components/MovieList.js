import React from "react";

const MovieList = (props) => {
  return (
    <div className="columns is-multiline">
      {props.movies.map((movie) => {
        return (
          <div
            className="column is-one-quarter-fullhd is-one-third-desktop is-half-tablet"
            key={movie.id}
          >
            <div className="card  " style={{ minHeight: "652px" }}>
              <div className="card-image">
                <figure className="image is-1by1">
                  <img
                    src={`https://www.themoviedb.org/t/p/w185_and_h278_multi_faces${movie.poster_path}`}
                  />
                </figure>
              </div>
              <div className="card-content mx-4-tablet">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-32x32">
                      <img
                        src={`https://www.themoviedb.org/t/p/w185_and_h278_multi_faces${movie.backdrop_path}`}
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="media-content" style={{ overflow: "hidden" }}>
                    <p style={{ minHeight: "45px" }} className="title is-5">
                      {movie.title}
                    </p>
                  </div>
                </div>
                <div className="level" style={{ display: "flex" }}>
                  <p
                    className=" is-medium px-2 py-2 has-background-info has-text-white button is-rounded"
                    style={{ minWidth: "50px" }}
                  >
                    {movie.vote_average}
                  </p>
                  <time className="is-size-5">{movie.release_date}</time>
                </div>
                <div className="content mt-2" style={{ minHeight: "172px" }}>
                  <p style={{ minHeight: "150px" }}>
                    {
                      (movie.overview =
                        movie.overview.length < 165
                          ? movie.overview
                          : `${movie.overview.slice(0, 165)} ...`)
                    }
                  </p>

                  <div className="level">
                    <button
                      onClick={() => props.deleteMovieProps(movie)}
                      className="button is-danger is-outlined level-item is-full"
                      type={props.buttonType}
                      style={{ width: "100%" }}
                    >
                      {props.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

MovieList.defaultProps = {
  buttonType: "button",
  buttonText: "Delete",
};

export default MovieList;
