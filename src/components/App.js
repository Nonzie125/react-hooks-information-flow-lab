import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import Task from "./Task"
import Item from "./Item";


function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTasks = tasks.filter(task =>
    selectedCategory === "All" ? true : task.category === selectedCategory
  );

  function handleDeleteTask(deletedTaskText) {
    setTasks(tasks.filter(task => task.text !== deletedTaskText));
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
