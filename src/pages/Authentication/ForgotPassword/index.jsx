import { Link } from "react-router-dom";
import clsx from "clsx";
import { Icons } from "@/constants";
import { HMButton, HMInput } from "@/components";
import styles from "../Authentication.module.css";

export const ForgotPassword = () => {
  return (
    <div className={clsx(styles.ForgotWrapper)}>
      <div className={styles.AuthLinkWrapper}>
        <Link to={"/login"}>{Icons.BackButton}Back</Link>
      </div>
      <div>
        <h1 className={clsx(styles.ForgotTitle)}>Forgot Password</h1>
        <p className={clsx(styles.ForgotText)}>
          Enter your registered email address. we&#39;ll send you a code to
          reset your password.
        </p>
      </div>
      <form action="" className={styles.FromWrapper}>
        <HMInput label={"Email Address"} placeholder={"Enter Your Email"} />
        <HMButton variant={"primary"} block>
          Send OTP
        </HMButton>
      </form>
    </div>
  );
};
