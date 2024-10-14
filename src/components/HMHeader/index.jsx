import { Layout } from "antd";
import { useTitle } from "../../App";
import clsx from "clsx";
import { Icons } from "@/constants";
import { useNavigate } from "react-router-dom";
import { HMButton, HMInput } from "@/components/";
import styles from "./HMHeader.module.css";

const { Header } = Layout;

export const HMHeader = () => {
  const navigate = useNavigate();
  const { headerText } = useTitle();
  return (
    <Header
      className={clsx(
        styles.header,
        "d-flex align-items-center justify-content-between"
      )}
    >
      <div className="d-flex align-items-center justify-content-center gap-xl">
        <HMButton
          // icon={collapsed ? Icons.NotificationBall : Icons.AllEmployees}
          className={"d-md-none"}
        />
        <h1 className="clr-dark fw-semibold">{headerText}</h1>
      </div>
      <div className="d-flex align-items-center justify-content-center gap-xl">
        <HMInput placeholder={"Search"} prefix={Icons.Search} />
        <HMButton
          icon={Icons.NotificationBall}
          onClick={() => navigate("/notifications")}
        />
      </div>
    </Header>
  );
};
