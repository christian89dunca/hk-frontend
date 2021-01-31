// import React, { Component } from 'react';

// const Modal = (props) => {
//     return ( 
//         <React.Fragment>
//             {/* Button trigger modal */}
//             <button type="button" className="btn btn-outline-secondary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Manage</button>
                                
//                                 {/* Modal */}
//                                 <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                                 <div className="modal-dialog modal-dialog-centered" role="document">
//                                     <div className="modal-content">
//                                     <div className="modal-header">
//                                         <h5 className="modal-title" id="exampleModalLabel">Edit Project</h5>
//                                         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                                         <span aria-hidden="true">&times;</span>
//                                         </button>
//                                     </div>
//                                     <div className="modal-body">
//                                         <form>
//                                             <div className="form-group">
//                                                 <label for="title" className="col-form-label">Project Title</label>
//                                                 <input type="text" className="form-control" name="projectTitle" value={props.projectTitle} onChange={props.handleChange} placeholder="Project title"></input>
//                                                 </div>

//                                                 <div className="form-group">
//                                                 <label for="date" className="col-form-label">Start Date</label>
//                                                 <input type="date" className="form-control" name="start_date" value={props.start_date} onChange={props.handleChange} ></input>
//                                                 </div>

//                                                 <div className="form-group">
//                                                 <label for="date" className="col-form-label">Due Date</label>
//                                                 <input type="date" className="form-control" name="due_date" value={props.due_date} onChange={props.handleChange} ></input>
//                                                 </div>
                                            
//                                                 <div className="form-group">
//                                                 <label for="text" className="col-form-label">Project Details</label>
//                                                 <textarea className="form-control" name="projectDetails" value={props.projectDetails} onChange={props.handleChange}  rows="3"></textarea>
//                                             </div>
//                                         </form>
//                                     </div>
//                                     <div className="modal-footer">
//                                         <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Close</button>
//                                         <button type="button" className="btn btn-outline-primary">Apply</button>
//                                     </div>
//                                     </div>
//                                 </div>
//                                 </div>
//         </React.Fragment>
//      );
// }
 
// export default Modal;