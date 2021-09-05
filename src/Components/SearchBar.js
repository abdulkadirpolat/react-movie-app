import React from "react";

class SearchBar extends React.Component {
  formSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div className="mb-5">
          <div className="is-12">
            <input
              className="input is-info"
              type={this.props.inputType}
              placeholder={this.props.placeHolder}
              onChange={this.props.searchMovieProps}
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
