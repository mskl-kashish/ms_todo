import React, { useState } from "react";

type TodoType = {
  task: string;
  id: number;
};

const Home = () => {
  const [taskInput, setTaskInput] = useState<string>("");
  const [todoList, setTodoList] = useState<TodoType[]>([
    {
      task: "work hard",
      id: 1234,
    },
  ]);

  const [editId, setEditId] = useState<number | null>(null);
  const [editedTask, setEditedTask] = useState<string>("");

  // add todo
  const addTodoHandler = (data: string): void => {
    const temp: TodoType = {
      id: Math.random(),
      task: data,
    };
    setTodoList((pre) => [temp, ...pre]);
    setTaskInput("");
  };

  // delete todo
  const deleteTodoHandler = (id: number): void => {
    const temp: TodoType[] = todoList.filter((a) => a.id !== id);
    setTodoList(temp);
  };

  // edit todo
  const editTodoHandler = (id: number): void => {
    const todoToEdit = todoList.find((todo) => todo.id === id);
    if (todoToEdit) {
      setEditId(id);
      setEditedTask(todoToEdit.task);
    }
  };

  // save edited todo
  const saveEditedTodoHandler = (id: number): void => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: editedTask };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
    setEditId(null);
  };

  return (
    <>
      <header className="header">
        <h1 className="white__typography500 textAlign__center">Todo App</h1>
      </header>
      <section className="hero__sec">
        <div className="form">
          <input
            className="form__input"
            value={taskInput}
            type="text"
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button
            className="form__submit"
            onClick={() => addTodoHandler(taskInput)}
          >
            Add Todo
          </button>
        </div>
        <ol className="todolist">
          {todoList?.map((message) => (
            <li className="todo flex justify__between align__center" key={message.id}>
              {editId === message.id ? (
                <>
                  <input
                    type="text"
                    value={editedTask}
                    onChange={(e) => setEditedTask(e.target.value)}
                  />
                  <button
                    className="todo__edit"
                    onClick={() => saveEditedTodoHandler(message.id)}
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span className="todo__label">{message.task}</span>
                  <div className="flex gap__20px">
                    {" "}
                    <button
                      className="todo__edit"
                      onClick={() => editTodoHandler(message.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="todo__delete"
                      onClick={() => deleteTodoHandler(message.id)}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ol>
      </section>
    </>
  );
};

export default Home;
