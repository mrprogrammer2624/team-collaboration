import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/Reducer/authSlice";
import taskReducer from "@/Reducer/taskSlice";
import chatReducer from "@/Reducer/chatSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
    chat: chatReducer,
  },
});
