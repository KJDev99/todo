import { useEffect, useState } from "react";

export default function Todos() {
  const [modal, setModal] = useState(false);
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const AddTodo = () => {
    if (input == "") return false;
    setTodos([input, ...todos]);
    setModal(false);
    setInput("");
  };

  useEffect(() => {
    localStorage.getItem("todos") &&
      setTodos([...localStorage.getItem("todos").split(",")]);
  }, []);

  useEffect(() => {
    if (todos.length != 0) {
      localStorage.setItem("todos", todos);
    }
  }, [todos]);
  return (
    <div className="w-full border flex flex-col justify-center items-center">
      <div className="flex w-full px-2">
        <input
          type="text"
          className="mt-2 h-10 w-full border-none outline-none p-4 rounded"
          placeholder="search"
        />
      </div>
      <ul className="flex flex-col w-full px-2 my-2">
        {todos.map((todo, index) => {
          return (
            <li
              className="text-white flex gap-1 px-2 justify-between"
              key={index}
            >
              <div className="flex fap-1">
                <p>{index + 1}.</p>
                <p>{todo}</p>
              </div>
              <button
                onClick={() =>
                  setTodos([
                    ...todos.slice(0, index),
                    ...todos.slice(index + 1),
                  ])
                }
              >
                ❌
              </button>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          setModal(true);
        }}
        className="rounded-full w-10 h-10 bg-green-800 text-white text-2xl mt-10 mx-auto mb-1"
      >
        +
      </button>
      {modal && (
        <div className="absolute left-[50%] top-[50%] py-2 px-4 rounded bg-slate-600 text-white  w-1/4 max-md:w-full translate-x-[-50%] translate-y-[-50%]">
          <h2 className="text-center mb-4">MODAL</h2>
          <input
            type="text"
            className="w-full h-8 border-none outline-none rounded mb-2 p-2 text-black"
            placeholder="Add Todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="flex justify-end gap-4">
            <button
              onClick={() => setModal(false)}
              className="px-3 py-1 rounded bg-red-900 text-white"
            >
              NO
            </button>
            <button
              onClick={AddTodo}
              className="px-3 py-1 rounded bg-green-900 text-white"
            >
              YES
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
