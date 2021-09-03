import React from "react";
import MovieItem from "./MovieItem";

class MovieList extends React.Component {
  render() {
    return (
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* {this.movies.map((e) => {
          return <MovieItem imgURL={e.imageURL} />;
        })} */}

        {this.props.movies.map((e, index) => {
          return (
            <MovieItem
              key={index}
              imgURL={e.imageURL}
              nameTitle={e.name}
              overView={
                (e.overview =
                  e.overview.length < 175
                    ? e.overview
                    : `${e.overview.slice(0, 175)} ...`)
              }
              ratinG={e.rating}
            />
          );
        })}
      </div>
    );
  }
}

export default MovieList;
