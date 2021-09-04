import React from "react";

class SearchBar extends React.Component {
  // state = {
  //   searchChange: "",
  // };

  formSubmit = (event) => {
    event.preventDefault();
  };

  // enterValue = (e) => {
  //   if (e.key == "Enter") {
  //     console.log("submit");
  //     this.state.searchChange = "";
  //     console.log(this.state.searchChange);
  //   } else {
  //     this.state.searchChange = "";
  //   }
  // };

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div className="form-row mb-5">
          <div className="col-12">
            <input
              className="form-control"
              type={this.props.inputType}
              placeholder={this.props.placeHolder}
              onChange={this.props.searchMovieProps}
             // onKeyUp={this.enterValue}
            ></input>
          </div>
        </div>
      </form>
    );
  }
}

SearchBar.defaultProps = {
  inputType: "text",
  placeHolder: "Searct",
};

export default SearchBar;
