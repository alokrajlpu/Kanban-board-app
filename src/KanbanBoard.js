import React, { useState } from "react";
import "./App.css";
import TaskModal from "./TaskModal";

const initialTasks = {
  todo: [
    {
      title: "Brainstorming",
      priority: "High",
      description:
        "Brainstorming brings team members' diverse experience into play.",
      dueDate: "18/09/2024",
    },
    {
      title: "Wireframes",
      priority: "High",
      description:
        "Low fidelity wireframes include the most basic content and visuals.",
      dueDate: "18/09/2024",
    },
  ],
  inProgress: [
    {
      title: "Onboarding Illustrations",
      priority: "Low",
      dueDate: "18/10/2024",
    },
  ],
  completed: [
    {
      title: "Design System",
      priority: "Medium",
      description: "It just needs to adapt the UI from what you did before.",
      dueDate: "12/10/2024",
    },
  ],
};

const priorityColors = {
  High: "red",
  Medium: "orange",
  Low: "green",
};

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTask = (status, newTask) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [status]: [...prevTasks[status], newTask],
    }));
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="task-board">
      <button
        className="open-modal-button"
        onClick={() => setIsModalOpen(true)}
      >
        Create Task
      </button>

      {isModalOpen && (
        <TaskModal onAddTask={handleAddTask} closeModal={closeModal} />
      )}

      <div className="columns">
        <div className="column todo">
          <h2>TODO (Purple)</h2>
          {tasks.todo.map((task, index) => (
            <div key={index} className="task-card">
              <div
                className="priority-badge"
                style={{ backgroundColor: priorityColors[task.priority] }}
              >
                {task.priority}
              </div>
              <h3>{task.title}</h3>
              <p>
                <strong>Description:</strong> {task.description}
              </p>
              <p>
                <strong>Due Date:</strong> {task.dueDate}
              </p>
            </div>
          ))}
        </div>

        <div className="column in-progress">
          <h2>IN PROGRESS (Orange)</h2>
          {tasks.inProgress.map((task, index) => (
            <div key={index} className="task-card">
              <div
                className="priority-badge"
                style={{ backgroundColor: priorityColors[task.priority] }}
              >
                {task.priority}
              </div>
              <h3>{task.title}</h3>
              <p>
                <strong>Due Date:</strong> {task.dueDate}
              </p>
            </div>
          ))}
        </div>

        <div className="column completed">
          <h2>COMPLETED (Green)</h2>
          {tasks.completed.map((task, index) => (
            <div key={index} className="task-card">
              <div
                className="priority-badge"
                style={{ backgroundColor: priorityColors[task.priority] }}
              >
                {task.priority}
              </div>
              <h3>{task.title}</h3>
              <p>
                <strong>Description:</strong> {task.description}
              </p>
              <p>
                <strong>Due Date:</strong> {task.dueDate}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;
