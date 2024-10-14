import { useTitle } from "@/App";
import {
  fetchTasksFailure,
  fetchTasksStart,
  fetchTasksSuccess,
} from "@/Reducer/taskSlice";
import { Card, List, Tag } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import styles from "./Dashboard.module.css";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { tasks, loading } = useSelector((state) => state.tasks);
  const { user } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     dispatch(fetchTasksStart());
  //     try {
  //       const response = await axios.get(
  //         `${import.meta.env.VITE_API_URL}/tasks/user/${user.id}`
  //       );
  //       dispatch(fetchTasksSuccess(response.data));
  //     } catch (error) {
  //       dispatch(fetchTasksFailure(error.message));
  //     }
  //   };
  //   fetchTasks();
  // }, [dispatch, user.id]);

  const { setHeaderText } = useTitle();
  // setHeaderText("Welcome, " + user.name);
  setHeaderText("Welcome,");
  return (
    <>
      <Card title="Your Tasks" loading={loading}>
        <List
          dataSource={tasks}
          renderItem={(task) => (
            <List.Item>
              <List.Item.Meta
                title={task.title}
                description={task.description}
              />
              <Tag color={task.status === "completed" ? "green" : "blue"}>
                {task.status}
              </Tag>
            </List.Item>
          )}
        />
      </Card>
    </>
  );
};
