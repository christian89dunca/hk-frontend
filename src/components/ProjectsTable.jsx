import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "../common/table";

class ProjectsTable extends Component {
  columns = [
    { path: "id", label: "id" },
    {
      path: "projectTitle",
      label: "Project Title",
      content: project => <Link to={`/projects/${project.id}`}>{project.projectTitle}</Link>
    },
    { path: "start_date", label: "Start Date" },
    { path: "due_date", label: "Due Date" },
    
    {
      key: "delete",
      content: project => {
        if (this.props.user && this.props.user.isAdmin)
          return (
            <button
              onClick={() => this.props.onDelete(project)}
              className="btn btn-outline-danger btn-sm m-2"
            >
              Delete
            </button>
          );
        else return null;
      }
    }
  ];

  render() {
    const { projects, onSort, sortColumn } = this.props;

    return (
      <React.Fragment>
        <Table
          columns={this.columns}
          data={projects}
          sortColumn={sortColumn}
          onSort={onSort}
        />
      </React.Fragment>
    );
  }
}

export default ProjectsTable;
