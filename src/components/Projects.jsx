import React, { Component } from "react";
import _ from "lodash";
import Pagination from "../common/pagination";
import NewProject from "./newProject";
import ProjectsTable from "./ProjectsTable";
import SearchBar from "../common/searchBar";
import CreateProject from "./CreateProject";
import { paginate } from "../services/paginate";
import { getProjects, deleteProject } from "../services/projectsServices";

class Projects extends Component {
  state = {
    projects: [],
    pageSize: 10,
    currentPage: 1,
    searchQuery: "",
    sortColumn: { path: "due_date", order: "asc" }
  };

  async componentDidMount() {
    const { data: projects } = await getProjects();
    this.setState({projects});
    console.log(this.state)
  }

  handleDelete = async project => {
    const originalProjects = this.state.projects;
    const projects = originalProjects.filter(project => project.id !== project.id);
    this.setState({ projects });

    try {
      await deleteProject(project.id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        alert("This project have already been deleted");

      this.setState({ projects: originalProjects });
    }
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      searchQuery,
      projects: allProjects
    } = this.state;

    let filtered = allProjects;
    if (searchQuery)
      filtered = allProjects.filter(project =>
        project.projectTitle.toUpperCase().startsWith(searchQuery.toUpperCase())
      );

    const sortedColumn = _.orderBy(
      filtered,
      [sortColumn.path],
      [sortColumn.order]
    );

    const projects = paginate(sortedColumn, currentPage, pageSize);

    return { totalCount: filtered.length, data: projects };
  };

  render() {
    const { length: count } = this.state.projects;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
    const { project } = this.props;

    if (count === 0) return <p>There are no Projects in the Data Base</p>;

    const { totalCount, data: projects } = this.getPagedData();

    return (
      <React.Fragment>
        <h3 style={{textAlign: "center"}}>List of projects</h3>
        <p style={{ display: "flex", justifyContent: "center" }}>
          There are {totalCount} projects in In the Data Base
        </p>
        <div className="row">
          <div className="col-3">
            
            {project && <NewProject />}
          </div>

          <div className="col-6">
            <SearchBar
              value={searchQuery}
              onChange={this.handleSearch}
              // data={this.state.projects}
            />
            <ProjectsTable
              project={project}
              projects={projects}
              sortColumn={sortColumn}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>

        <CreateProject />
      </React.Fragment>
    );
    
  } 
}

export default Projects;
