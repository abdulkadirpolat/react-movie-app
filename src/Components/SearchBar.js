import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <input
        className="my-3 w-100"
        type={this.props.inputType}
        placeholder="Search"
      ></input>
    );
  }
}

SearchBar.defaultProps = {
  inputType: "text",
};

export default SearchBar;
