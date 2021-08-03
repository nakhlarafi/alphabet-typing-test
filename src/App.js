import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [charNext, setCharNext] = useState("a");
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setIsEditing(false);
    reset();
    setCharNext("a");
  };

  // New
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((second) => second + 1);
      }, 10);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const checkChar = (e) => {
    let charWritten = e.target.value.toLowerCase();
    if (name === "" && charWritten === "a") {
      setName(charWritten);
      setIsEditing(true);
      setIsActive(true);
      setCharNext("b");
    }
    if (name === "a" && charWritten.slice(-1) === "b") {
      setName(charWritten);
      setCharNext("c");
    }
    if (name.slice(-1) === "b" && charWritten.slice(-1) === "c") {
      setName(charWritten);
      setCharNext("d");
    }
    if (name.slice(-1) === "c" && charWritten.slice(-1) === "d") {
      setName(charWritten);
      setCharNext("e");
    }
    if (name.slice(-1) === "d" && charWritten.slice(-1) === "e") {
      setName(charWritten);
      setCharNext("f");
    }
    if (name.slice(-1) === "e" && charWritten.slice(-1) === "f") {
      setName(charWritten);
      setCharNext("g");
    }
    if (name.slice(-1) === "f" && charWritten.slice(-1) === "g") {
      setName(charWritten);
      setCharNext("h");
    }
    if (name.slice(-1) === "g" && charWritten.slice(-1) === "h") {
      setName(charWritten);
      setCharNext("i");
    }
    if (name.slice(-1) === "h" && charWritten.slice(-1) === "i") {
      setName(charWritten);
      setCharNext("j");
    }
    if (name.slice(-1) === "i" && charWritten.slice(-1) === "j") {
      setName(charWritten);
      setCharNext("k");
    }
    if (name.slice(-1) === "j" && charWritten.slice(-1) === "k") {
      setName(charWritten);
      setCharNext("l");
    }
    if (name.slice(-1) === "k" && charWritten.slice(-1) === "l") {
      setName(charWritten);
      setCharNext("m");
    }
    if (name.slice(-1) === "l" && charWritten.slice(-1) === "m") {
      setName(charWritten);
      setCharNext("n");
    }
    if (name.slice(-1) === "m" && charWritten.slice(-1) === "n") {
      setName(charWritten);
      setCharNext("o");
    }
    if (name.slice(-1) === "n" && charWritten.slice(-1) === "o") {
      setName(charWritten);
      setCharNext("p");
    }
    if (name.slice(-1) === "o" && charWritten.slice(-1) === "p") {
      setName(charWritten);
      setCharNext("q");
    }
    if (name.slice(-1) === "p" && charWritten.slice(-1) === "q") {
      setName(charWritten);
      setCharNext("r");
    }
    if (name.slice(-1) === "q" && charWritten.slice(-1) === "r") {
      setName(charWritten);
      setCharNext("s");
    }
    if (name.slice(-1) === "r" && charWritten.slice(-1) === "s") {
      setName(charWritten);
      setCharNext("t");
    }
    if (name.slice(-1) === "s" && charWritten.slice(-1) === "t") {
      setName(charWritten);
      setCharNext("u");
    }
    if (name.slice(-1) === "t" && charWritten.slice(-1) === "u") {
      setName(charWritten);
      setCharNext("v");
    }
    if (name.slice(-1) === "u" && charWritten.slice(-1) === "v") {
      setName(charWritten);
      setCharNext("w");
    }
    if (name.slice(-1) === "v" && charWritten.slice(-1) === "w") {
      setName(charWritten);
      setCharNext("x");
    }
    if (name.slice(-1) === "w" && charWritten.slice(-1) === "x") {
      setName(charWritten);
      setCharNext("y");
    }
    if (name.slice(-1) === "x" && charWritten.slice(-1) === "y") {
      setName(charWritten);
      setCharNext("z");
    }
    if (name.slice(-1) === "y" && charWritten.slice(-1) === "z") {
      setName(charWritten);
      setCharNext("Finished!");
      setIsEditing(false);
      setIsActive(false);
    }
    console.log(name);
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        <h3>Type the Alphabet</h3>
        <h3 className="timer">{charNext}</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => checkChar(e)}
          />
          <button type="submit" className="submit-btn">
            Reset
          </button>
        </div>

        <div className="app">
          <h3 className="timer">
            {("0" + (Math.floor(seconds / 6000) % 60)).slice(-2)}:
            {("0" + (Math.floor(seconds / 100) % 60)).slice(-2)}:
            {("0" + ((seconds / 1) % 1000)).slice(-2)}s
          </h3>
        </div>
      </form>
    </section>
  );
}

export default App;
