import React from "react";

class ButtonComponent extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     deleteItem: false,
  //   };
  // }

  // deleteFunction = () => {
  //   return this.setState({ deleteItem: !this.state.deleteItem });
  // };
  render() {
    return (
      // <button deleteItem= {this.deleteFunction}  onClick={this.deleteFunction} type={this.props.buttonType}>
      //   {this.props.buttonText}
      // </button>
      <button
        className="btn btn-md btn-outline-danger"
        type={this.props.buttonType}
      >
        {this.props.buttonText}
      </button>
    );
  }
}
ButtonComponent.defaultProps = {
  buttonType: "button",
  buttonText: "Button",
};

export default ButtonComponent;
