// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   user: null,
//   isAuthenticated: false,
//   loading: false,
//   error: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     loginStart: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     loginSuccess: (state, action) => {
//       state.isAuthenticated = true;
//       state.user = action.payload;
//       state.loading = false;
//     },
//     loginFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     logout: (state) => {
//       state.isAuthenticated = false;
//       state.user = null;
//     },
//   },
// });

// export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

// export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const fakeUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    password: "password123",
    role: "user",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    password: "password456",
    role: "admin",
  },
];

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  authSlice.actions;

export const login = (email, password) => async (dispatch) => {
  dispatch(loginStart());

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const user = fakeUsers.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    const { password, ...userWithoutPassword } = user;
    dispatch(loginSuccess(userWithoutPassword));
  } else {
    dispatch(loginFailure("Invalid email or password"));
  }
};

export default authSlice.reducer;
