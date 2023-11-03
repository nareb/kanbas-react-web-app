import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";

const initialState = {
  assignments: db.assignments,
  selectedAssignment: null,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      // Add a new assignment to the assignments array.
      state.assignments.push(action.payload);
    },
    deleteAssignment: (state, action) => {
      // Delete an assignment by its ID.
      state.assignments = state.assignments.filter(
        (assignment) => assignment.id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      // Update an assignment by its ID.
      state.assignments = state.assignments.map((assignment) =>
        assignment.id === action.payload.id ? action.payload : assignment
      );
    },
    selectAssignment: (state, action) => {
      // Set the selected assignment for editing.
      state.selectedAssignment = action.payload;
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  selectAssignment,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;