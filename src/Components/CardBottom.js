import React from "react";
import ButtonComponent from "./ButtonComponent";
import Score from "./Score";

class CardBottom extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-between align-items-center">
        <ButtonComponent />
        <Score />
      </div>
    );
  }
}

export default CardBottom;
