import React from "react";
import PropTypes from 'prop-types'
function SearchBar({ inputType, placeHolder, searchMovieProps }) {
  const formSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={formSubmit}>
      <div className="mb-5">
        <div className="is-12">
          <input
            className="input is-info"
            type={inputType}
            placeholder={placeHolder}
            onChange={searchMovieProps}
          ></input>
        </div>
      </div>
    </form>
  );
}

SearchBar.defaultProps = {
  inputType: "text",
  placeHolder: "Searct",
};

SearchBar.propTypes = {
  inputType: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  searchMovieProps: PropTypes.string.isRequired,
}

export default SearchBar;
