import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import { getProjects, saveProject } from '../services/projectsServices';

class ProjectForm extends Form {
  state = {
    data: { title: "", genreId: "", numberInStock: "", dailyRentalRate: "" },
    genres: [],
    errors: {}
  };

  schema = {
    id: Joi.string(),
    projectTitle: Joi.string()
      .required()
      .min(1)
      .max(50)
      .label("Title"),
    start_date: Joi.date()
      .required()
      .label("Start Date"),
    due_date: Joi.date()
      .required()
      .label("Due Date"),
    projectDetails: Joi.String()
      .required()
      .min(1)
      .max(150)
      .label("Project Details")
  };


  async populateProject() {
    try {
      const projectID = this.props.match.params.id;
      if (projectID === "new") return;
      const { data: project } = await getProjects(projectID);
      this.setState({ data: this.mapToViewModel(project) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        return this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    await this.populateProject();
    console.log(this.state.data);
  }

  mapToViewModel(project) {
    return {
      id: project.id,
      projectTitle: project.projectTitle,
      start_date: project.start_date,
      due_date: project.due_date,
      projectDetails: project.projectDetails
    };
  }

  doSubmit = async () => {
    await saveProject(this.state.data);

    this.props.history.push("/project");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("projectTitle", "Project Title")}
          {this.renderInput("start_date", "Start Date")}
          {this.renderInput("due_date", "Due Date")}
          {this.renderInput("projectDetails", "Project Details")}
          {this.renderButton("Create Project")}
        </form>
      </div>
    );
  }
}

export default ProjectForm;
