import React, { Component } from 'react';
import { postProject } from '../services/projectsServices';
import "../App.css"

class ManageProjects extends Component {
    constructor(props){ 
        super(props) 
        this.state = {  
            projectTitle: null,
            start_date: null,
            due_date: null,
            projectDetails: null
         }
        this.handleChange = this.handleChange.bind(this) 
        this.handleSubmit = this.handleSubmit.bind(this) 
      } 
   

    handleSubmit = (e) => {
        e.preventDefault()
        document.getElementById('form').reset();
        this.setState({})
        this.doSubmit()
    }

    handleDelete = (e) => {
        e.preventDefault()
        // projects.splice();
        this.setState({})
        console.log(e.target);
    }


    handleChange(e){ 
        this.setState({ 
            ...this.state,
          [e.target.name] : e.target.value 
        }) 
      } 
     
      doSubmit = async () => {
        await postProject(this.state.data);
    
        // this.props.history.push("/")
      };

    //   export function saveProject(project) {
    //     if (project.id) {
    //       const body = { ...project };
    //       delete body.id;
    //       return http.put(projectUrl(project._id), body);
    //     }
      
    //     return http.post(apiEndpoint, project);
    //   }

    render() { 


        return ( 
            <React.Fragment>  
                <div className="project-form">
                <form id="form">
                    <div className="inline-form">
                    <div className="form-group S30">
                        <label for="text" className="col-form-label">Project Title</label>
                        <input type="text" className="form-control" name="projectTitle" value={this.state.projectTitle} onChange={this.handleChange} ref={this.projectTitle} placeholder="Project title"></input>
                    </div>

                    <div className="form-group">
                        <label for="date" className="col-form-label">Start Date</label>
                        <input type="date" className="form-control" name="start_date" value={this.state.start_date} onChange={this.handleChange} ref={this.start_date}></input>
                    </div>

                    <div className="form-group">
                        <label for="date" className="col-form-label">Due Date</label>
                        <input type="date" className="form-control" name="due_date" value={this.state.due_date} onChange={this.handleChange} ref={this.due_date}></input>
                    </div>
                    
                    <div className="form-group S60">
                        <label for="text" className="col-form-label">Project Details</label>
                        <textarea className="form-control" name="projectDetails" value={this.state.projectDetails} onChange={this.handleChange} ref={this.projectDetails} rows="3"></textarea>
                    </div>
                    </div>
                    <button id="submit-btn" type="submit" className="btn btn-danger S20" onClick={this.handleSubmit}>Create Project</button>
                </form>
                    
                </div>
                

            </React.Fragment>
         );

         
    }
    
}
 
export default ManageProjects;