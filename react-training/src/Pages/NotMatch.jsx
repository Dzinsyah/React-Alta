import React from "react";
import Navigation from "../Component/navigation";

const NotMatch = props => {
  const pathname = window.location.pathname;

  return (
    <React.Fragment>
      <Navigation {...props} />
      <section className="content">
        <h4>Not found</h4>
        <p>
          page: <b>{pathname}</b> you're looking for not found
        </p>
      </section>
    </React.Fragment>
  );
};

export default NotMatch;
