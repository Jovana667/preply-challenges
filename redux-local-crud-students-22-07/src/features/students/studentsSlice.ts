import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { loadStudents, saveStudents } from "./storage";
import type { StatusFilter, Student, StudentFormData } from "./types";

type StudentsState = {
  items: Student[];
  search: string;
  statusFilter: StatusFilter;
  editingId: string | null;
  form: StudentFormData;
  toast: string;
};

const emptyForm: StudentFormData = {
  name: "",
  email: "",
  course: "",
  age: "",
  status: "active",
};

const initialState: StudentsState = {
  items: loadStudents(),
  search: "",
  statusFilter: "all",
  editingId: null,
  form: emptyForm,
  toast: "",
};

function makeId() {
  return Math.random().toString(16).slice(2) + "-" + Date.now().toString(16);
}

function persist(items: Student[]) {
  saveStudents(items);
}

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setStatusFilter(state, action: PayloadAction<StatusFilter>) {
      state.statusFilter = action.payload;
    },
    updateFormField(
      state,
      action: PayloadAction<{ name: keyof StudentFormData; value: string }>,
    ) {
      const { name, value } = action.payload;
      state.form[name] = value as never;
      state.toast = "";
    },
    resetForm(state) {
      state.form = emptyForm;
      state.editingId = null;
    },
    addStudent(state) {
      const age = Number(state.form.age);
      if (
        !state.form.name.trim() ||
        !state.form.email.trim() ||
        !state.form.course.trim()
      ) {
        state.toast = "Please fill all required fields.";
        return;
      }
      if (!Number.isFinite(age) || age <= 0) {
        state.toast = "Age must be a valid number.";
        return;
      }
      const newStudent: Student = {
        id: makeId(),
        name: state.form.name.trim(),
        email: state.form.email.trim(),
        course: state.form.course.trim(),
        age,
        status: state.form.status,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      state.items.unshift(newStudent);
      state.form = emptyForm;
      state.toast = "Student added successfully.";
      persist(state.items);
    },
    startEdit(state, action: PayloadAction<string>) {
      const student = state.items.find((s) => s.id === action.payload);
      if (!student) return;
      state.editingId = student.id;
      state.form = {
        name: student.name,
        email: student.email,
        course: student.course,
        age: String(student.age),
        status: student.status,
      };
      state.toast = "";
    },
    saveEdit(state) {
      if (!state.editingId) return;
      const age = Number(state.form.age);
      if (
        !state.form.name.trim() ||
        !state.form.email.trim() ||
        !state.form.course.trim()
      ) {
        state.toast = "Please fill all required fields.";
        return;
      }
      if (!Number.isFinite(age) || age <= 0) {
        state.toast = "Age must be a valid number.";
        return;
      }
      state.items = state.items.map((student) =>
        student.id === state.editingId
          ? {
              ...student,
              name: state.form.name.trim(),
              email: state.form.email.trim(),
              course: state.form.course.trim(),
              age,
              status: state.form.status,
              updatedAt: Date.now(),
            }
          : student,
      );
      state.editingId = null;
      state.form = emptyForm;
      state.toast = "Student updated successfully.";
      persist(state.items);
    },
    cancelEdit(state) {
        state.editingId = null;
        state.form = emptyForm;
        state.toast = "Edit cancelled.";
    },
    deleteStudent(state, action: PayloadAction<string>) 
  },
});
