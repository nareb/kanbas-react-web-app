import React from "react";
import { useState } from "react";
import db from "../Database";
import { Link } from "react-router-dom";

function Dashboard(
  {
    courses,
    newCourseName,
    editingCourseId,
    selectedCourse,
    setNewCourseName,
    setEditingCourseId,
    setSelectedCourse,
    handleCreateCourse,
    handleUpdateCourse,
    handleEditCourse,
    handleDeleteCourse,
  }
) {
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

              {editingCourseId === course._id ? (
                  <div>
                    <input
                      type="text"
                      value={selectedCourse.name}
                      onChange={(e) =>
                        setSelectedCourse({ ...selectedCourse, name: e.target.value })
                      }
                    />
                    <button
                      onClick={() => handleUpdateCourse(course._id, selectedCourse.name)}
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <div>

                

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
                )}

          
              

                <button onClick={() => handleEditCourse(course._id)}>Edit</button>
                <button onClick={() => handleDeleteCourse(course._id)}>Delete</button>
              
              </div>
            </div>
          </div>
        ))}
        </div>

      <div>
        <h3>Create New Course</h3>
        <input
          type="text"
          value={newCourseName}
          onChange={(e) => setNewCourseName(e.target.value)}
        />
        <button onClick={handleCreateCourse}>Create</button>
      </div>
    </div>
  );
}

export default Dashboard;