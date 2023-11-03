import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment, selectAssignment } from "./assignmentsReducer";
import { useNavigate, useParams, Link } from "react-router-dom";


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const { courseId } = useParams();
  const navigate = useNavigate();

  const selectedAssignment = useSelector((state) => state.assignments.selectedAssignment);
  const dispatch = useDispatch();
  

  const initialAssignment = {
    name: "",
    description: "",
    dueDate: new Date(),
    availableFromDate: new Date(),
    availableUntilDate: new Date(),
  };

  const [assignment, setAssignment] = useState(selectedAssignment || initialAssignment);

  const saveAssignment = () => {
    if (selectedAssignment) {
      // Update the assignment
      dispatch(updateAssignment(assignment));
    } else {
      // Add a new assignment
      dispatch(addAssignment(assignment));
    }
    // Reset form or navigate back to Assignments screen
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const cancel = () => {
    // Reset form or navigate back to Assignments screen
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div>
      <h2>Assignment Name</h2>
      <input
        value={assignment.name}
        className="form-control mb-2"
        onChange={(e) => setAssignment({ ...assignment, name: e.target.value })}
      />

      <h2>Assignment Description</h2>
      <textarea
        value={assignment.description}
        className="form-control mb-2"
        onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
      />

      <h2>Due Date</h2>
      <input
        type="date"
        value={assignment.dueDate}
        className="form-control mb-2"
        onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
      />

      <h2>Available From Date</h2>
      <input
        type="date"
        value={assignment.availableFromDate}
        className="form-control mb-2"
        onChange={(e) => setAssignment({ ...assignment, availableFromDate: e.target.value })}
      />

      <h2>Available Until Date</h2>
      <input
        type="date"
        value={assignment.availableUntilDate}
        className="form-control mb-2"
        onChange={(e) => setAssignment({ ...assignment, availableUntilDate: e.target.value })}
      />

      <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-danger">
        Cancel
      </Link>
      <button onClick={saveAssignment} className="btn btn-success me-2">
        Save
      </button>
    </div>
  );
}

export default AssignmentEditor;