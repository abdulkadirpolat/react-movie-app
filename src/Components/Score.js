import React from "react";

class Score extends React.Component {
  render() {
    return (
      <div className="fs-5 fw-bold bg-primary text-light px-2 py-1 rounded">
        {/* <strong className=" text-center w-full  ">
          {this.props.scoreValue}
        </strong> */}
        {this.props.scoreValue}
      </div>
    );
  }
}

Score.defaultProps = {
  scoreValue: "8.3",
};

export default Score;
