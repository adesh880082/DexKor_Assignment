import { TbNotebook } from "react-icons/tb";
import { CiInboxIn } from "react-icons/ci";
import { PiGoogleChromeLogoBold } from "react-icons/pi";
import { TbDeviceAnalytics } from "react-icons/tb";
import { LuWallet } from "react-icons/lu";
import { IoMdContacts } from "react-icons/io";
import { GiShieldOpposition } from "react-icons/gi";
import { RiCustomerService2Line } from "react-icons/ri";
import { GiHealthCapsule } from "react-icons/gi";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdAllInbox } from "react-icons/md";
import MyTask from "../Pages/MyTask";
import MyInbox from "../Pages/MyInbox";
import Insights360 from "../Pages/Insights360";
import Dashboard from "../Pages/Dashboard";
import Payments from "../Pages/Payments";
import Contact from "../Pages/Contact";
import Opportunity from "../Pages/Opportunity";
import Customer from "../Pages/Customer";
import Health from "../Pages/Health";
import NPS from "../Pages/NPS";
import Tickets from "../Pages/Tickets";

export const list = [
  { name: "My Task", logo: <TbNotebook />, component: <MyTask /> },
  { name: "My Inbox", logo: <CiInboxIn />, component: <MyInbox /> },
  {
    name: "Insight 360",
    logo: <PiGoogleChromeLogoBold />,
    component: <Insights360 />,
  },
  { name: "Dashboard", logo: <TbDeviceAnalytics />, component: <Dashboard /> },
  { name: "Payment", logo: <LuWallet />, component: <Payments /> },
  { name: "Contact", logo: <IoMdContacts />, component: <Contact /> },
  {
    name: "Opportunity",
    logo: <GiShieldOpposition />,
    component: <Opportunity />,
  },
  {
    name: "Customers",
    logo: <RiCustomerService2Line />,
    component: <Customer />,
  },
  { name: "Health", logo: <GiHealthCapsule />, component: <Health /> },
  { name: "NPS", logo: <BsGraphUpArrow />, component: <NPS /> },
  { name: "Tickets", logo: <MdAllInbox />, component: <Tickets /> },
];

export const TableData = [
  {
    CustomerName: "AVF",
    CustomerCode: "VBN-123",
    TaskID: "TS-6465",
    Title: "Task Title",
    Status: "Cancelled",
    Priority: "Low",
    Type: "",
    Description: "This is test task by me",
    Action: "",
  },
  {
    CustomerName: "AVF",
    CustomerCode: "VBN-123",
    TaskID: "TS-6464",
    Title: "Task Title",
    Status: "Completed",
    Priority: "Medium",
    Type: "",
    Description: "Testing",
    Action: "",
  },
  {
    CustomerName: "AVF",
    CustomerCode: "VBN-123",
    TaskID: "TS-6463",
    Title: "Task Title",
    Status: "Completed",
    Priority: "Critical",
    Type: "",
    Description: "Checking Task Description",
    Action: "",
  },
  {
    CustomerName: "AVF",
    CustomerCode: "VBN-123",
    TaskID: "TS-6462",
    Title: "Task Title",
    Status: "Pending",
    Priority: "High",
    Type: "",
    Description: "Another Description",
    Action: "",
  },
  {
    CustomerName: "AVF",
    CustomerCode: "VBN-123",
    TaskID: "TS-6461",
    Title: "Task Title",
    Status: "Pending",
    Priority: "Medium",
    Type: "",
    Description: "Great work",
    Action: "",
  },
  {
    CustomerName: "AVF",
    CustomerCode: "VBN-123",
    TaskID: "TS-6365",
    Title: "Task Title",
    Status: "Pending",
    Priority: "Medium",
    Type: "",
    Description: "Doing Well",
    Action: "",
  },
  {
    CustomerName: "AVF",
    CustomerCode: "VBN-123",
    TaskID: "TS-6364",
    Title: "Task Title",
    Status: "Pending",
    Priority: "Critical",
    Type: "",
    Description: "This is test task by me",
    Action: "",
  },
  {
    CustomerName: "AVF",
    CustomerCode: "VBN-123",
    TaskID: "TS-6363",
    Title: "Task Title",
    Status: "Pending",
    Priority: "Critical",
    Type: "",
    Description: "Testing",
    Action: "",
  },
  {
    CustomerName: "AVF",
    CustomerCode: "VBN-123",
    TaskID: "TS-6362",
    Title: "Task Title",
    Status: "Completed",
    Priority: "High",
    Type: "",
    Description: "Checking Task Description",
    Action: "",
  },
  {
    CustomerName: "AVF",
    CustomerCode: "VBN-123",
    TaskID: "TS-6361",
    Title: "Task Title",
    Status: "Completed",
    Priority: "High",
    Type: "",
    Description: "Another Description",
    Action: "",
  },
  {
    CustomerName: "AVF",
    CustomerCode: "VBN-123",
    TaskID: "TS-6360",
    Title: "Task Title",
    Status: "Completed",
    Priority: "Low",
    Type: "",
    Description: "Great work",
    Action: "",
  },
  {
    CustomerName: "AVF",
    CustomerCode: "VBN-123",
    TaskID: "TS-6265",
    Title: "Task Title",
    Status: "Cancelled",
    Priority: "Low",
    Type: "",
    Description: "Doing Well",
    Action: "",
  },
  {
    CustomerName: "AVF",
    CustomerCode: "VBN-123",
    TaskID: "TS-6264",
    Title: "Task Title",
    Status: "Cancelled",
    Priority: "Medium",
    Type: "",
    Description: "This is test task by me",
    Action: "",
  },
  {
    CustomerName: "AVF",
    CustomerCode: "VBN-123",
    TaskID: "TS-6263",
    Title: "Task Title",
    Status: "Completed",
    Priority: "Low",
    Type: "",
    Description: "Testing",
    Action: "",
  },
  {
    CustomerName: "AVF",
    CustomerCode: "VBN-123",
    TaskID: "TS-6262",
    Title: "Task Title",
    Status: "Completed",
    Priority: "Low",
    Type: "",
    Description: "Checking Task Description",
    Action: "",
  },
  {
    CustomerName: "AVF",
    CustomerCode: "VBN-123",
    TaskID: "TS-6261",
    Title: "Task Title",
    Status: "PEnding",
    Priority: "Low",
    Type: "",
    Description: "Another Description",
    Action: "",
  },
  {
    CustomerName: "AVF",
    CustomerCode: "VBN-123",
    TaskID: "TS-6260",
    Title: "Task Title",
    Status: "Pending",
    Priority: "Low",
    Type: "",
    Description: "Great work",
    Action: "",
  },
  {
    CustomerName: "AVF",
    CustomerCode: "VBN-123",
    TaskID: "TS-6165",
    Title: "Task Title",
    Status: "Pending",
    Priority: "Low",
    Type: "",
    Description: "Doing Well",
    Action: "",
  },
];
