import { useState } from "react";
import { HMButton, HMCheckbox, HMInput, HMPasswordInput } from "@/components";
import { Link, useNavigate } from "react-router-dom";
import styles from "../Authentication.module.css";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "@/Reducer/authSlice";
import toast from "react-hot-toast";
import axios from "axios";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const onFinish = async (e) => {
    e.preventDefault();

    dispatch(loginStart());
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        { email, password }
      );
      dispatch(loginSuccess(response.data.user));
      toast.success("Login successful");
      navigate("/dashboard");
    } catch (error) {
      dispatch(loginFailure(error.response.data.message));
      toast.error("Login failed");
    }
  };

  return (
    <>
      <div className="w-100"></div>
      <div className="w-100">
        <div className={styles.AuthContentWrapper}>
          <h1 className="fw-semibold">Welcome</h1>
          <p>Please login here</p>
        </div>
        <form onSubmit={onFinish} className={styles.FromWrapper}>
          <div className={styles.FormInputWrapper}>
            <HMInput
              label={"Email Address"}
              placeholder={"Enter Your Email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <HMPasswordInput
              label={"Password"}
              placeholder={"Enter Your Password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="d-flex align-items-center justify-content-between">
              <HMCheckbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              >
                Remember Me
              </HMCheckbox>
              <Link to={"/forgot-password"}>Forgot Password?</Link>
            </div>
          </div>
          <HMButton variant={"primary"} block type="submit">
            Login
          </HMButton>
        </form>
      </div>
    </>
  );
};
