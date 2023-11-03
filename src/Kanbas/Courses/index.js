import React from "react";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState } from "react";
//import JsonPre from "../../Labs/a3/JsonPre";
import db from "../Database";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import People from "./People";
import Piazza from "./Piazza";
import Quizzes from "./Quizzes";
import ZoomMeetings from "./ZoomMeetings";

function Courses({courses}) {
  const { courseId } = useParams();

  const course = courses.find((course) => course._id === courseId);

  return (
    <div>
      <h1>{course.name}</h1>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<Piazza/>} />
            <Route path="ZoomMeetings" element={<ZoomMeetings/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}
            />
            <Route path="Quizzes" element={<Quizzes/>} />
            <Route path="Grades" element={<Grades/>} />
            <Route path="People" element={<People/>} />
          </Routes>
        </div>
      </div>

    </div>
  );
}

export default Courses;