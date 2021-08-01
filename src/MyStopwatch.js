import useStopwatchHook from "use-stopwatch-hook";

const MyStopwatch = () => {
  const [milliseconds, status, start, pause, stop, restart] = useStopwatch({
    interval: 100,
  });

  return (
    <div className="App">
      <h1>Use Stopwatch Hook</h1>
      <div className="demo-row">
        <b>{milliseconds}</b> milliseconds passed
      </div>
      <div className="demo-row">
        current status is <b>{status}</b>
      </div>
      <div className="demo-row">
        <button className="btn" onClick={start}>
          Start
        </button>
        <button className="btn" onClick={pause}>
          Pause
        </button>
        <button className="btn" onClick={restart}>
          Restart
        </button>
        <button className="btn" onClick={stop}>
          Stop
        </button>
      </div>
    </div>
  );
};
export default MyStopwatch;
