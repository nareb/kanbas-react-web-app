import React from "react";
import db from "../Database";
import { Link } from "react-router-dom";

function Dashboard() {
  const courses = db.courses;

  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {courses.map((course, index) => (
          <div className="col" key={course._id}>
            <div className="card h-100">
              <img src="/images/react.png" className="card-img-top" alt="..." />
              <div className="card-body">
                

                <Link
                  to={`/Kanbas/Courses/${course._id}`}
                  className="btn btn-primary"
                >
                  {course.name}
                </Link>
                <p className="card-text">
                <h6 className="card-title">{course.number}</h6>
                  2023 Fall Semester
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;