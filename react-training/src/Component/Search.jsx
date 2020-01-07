import React from "react";
import PropTypes from "prop-types";

const Search = props => {
  return (
    <section className="topsection">
      <h4>{props.title}</h4>
      <form action="#">
        <input
          type="text"
          name="search"
          id="search"
          placeholder={props.placeholder}
          onChange={props.doSearch}
          value={props.keyword}
        />
      </form>
    </section>
  );
};

Search.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default Search;
