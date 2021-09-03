import React from "react";
import CardBottom from "./CardBottom";

class MovieItem extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {};
  // }

  render() {
    return (
      <div className="col ">
        <div className="card  mx-auto" style={{ width: "18rem" }}>
          <img
            src={this.props.imgURL}
            className="card-img-top"
            alt="Sample Movie"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.nameTitle}</h5>
            <p className="card-text">{this.props.overView}</p>
            <CardBottom ratinG={this.props.rating} />
          </div>
        </div>
      </div>
    );
  }
}

MovieItem.defaultProps = {
  nameTitle: "Defaul Title",
  overView: "Default overView",
  imgURL: "https://via.placeholder.com/150",
};

export default MovieItem;
