import React from "react";
import PropTypes from "prop-types";

const style = {
  maxWidth: "180px"
};

const ListNews = props => {
  // console.warn("cek props pada list news", props);
  const url = props.url !== null || props.url !== "" ? props.url : "#";
  const target =
    props.url !== null || props.url !== "" ? { target: "_blank" } : "";
  return (
    <section className="content">
      <h3>
        <a href={url} {...target}>
          {props.title}
        </a>
      </h3>
      <img
        style={style}
        src={props.img}
        alt="img_teaser"
        className="img_teaser"
      />
      <div className="right">{props.content}</div>
    </section>
  );
};

ListNews.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  img: PropTypes.string
};

export default ListNews;
