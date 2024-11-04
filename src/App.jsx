import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Vite from "./vite";
import Arrays from "./Arrays";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-2xl text-gray-500">Vite + React</h1>
      <div className="card">
        <button
          className="text-center text-red-500"
          onClick={() => setCount((count) => count + 1)}
        >
          count is <span className="text-cyan-600 text-3xl"> {count}</span>
        </button>
      </div>
      <Vite />
      <Arrays />
    </>
  );
}

export default App;
