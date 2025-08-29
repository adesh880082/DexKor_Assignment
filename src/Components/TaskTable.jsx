import React, { useState } from "react";
import "./TaskTable.css";
import { FaExpandAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FaCodeMerge } from "react-icons/fa6";
import { LiaDumbbellSolid } from "react-icons/lia";
import { FaBold } from "react-icons/fa6";
import { FaItalic } from "react-icons/fa";
import { FaUnderline } from "react-icons/fa6";
import { MdEmojiEmotions } from "react-icons/md";
import { LuLink } from "react-icons/lu";
import { TbMessageCircleFilled } from "react-icons/tb";

// Possible states for cycling
const priorityStates = ["Low", "Medium", "High", "Critical"];
const statusStates = ["Pending", "Completed", "Cancelled"];

const TaskTable = ({ TableData }) => {
  const [data, setData] = useState(TableData);
  const [selectedRows, setSelectedRows] = useState([]);
  const [modalRow, setModalRow] = useState(null);
  const [modalMenu, setModalMenu] = useState("Description");

  // Toggle checkbox
  const handleCheckboxChange = (taskID) => {
    setSelectedRows((prev) =>
      prev.includes(taskID)
        ? prev.filter((id) => id !== taskID)
        : [...prev, taskID]
    );
  };

  // Cycle Priority
  const handlePriorityClick = (e, index) => {
    e.stopPropagation();
    setData((prev) => {
      const newData = [...prev];
      const current = newData[index].Priority;
      const next =
        priorityStates[
          (priorityStates.indexOf(current) + 1) % priorityStates.length
        ];
      newData[index].Priority = next;
      return newData;
    });
  };

  // Cycle Status
  const handleStatusClick = (e, index) => {
    e.stopPropagation();
    setData((prev) => {
      const newData = [...prev];
      const current = newData[index].Status;
      const next =
        statusStates[(statusStates.indexOf(current) + 1) % statusStates.length];
      newData[index].Status = next;
      return newData;
    });
  };

  return (
    <div className="table-container">
      <table className="task-table">
        {/* Sticky Header */}
        <thead>
          <tr>
            <th style={{ borderTopLeftRadius: "20px" }}></th>
            {Object.keys(TableData[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              onClick={() => setModalRow(row)}
              className="table-row"
            >
              {/* Checkbox */}
              <td>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(row.TaskID)}
                  onChange={() => handleCheckboxChange(row.TaskID)}
                  onClick={(e) => e.stopPropagation()}
                />
              </td>

              {Object.keys(row).map((key) => {
                if (key === "Priority") {
                  return (
                    <td
                      key={key}
                      onClick={(e) => handlePriorityClick(e, index)}
                      style={{ textAlign: "center" }}
                    >
                      <span
                        className={`priority-badge ${row.Priority.toLowerCase()}`}
                      >
                        {row.Priority}
                      </span>
                    </td>
                  );
                }
                if (key === "Status") {
                  return (
                    <td
                      key={key}
                      onClick={(e) => handleStatusClick(e, index)}
                      style={{ textAlign: "center" }}
                    >
                      <span
                        className={`status-badge ${row.Status.toLowerCase()}`}
                      >
                        {row.Status}
                      </span>
                    </td>
                  );
                }
                return <td key={key}>{row[key]}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {modalRow && (
        <div className="modal-overlay" onClick={() => setModalRow(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="modalHeader">
              <div style={{ display: "flex", alignItems: "center" }}>
                <div className="nmLog_modal">A</div>
                <div className="nm_modal">
                  {modalRow.CustomerName}-{modalRow.TaskID}
                </div>
              </div>
              <div className="logoContainerRightModal">
                <span className="logo_right_modal">
                  <FaExpandAlt />
                </span>
                <span
                  className="logo_right_modal_2"
                  onClick={() => setModalRow(null)}
                >
                  <RxCross2 />
                </span>
              </div>
            </div>
            {/* Intro Section */}
            <div className="container_inside_Modal">
              <div className="introCont_modal">
                Task name <span className="span_modal">{modalRow.Title}</span>
              </div>
              <div className="introCont_modal_2">
                Deadline - Created date
                <span className="span_modal" style={{ marginRight: "1rem" }}>
                  25-Jul-2025
                </span>
                Status{" "}
                <span
                  className={`status_modal ${modalRow.Status.toLowerCase()}`}
                >
                  {modalRow.Status}
                </span>
              </div>
              <div className="introCont_modal_2" style={{ marginTop: "2rem" }}>
                Priority{" "}
                <span
                  className={`priority_modal ${modalRow.Priority.toLowerCase()}`}
                >
                  {modalRow.Priority}
                </span>
                <span style={{ marginLeft: "1rem" }}>Owner</span>
                <span className="outsideSpan">
                  <span className="insideSpan">T</span>
                  Adesh Shri...
                </span>
              </div>
            </div>
            {/* Menu section */}
            <div className="modalMenuSection">
              <div
                className={`menuModalDiv ${
                  modalMenu == "Description" ? "active_Menu" : ""
                }`}
                onClick={() => setModalMenu("Description")}
              >
                Description
              </div>
              <div
                className={`menuModalDiv ${
                  modalMenu == "Notes" ? "active_Menu" : ""
                }`}
                onClick={() => setModalMenu("Notes")}
              >
                Notes
              </div>
              <div
                className={`menuModalDiv ${
                  modalMenu == "Events" ? "active_Menu" : ""
                }`}
                onClick={() => setModalMenu("Events")}
              >
                Events
              </div>
              <div
                className={`menuModalDiv ${
                  modalMenu == "Tickets" ? "active_Menu" : ""
                }`}
                onClick={() => setModalMenu("Tickets")}
              >
                Tickets
              </div>
            </div>
            <div className="Content_of_Modal">
              {modalMenu == "Description" ? (
                <div
                  style={{
                    paddingLeft: "10px",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    letterSpacing: "1px",
                    wordSpacing: "3px",
                    marginTop: "1rem",
                  }}
                >
                  A quick brown fox jumps over the lazy dog. Swift moves, simple
                  flow, seamless results. Fast, reliable, and built with care.
                  Clean design, smooth performance, easy interaction.
                </div>
              ) : modalMenu == "Notes" ? (
                <div className="Notes_Container">
                  <div className="input_Container">
                    <div className="textarea_Div">
                      <textarea />
                    </div>
                    <div className="editingOption">
                      <div
                        style={{
                          display: "flex",
                          gap: "1rem",
                          color: "grey",
                          fontSize: "0.9rem",
                        }}
                      >
                        <span style={{ cursor: "pointer" }}>
                          <FaBold />
                        </span>
                        <span style={{ cursor: "pointer" }}>
                          <FaItalic />
                        </span>
                        <span style={{ cursor: "pointer" }}>
                          <FaUnderline />
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                          color: "grey",
                          fontSize: "0.9rem",
                        }}
                      >
                        <span style={{ cursor: "pointer" }}>
                          <MdEmojiEmotions />
                        </span>
                        <span style={{ cursor: "pointer" }}>
                          <LuLink />
                        </span>
                        <span
                          style={{
                            padding: "5px 8px",
                            borderRadius: "5px",
                            cursor: "pointer",
                            border: "1px solid grey",
                            marginRight: "1rem",
                            backgroundColor: "white",
                          }}
                        >
                          Publish
                        </span>
                      </div>
                    </div>
                    <div className="afterEditing">
                      <div
                        style={{
                          marginTop: "1rem",
                          fontSize: "1.5rem",
                          color: "grey",
                        }}
                      >
                        <TbMessageCircleFilled />
                      </div>
                      <div
                        style={{
                          fontSize: "0.9rem",
                          fontWeight: "bold",
                          marginTop: "0.5rem",
                          color: "grey",
                        }}
                      >
                        No Comments Yet
                      </div>
                      <div
                        style={{
                          fontSize: "0.8rem",
                          marginTop: "0.5rem",
                          color: "grey",
                        }}
                      >
                        Do the first to add Comments
                      </div>
                    </div>
                  </div>
                </div>
              ) : modalMenu == "Events" ? (
                <div className="Events_Container">
                  <div style={{ padding: "10px", display: "flex", borderBottom: "1px solid lightgrey", paddingTop: "1rem" }}>
                    <div>
                      <span
                        style={{
                          fontSize: "1.2rem",
                          backgroundColor: "green",
                          color: "white",
                          borderRadius: "50%",
                          fontWeight: "bold",
                          padding: "5px 10px",
                        }}
                      >
                        S
                      </span>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        fontSize: "0.8rem",
                        paddingLeft: "10px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <div style={{ width: "100%" }}>
                        Shashank
                        <span
                          style={{
                            padding: "2px 8px",
                            backgroundColor: "lightblue",
                            color: "blue",
                            borderRadius: "10px",
                            margin: "0px 7px",
                          }}
                        >
                          Shrivastav
                        </span>
                        from inprogress to cancelled
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "flex-end",
                          fontWeight: "bold"
                        }}
                      >
                        on Aug 07,2026 12:20 PM
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: "10px", display: "flex", borderBottom: "1px solid lightgrey", paddingTop: "1rem" }}>
                    <div>
                      <span
                        style={{
                          fontSize: "1.2rem",
                          backgroundColor: "green",
                          color: "white",
                          borderRadius: "50%",
                          fontWeight: "bold",
                          padding: "5px 10px",
                        }}
                      >
                        S
                      </span>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        fontSize: "0.8rem",
                        paddingLeft: "10px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <div style={{ width: "100%" }}>
                        Shashank
                        <span
                          style={{
                            padding: "2px 8px",
                            backgroundColor: "lightblue",
                            color: "blue",
                            borderRadius: "10px",
                            margin: "0px 7px",
                          }}
                        >
                          Shrivastav
                        </span>
                        from inprogress to cancelled
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "flex-end",
                          fontWeight: "bold"
                        }}
                      >
                        on Aug 07,2026 12:20 PM
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: "10px", display: "flex", borderBottom: "1px solid lightgrey", paddingTop: "1rem" }}>
                    <div>
                      <span
                        style={{
                          fontSize: "1.2rem",
                          backgroundColor: "green",
                          color: "white",
                          borderRadius: "50%",
                          fontWeight: "bold",
                          padding: "5px 10px",
                        }}
                      >
                        T
                      </span>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        fontSize: "0.8rem",
                        paddingLeft: "10px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <div style={{ width: "100%" }}>
                        Shashank
                        <span
                          style={{
                            padding: "2px 8px",
                            backgroundColor: "lightblue",
                            color: "blue",
                            borderRadius: "10px",
                            margin: "0px 7px",
                          }}
                        >
                          Shrivastav
                        </span>
                        from inprogress to cancelled
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "flex-end",
                          fontWeight: "bold"
                        }}
                      >
                        on Aug 07,2026 12:20 PM
                      </div>
                    </div>
                  </div>
                </div>
              ) : modalMenu == "Tickets" ? (
                <div>
                  <div className="TickerSection">
                    <button className="btn_ticket">Ur Ticket</button>
                    <button className="btn_ticket">Create Ticker</button>
                  </div>
                  <div className="ticket_list_cont">
                    <div className="ticket_list">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          paddingTop: "10px",
                          paddingLeft: "10px",
                        }}
                      >
                        <div
                          style={{
                            color: "blue",
                            fontSize: "0.8rem",
                            fontWeight: "bold",
                          }}
                        >
                          AddSuit - UAT Feedbacks
                        </div>
                        <div
                          style={{
                            fontSize: "0.7rem",
                            color: "rgb(46, 77, 173)",
                            paddingRight: "10px",
                            display: "flex",
                            gap: "10px",
                          }}
                        >
                          <span style={{ cursor: "pointer" }}>
                            <LiaDumbbellSolid /> View
                          </span>
                          <span style={{ cursor: "pointer" }}>
                            <FaCodeMerge /> Merge
                          </span>
                        </div>
                      </div>
                      <div
                        style={{
                          fontSize: "0.7rem",
                          color: "grey",
                          padding: "10px",
                        }}
                      >
                        ABFEH25468BH
                      </div>
                      <div
                        style={{
                          display: "flex",
                          width: "100%",
                          fontSize: "0.8rem",
                          paddingLeft: "10px",
                          fontWeight: "600",
                        }}
                      >
                        <div style={{ width: "50%" }}>
                          Status{" "}
                          <span
                            className={`status_modal_Ticket ${modalRow.Status.toLowerCase()}`}
                          >
                            {modalRow.Status}
                          </span>
                        </div>
                        <div style={{ width: "50%" }}>
                          Priority{" "}
                          <span
                            style={{ marginLeft: "10px" }}
                            className={`priority_modal ${modalRow.Priority.toLowerCase()}`}
                          >
                            {modalRow.Priority}
                          </span>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          width: "100%",
                          fontSize: "0.8rem",
                          paddingLeft: "10px",
                          marginTop: "10px",
                        }}
                      >
                        <span style={{ width: "50%" }}>
                          <span style={{ fontWeight: "600" }}>Created at:</span>{" "}
                          30-08-2025 01:01
                        </span>
                        <span style={{ width: "50%", fontWeight: "600" }}>
                          CC : adesh@gmail.com
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="ticket_list_cont">
                    <div className="ticket_list">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          paddingTop: "10px",
                          paddingLeft: "10px",
                        }}
                      >
                        <div
                          style={{
                            color: "blue",
                            fontSize: "0.8rem",
                            fontWeight: "bold",
                          }}
                        >
                          AddSuit - UAT Feedbacks
                        </div>
                        <div
                          style={{
                            fontSize: "0.7rem",
                            color: "rgb(46, 77, 173)",
                            paddingRight: "10px",
                            display: "flex",
                            gap: "10px",
                          }}
                        >
                          <span style={{ cursor: "pointer" }}>
                            <LiaDumbbellSolid /> View
                          </span>
                          <span style={{ cursor: "pointer" }}>
                            <FaCodeMerge /> Merge
                          </span>
                        </div>
                      </div>
                      <div
                        style={{
                          fontSize: "0.7rem",
                          color: "grey",
                          padding: "10px",
                        }}
                      >
                        ABFEH25468BH
                      </div>
                      <div
                        style={{
                          display: "flex",
                          width: "100%",
                          fontSize: "0.8rem",
                          paddingLeft: "10px",
                          fontWeight: "600",
                        }}
                      >
                        <div style={{ width: "50%" }}>
                          Status{" "}
                          <span
                            className={`status_modal_Ticket ${modalRow.Status.toLowerCase()}`}
                          >
                            {modalRow.Status}
                          </span>
                        </div>
                        <div style={{ width: "50%" }}>
                          Priority{" "}
                          <span
                            style={{ marginLeft: "10px" }}
                            className={`priority_modal ${modalRow.Priority.toLowerCase()}`}
                          >
                            {modalRow.Priority}
                          </span>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          width: "100%",
                          fontSize: "0.8rem",
                          paddingLeft: "10px",
                          marginTop: "10px",
                        }}
                      >
                        <span style={{ width: "50%" }}>
                          <span style={{ fontWeight: "600" }}>Created at:</span>{" "}
                          30-08-2025 01:01
                        </span>
                        <span style={{ width: "50%", fontWeight: "600" }}>
                          CC : adesh@gmail.com
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskTable;
