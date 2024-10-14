import { Link } from "react-router-dom";
import { Avatar, Tag } from "antd";

function getItem(label, key, path) {
  return {
    key,
    label: path ? <Link to={path}>{label}</Link> : label,
  };
}

export const DashboardAsideMenu = [
  getItem("Dashboard", "/", "/"),
  getItem("ChatRoom", "/chat-room", "/chat-room"),
  getItem("Settings", "/settings", "/settings"),
];

export const columns = [
  {
    title: "Employee Name",
    dataIndex: "name",
    key: "name",
    render: (text) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar style={{ backgroundColor: "#87d068", marginRight: 8 }}>
          {text[0]}
        </Avatar>
        {text}
      </div>
    ),
  },
  {
    title: "Designation",
    dataIndex: "designation",
    key: "designation",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Check In Time",
    dataIndex: "checkInTime",
    key: "checkInTime",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => {
      let color = "";
      switch (status.toLowerCase()) {
        case "on time":
          color = "var(--clr-success)";
          break;
        case "late":
          color = "var(--clr-error)";
          break;
      }
      return (
        <Tag color={color} key={status}>
          {status.toUpperCase()}
        </Tag>
      );
    },
  },
];

export const data = [
  {
    key: "2",
    name: "Jim Green",
    designation: "Project Manager",
    type: "Part-time",
    checkInTime: "09:10 AM",
    status: "Late",
  },
  {
    key: "3",
    name: "Joe Black",
    designation: "UI Designer",
    type: "Contract",
    checkInTime: "08:55 AM",
    status: "On time",
  },
  {
    key: "4",
    name: "Sarah White",
    designation: "HR Manager",
    type: "Full-time",
    checkInTime: "09:15 AM",
    status: "Late",
  },
  {
    key: "5",
    name: "Chris Green",
    designation: "Backend Developer",
    type: "Full-time",
    checkInTime: "08:50 AM",
    status: "On time",
  },
  {
    key: "6",
    name: "Sophia Brown",
    designation: "QA Engineer",
    type: "Contract",
    checkInTime: "09:20 AM",
    status: "Late",
  },
  {
    key: "7",
    name: "Henry Jones",
    designation: "Data Analyst",
    type: "Full-time",
    checkInTime: "09:00 AM",
    status: "On time",
  },
  {
    key: "8",
    name: "Emily Davis",
    designation: "Frontend Developer",
    type: "Part-time",
    checkInTime: "09:25 AM",
    status: "Late",
  },
  {
    key: "9",
    name: "Michael Scott",
    designation: "Sales Manager",
    type: "Full-time",
    checkInTime: "08:45 AM",
    status: "On time",
  },
  {
    key: "1",
    name: "John Brown",
    designation: "Software Developer",
    type: "Full-time",
    checkInTime: "09:00 AM",
    status: "On time",
  },
  {
    key: "10",
    name: "Olivia Johnson",
    designation: "Product Owner",
    type: "Full-time",
    checkInTime: "09:05 AM",
    status: "On time",
  },
  {
    key: "9",
    name: "Michael Scott",
    designation: "Sales Manager",
    type: "Full-time",
    checkInTime: "08:45 AM",
    status: "On time",
  },
  {
    key: "10",
    name: "Olivia Johnson",
    designation: "Product Owner",
    type: "Full-time",
    checkInTime: "09:05 AM",
    status: "On time",
  },
];

// * Notification Data * //
export const notificationsListing = [
  {
    title: "Leave Request",
    description: "@Econev Fox has applied for leave",
    time: "Just Now",
  },
  {
    title: "Check In Issue",
    description: "@Dina shared a message regarding check in issue",
    time: "11:16 AM",
  },
  {
    title: 'Applied job for "Sales Manager" Position',
    description: "@Vasilisa has applied for job",
    time: "09:00 AM",
  },
  {
    title: "Robert Fox has share his feedback",
    description: '"It was an amazing experience with your organisation"',
    time: "Yesterday",
  },
  {
    title: "Password Update successfully",
    description: "Your password has been updated successfully",
    time: "Yesterday",
  },
];
