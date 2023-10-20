import db from "../../Database";
import { useParams } from "react-router-dom";
function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
      <h1>Grades</h1>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
            <th>Student Name</th>
            {assignments.map((assignment) => (<th key={assignment.id}>{assignment.title}</th>))}
            </tr>
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              const userId = user._id;
              return (
                <tr key={userId}>
                   <td>{user.firstName} {user.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = db.grades.find(
                       (grade) => grade.student === userId && grade.assignment === assignment._id);
                   return (<td key={assignment._id}>{grade?.grade || ""}</td>);
                   })}
                       
                </tr>);
            })}
          </tbody></table>
      </div></div>);
}
export default Grades;