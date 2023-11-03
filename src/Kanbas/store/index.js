import { configureStore } from '@reduxjs/toolkit';
import modulesReducer from '../Courses/Modules/modulesReducer';
import assignmentsReducer from "../Courses/Assignments/assignmentsReducer";

const store = configureStore({
  reducer: {
    modules: modulesReducer,
    assignments: assignmentsReducer,
  },
});

export default store;