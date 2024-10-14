import { Icons } from "@constants";
import clsx from "clsx";
import styles from "./HMLoader.module.css";

export const HMLoader = ({ className }) => {
  return (
    <>
      <div className={clsx(styles.loaderWrapper, className)}>
        <div className={styles.loaderIcon}>{Icons.HourglassDuotone}</div>
      </div>
    </>
  );
};
