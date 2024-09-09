import React, { useState } from "react";
import "./App.css";

const TaskModal = ({ onAddTask, closeModal }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskStatus, setTaskStatus] = useState("todo");
  const [taskPriority, setTaskPriority] = useState("Low");

  const handleCreateTask = () => {
    if (taskTitle.trim() === "") {
      alert("Title is required");
      return;
    }

    const newTask = {
      title: taskTitle,
      description: taskDescription,
      dueDate: taskDate,
      priority: taskPriority,
    };

    onAddTask(taskStatus, newTask);

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setTaskStatus("todo");
    setTaskPriority("Low");

    closeModal();
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Create New Task</h2>
        <label>Title:</label>
        <input
          type="text"
          placeholder="Enter task title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          placeholder="Enter task description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />

        <label>Select Date:</label>
        <input
          type="date"
          value={taskDate}
          onChange={(e) => setTaskDate(e.target.value)}
        />

        <label>Status:</label>
        <select
          value={taskStatus}
          onChange={(e) => setTaskStatus(e.target.value)}
        >
          <option value="todo">TODO</option>
          <option value="inProgress">IN PROGRESS</option>
          <option value="completed">COMPLETED</option>
        </select>

        <label>Priority:</label>
        <select
          value={taskPriority}
          onChange={(e) => setTaskPriority(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <div className="popup-buttons">
          <button className="btn-cancel" onClick={closeModal}>
            Cancel
          </button>
          <button className="btn-create" onClick={handleCreateTask}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
