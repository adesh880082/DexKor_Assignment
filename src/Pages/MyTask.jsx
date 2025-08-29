import React, { useState } from "react";
import FloatingCard from "../Components/Card";
import { MdOutlinePendingActions } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5";
import { TbCalendarDue } from "react-icons/tb";
import { RiChatFollowUpFill } from "react-icons/ri";
import { FaArrowDown } from "react-icons/fa";
import { IoCloudDownloadSharp } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { AiOutlineWallet } from "react-icons/ai";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import "./CssFiles/MyTask.css";
import TaskTable from "../Components/TaskTable";
import { TableData } from "../Data/data";

const MyTask = () => {
  const [tbl, setTbl] = useState("All");
  return (
    <div style={{ width: "100%" }}>
      {/* Card Section */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <FloatingCard
          logo={<MdOutlinePendingActions />}
          heading="Pending Tasks"
          count={60}
          colorReq="19, 116, 252" // blue
        />
        <FloatingCard
          logo={<IoWarningOutline />}
          heading="Overdue Tasks"
          count={56}
          colorReq="255, 0, 0" // red
        />
        <FloatingCard
          logo={<TbCalendarDue />}
          heading="Due For Today"
          count={0}
          colorReq="255, 165, 0" // orange
        />
        <FloatingCard
          logo={<RiChatFollowUpFill />}
          heading="Approaching Breach Tasks"
          count={1}
          colorReq="0, 128, 0" // green
        />
      </div>

      {/* Table Header Section 01 */}
      <div className="commonDiv_styles">
        {/* Left content */}
        <div style={{ display: "flex" }}>
          <div className="table-selection">
            <div
              className={`table-inner ${
                tbl == "All" ? "table-inner-Active" : ""
              }`}
              onClick={() => setTbl("All")}
            >
              All Tasks{" "}
              <span
                className={`count-spn ${
                  tbl == "All" ? "count-spn-active" : ""
                }`}
              >
                65
              </span>
            </div>
            <div
              className={`table-inner ${
                tbl == "Completed" ? "table-inner-Active" : ""
              }`}
              onClick={() => setTbl("Completed")}
            >
              Completed Tasks{" "}
              <span
                className={`count-spn ${
                  tbl == "Completed" ? "count-spn-active" : ""
                }`}
              >
                2
              </span>
            </div>
            <div
              className={`table-inner ${
                tbl == "Pending" ? "table-inner-Active" : ""
              }`}
              onClick={() => setTbl("Pending")}
            >
              Pending Tasks{" "}
              <span
                className={`count-spn ${
                  tbl == "Pending" ? "count-spn-active" : ""
                }`}
              >
                60
              </span>
            </div>
            <div
              className={`table-inner ${
                tbl == "Overdue" ? "table-inner-Active" : ""
              }`}
              onClick={() => setTbl("Overdue")}
            >
              Overdue Tasks{" "}
              <span
                className={`count-spn ${
                  tbl == "Overdue" ? "count-spn-active" : ""
                }`}
              >
                56
              </span>
            </div>
          </div>
          <div className="test">Test</div>
          <div className="select-container">
            <select>
              <option>...</option>
            </select>
          </div>
        </div>
        {/* Right side Content */}
        <div className="rightSideContent">
          <div
            className="common_right_div"
            style={{
              backgroundColor: "#1E4D92",
              color: "white",
              fontSize: "0.8rem",
            }}
          >
            <FaArrowDown />
          </div>
          <span className="separation"></span>
          <div
            className="common_right_div"
            style={{ backgroundColor: "lightblue" }}
          >
            <IoCloudDownloadSharp />
          </div>
          <span className="separation"></span>
          <div className="mostRightContent">
            <div className="special_cont">
              <TfiMenuAlt />
            </div>
            <div className="lastLogo">
              <AiOutlineWallet />
            </div>
          </div>
        </div>
      </div>

      {/* Table Header Section 02 */}
      <div className="commonDiv_styles">
        <div className="left_cont_02">
          <div className="inner-left-con-02">
            <div className="inner-cont-child_1">Task Owner</div>
            <div className="inner-cont-child_2">Success</div>

            <div
              style={{ marginLeft: "0.5rem" }}
              className="inner-cont-child_1"
            >
              Customer Name
            </div>
            <div className="inner-cont-child_2">{"..."}</div>

            <div
              style={{ marginLeft: "0.5rem" }}
              className="inner-cont-child_1"
            >
              Status
            </div>
            <div className="inner-cont-child_1_5">Status</div>
            <div className="inner-cont-child_2">Status</div>

            <div
              style={{ marginLeft: "0.5rem" }}
              className="inner-cont-child_1"
            >
              Status
            </div>
            <div className="inner-cont-child_1_5">Status</div>
            <div className="inner-cont-child_2">Status</div>

            <div className="plus">+</div>
            <div className="reset">Reset</div>
          </div>
        </div>
        <div className="right_cont_02">
          <div className="sv_cont">Save</div>
          <div className="sv_log"><HiMiniBars3BottomLeft /></div>
        </div>
      </div>

      {/* Table Section */}
      <div style={{marginTop: "1.5rem"}}>
        <TaskTable TableData={TableData} />
      </div>
    </div>
  );
};

export default MyTask;
