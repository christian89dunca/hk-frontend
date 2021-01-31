import React from "react";
import { Link } from "react-router-dom";

const NewProject = () => {
  return (
    <ul className="list-group">
      <Link
        to="/project/new"
        style={{ marginTop: 50, textAlign: "center" }}
        className="list-group-item active clickable"
      >
        ADD NEW PROJECT
      </Link>
    </ul>
  );
};

export default NewProject;
