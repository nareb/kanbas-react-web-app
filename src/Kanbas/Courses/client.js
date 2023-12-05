import axios from "axios";

//const URL = "https://kanbas-node-server-app-fa23-93c731197fdb.herokuapp.com/api/courses"
const API_BASE = process.env.REACT_APP_API_BASE;
const MODULES_URL = `${API_BASE}/modules`;
const COURSES_URL = `${API_BASE}/courses`;

console.log("API_BASE:", API_BASE);
console.log("COURSES_URL:", COURSES_URL);
console.log("MODULES_URL:", MODULES_URL);

export const fetchCourses = async () => {
  // const promise = axios.get("http://localhost:4000/api/courses");
  // promise.then((response) => {
  //   setCourses(response.data);
  // });

  const response = await axios.get(COURSES_URL);
  return response.data;
};

export const fetchCourse = async (id) => {
  const response = await axios.get(`${COURSES_URL}/${id}`);
  return response.data;
};

export const deleteCourse = async (id) => {
  const response = await axios.delete(
    `${COURSES_URL}/${id}`
  );
  return response.data;
};

export const updateCourse = async (course) => {
  const response = await axios.put(
    `${COURSES_URL}/${course._id}`,
    course
  );
  return response.data;
};

export const addCourse = async (course) => {
  const response = await axios.post(
    COURSES_URL,
    course
  );
  return response.data;
};