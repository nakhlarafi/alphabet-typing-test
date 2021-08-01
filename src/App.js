import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import { useStopwatch } from "react-timer-hook";

function App() {
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isPause, setIsPause] = useState(false);

  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const checkChar = (e) => {
    let charWritten = e.target.value;
    if (name == "" && charWritten == "a") {
      setName(charWritten);
      setIsEditing(true);
      start();
    }
    if (name == "a" && charWritten.slice(-1) == "b") {
      setName(charWritten);
    }
    if (name.slice(-1) == "b" && charWritten.slice(-1) == "c") {
      setName(charWritten);
    }
    if (name.slice(-1) == "c" && charWritten.slice(-1) == "d") {
      setName(charWritten);
    }
    if (name.slice(-1) == "d" && charWritten.slice(-1) == "e") {
      setName(charWritten);
    }
    if (name.slice(-1) == "e" && charWritten.slice(-1) == "f") {
      setName(charWritten);
    }
    if (name.slice(-1) == "f" && charWritten.slice(-1) == "g") {
      setName(charWritten);
    }
    if (name.slice(-1) == "g" && charWritten.slice(-1) == "h") {
      setName(charWritten);
    }
    if (name.slice(-1) == "h" && charWritten.slice(-1) == "i") {
      setName(charWritten);
    }
    if (name.slice(-1) == "i" && charWritten.slice(-1) == "j") {
      setName(charWritten);
    }
    if (name.slice(-1) == "j" && charWritten.slice(-1) == "k") {
      setName(charWritten);
    }
    if (name.slice(-1) == "k" && charWritten.slice(-1) == "l") {
      setName(charWritten);
    }
    if (name.slice(-1) == "l" && charWritten.slice(-1) == "m") {
      setName(charWritten);
    }
    if (name.slice(-1) == "m" && charWritten.slice(-1) == "n") {
      setName(charWritten);
    }
    if (name.slice(-1) == "n" && charWritten.slice(-1) == "o") {
      setName(charWritten);
    }
    if (name.slice(-1) == "o" && charWritten.slice(-1) == "p") {
      setName(charWritten);
    }
    if (name.slice(-1) == "p" && charWritten.slice(-1) == "q") {
      setName(charWritten);
    }
    if (name.slice(-1) == "q" && charWritten.slice(-1) == "r") {
      setName(charWritten);
    }
    if (name.slice(-1) == "r" && charWritten.slice(-1) == "s") {
      setName(charWritten);
    }
    if (name.slice(-1) == "s" && charWritten.slice(-1) == "t") {
      setName(charWritten);
    }
    if (name.slice(-1) == "t" && charWritten.slice(-1) == "u") {
      setName(charWritten);
    }
    if (name.slice(-1) == "u" && charWritten.slice(-1) == "v") {
      setName(charWritten);
    }
    if (name.slice(-1) == "v" && charWritten.slice(-1) == "w") {
      setName(charWritten);
    }
    if (name.slice(-1) == "w" && charWritten.slice(-1) == "x") {
      setName(charWritten);
    }
    if (name.slice(-1) == "x" && charWritten.slice(-1) == "y") {
      setName(charWritten);
    }
    if (name.slice(-1) == "y" && charWritten.slice(-1) == "z") {
      setName(charWritten);
      setIsPause(true);
      setIsEditing(false);
      pause();
    }
    console.log(name);
  };

  // const showTimer = () => {
  //   if (isEditing) {
  //     return <MyStopwatch isPause={isEditing} />;
  //   } else if (isPause) {
  //     return <MyStopwatch isPause={false} />;
  //   }
  // };

  // useEffect(() => {
  //   localStorage.setItem("list", JSON.stringify(list));
  // }, [list]);
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => checkChar(e)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>

      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "100px" }}>
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
          <span>{seconds}</span>
        </div>
        <p>{isRunning ? "Running" : "Not running"}</p>
      </div>
    </section>
  );
}

export default App;
