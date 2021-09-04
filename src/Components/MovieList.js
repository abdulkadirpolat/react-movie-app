import React from "react";

const MovieList = (props) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {props.movies.map((movie) => {
        return (
          <div className="col" key={movie.id}>
            <div className="card  mx-auto" style={{ width: "18rem" }}>
              <img
                src={movie.imageURL}
                className="card-img-top"
                alt="Sample Movie"
              />
              <div className="card-body">
                <h5 className="card-title">{movie.name}</h5>
                <p className="card-text">
                  {
                    (movie.overview =
                      movie.overview.length < 175
                        ? movie.overview
                        : `${movie.overview.slice(0, 175)} ...`)
                  }
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <button
                    onClick={() => props.deleteMovieProps(movie)}
                    className="btn btn-md btn-outline-danger"
                    type={props.buttonType}
                  >
                    {props.buttonText}
                  </button>
                  <div className="fs-5 fw-bold bg-primary text-light px-2 py-1 rounded">
                    {movie.rating}
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
  name: "Defaul Title",
  overview: "Default overView",
  imageURL: "https://via.placeholder.com/150",
  rating: "8.3",
  buttonType: "button",
  buttonText: "Button",
};

export default MovieList;
