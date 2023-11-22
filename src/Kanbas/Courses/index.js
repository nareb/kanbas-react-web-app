import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Routes, Route, Navigate } from "react-router-dom";

//import JsonPre from "../../Labs/a3/JsonPre";

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

function Courses({}) {
  const { courseId } = useParams();
  const URL = "http://localhost:4000/api/courses";

  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
  const response = await axios.get(
  `${URL}/${courseId}`
  );
    setCourse(response.data);
  };
  useEffect(() => {
  findCourseById(courseId);
  }, [courseId]);

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