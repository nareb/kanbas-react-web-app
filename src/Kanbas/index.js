import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
import db from "./Database";


function Kanbas() {
  const [courses, setCourses] = useState([]);
  const URL = "http://localhost:4000/api/courses";

  const findAllCourses = async () => {
  const response = await axios.get(URL);
  setCourses(response.data);
  };

  useEffect(() => {
  findAllCourses();
  }, []);

  const addCourse = async () => {
    const response = await axios.post(URL, courses);
    setCourses([
      response.data,
      courses,
    ]);
    setCourses({ name: "New Course" });
  };

  const deleteCourse = async (course) => {
    const response = await axios.delete(
      `${URL}/${course._id}`
    );
    setCourses(course.filter(
      (c) => c._id !== course._id));
  };

  const updateCourse = async (course) => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
return c; })
);
    setCourses({ name: "" });
  };

  const [newCourseName, setNewCourseName] = useState("");
  const [newCourseNumber, setNewCourseNumber] = useState("");
  const [editingCourseId, setEditingCourseId] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });

  const handleCreateCourse = () => {
    if (newCourseName) {
      const newCourse = {
        _id: new Date().getTime(),
        name: newCourseName,
        number: newCourseNumber,
      };
      setCourses([...courses, newCourse]);
      setNewCourseName("");
      setNewCourseNumber("");
    }
  };

  const handleUpdateCourse = (id, newName, newNumber) => {
    const updatedCourses = courses.map((course) => {
      if (course._id === id) {
        return { ...course, name: newName, number: newNumber };
      }
      return course;
    });
    setCourses(updatedCourses);
    setEditingCourseId(null);
  };

  const handleDeleteCourse = (id) => {
    const updatedCourses = courses.filter((course) => course._id !== id);
    setCourses(updatedCourses);
  };

  return (
    <div className="d-flex">
      <KanbasNavigation />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<Account />} />
          <Route
            path="Dashboard"
            element={
              <Dashboard
                courses={courses}
                newCourseName={newCourseName}
                newCourseNumber={newCourseNumber}
                editingCourseId={editingCourseId}
                selectedCourse={selectedCourse}
                setNewCourseName={setNewCourseName}
                setNewCourseNumber={setNewCourseNumber}
                setEditingCourseId={setEditingCourseId}
                setSelectedCourse={setSelectedCourse}
                handleCreateCourse={handleCreateCourse}
                handleUpdateCourse={handleUpdateCourse}
                handleDeleteCourse={handleDeleteCourse}
              />
            }
          />
          <Route
            path="Courses/:courseId/*"
            element={<Courses courses={courses} />} // Pass courses as a prop
          />
          <Route path="Group" element={<h1>Group</h1>} />
          <Route path="Calendar" element={<h1>Calendar</h1>} />
          <Route path="Inbox" element={<h1>Inbox</h1>} />
          <Route path="History" element={<h1>History</h1>} />
          <Route path="Studio" element={<h1>Studio</h1>} />
          <Route path="Help" element={<h1>Help</h1>} />

        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;