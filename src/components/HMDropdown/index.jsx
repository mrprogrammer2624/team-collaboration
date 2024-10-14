import { Dropdown } from "antd";
import clsx from "clsx";
import { Icons } from "@/constants";
import { HMButton } from "@/components/";
import styles from "./HMDropdown.module.css";

export const HMDropdown = ({
  onClick,
  dropdownMenu,
  children,
  className,
  rootClassName,
  placement,
  trigger,
  expandIcon,
  ...rest
}) => {
  return (
    <Dropdown
      menu={{
        items: dropdownMenu,
        expandIcon: expandIcon ? expandIcon : Icons.DropdownArrowRight,
        onClick: onClick,
        className: styles.dropdownMenu,
        rootClassName: styles.dropdownSubMenu,
      }}
      trigger={trigger}
      className={className}
      rootClassName={clsx(styles.dropdown, rootClassName)}
      {...rest}
      placement={placement}
    >
      <HMButton>{children}</HMButton>
    </Dropdown>
  );
};
