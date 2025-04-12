import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import heartemo1 from "./assets/heartemo1.jpeg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={heartemo1} className="logo" alt="heartemo logo" />
        </a>
      </div>
      <h2>Hello, heartemo! deploy test</h2>
      <div className="card">
        <button>login</button>
      </div>
    </>
  );
}

export default App;
