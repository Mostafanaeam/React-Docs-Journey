import { Fragment, useState } from "react";
import "./App.css";
import RequestTracker from "./ch/Challenge 1/ch1";
import App2 from "./ch/Challenge 2/ch2";

function DemoCard({ title, description, queue, result, buttonLabel, onRun, note }) {
  return (
    <section className="card-glass">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="demo-panel">
        <div className="counter-display">{result}</div>
        <div className="queue-track">
          {queue.map((item, i) => (
            <Fragment key={i}>
              {i > 0 && <span className="queue-arrow">→</span>}
              <span className={`queue-chip${item.isUpdater ? " updater" : ""}`}>
                {item.label}
              </span>
            </Fragment>
          ))}
        </div>
        <button onClick={onRun}>{buttonLabel}</button>
      </div>
      {note && <p className="demo-note">{note}</p>}
    </section>
  );
}

export default function App() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [number4, setNumber4] = useState(0);

  return (
    <div className="main-container">
      <header className="card-glass intro-card">
        <p className="section-badge">Adding Interactivity · Day 5</p>
        <h1>Queueing a Series of State Updates</h1>
        <p className="intro-text">
          Setting a state variable will queue another render. But sometimes you
          might want to perform multiple operations on the value before queueing
          the next render. To do this, it helps to understand how React batches
          state updates.
        </p>
        <div className="you-will-learn">
          <h3>You will learn</h3>
          <ul>
            <li>
              What "batching" is and how React uses it to process multiple state
              updates
            </li>
            <li>
              How to apply several updates to the same state variable in a row
            </li>
          </ul>
        </div>
      </header>

      <DemoCard
        title="React batches state updates"
        description="React waits until all the code in the event handler has finished running before processing your state updates. Because of this, the three calls below are batched together — the render only sees one final value."
        queue={[
          { label: "setNumber(number + 1)" },
          { label: "setNumber(number + 1)" },
          { label: "setNumber(number + 1)" },
        ]}
        result={number}
        buttonLabel="+3"
        onRun={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}
        note="All three calls use this render's value of number, so +3 only increments the counter by 1."
      />

      <DemoCard
        title="Updating the same state multiple times before the next render"
        description="To update the same state variable multiple times in one event, you can pass an updater function setNumber(n => n + 1). React adds the function to the queue and runs it during the next render, in order."
        queue={[
          { label: "setNumber(n => n + 1)", isUpdater: true },
          { label: "setNumber(n => n + 1)", isUpdater: true },
          { label: "setNumber(n => n + 1)", isUpdater: true },
        ]}
        result={number2}
        buttonLabel="+3"
        onRun={() => {
          setNumber2((n) => n + 1);
          setNumber2((n) => n + 1);
          setNumber2((n) => n + 1);
        }}
        note="Updater functions run in order, each receiving the result of the previous one — the counter goes up by 3."
      />

      <DemoCard
        title="What happens if you update state after replacing it"
        description="The queue can mix numbers and updater functions. First setNumber(number + 5) replaces the state with a number, then the updater n => n + 1 runs on top of that new value."
        queue={[
          { label: "setNumber(number + 5)" },
          { label: "setNumber(n => n + 1)", isUpdater: true },
        ]}
        result={number3}
        buttonLabel="Increase the number"
        onRun={() => {
          setNumber3(number3 + 5);
          setNumber3((n) => n + 1);
        }}
        note="The updater receives the replaced value: number + 5 + 1, so the counter goes up by 6."
      />

      <DemoCard
        title="What happens if you replace state after updating it"
        description="If setNumber(42) comes last in the queue, it replaces everything before it. The updater runs first, but its result is discarded by the final number."
        queue={[
          { label: "setNumber(number + 5)" },
          { label: "setNumber(n => n + 1)", isUpdater: true },
          { label: "setNumber(42)" },
        ]}
        result={number4}
        buttonLabel="Increase the number"
        onRun={() => {
          setNumber4(number4 + 5);
          setNumber4((n) => n + 1);
          setNumber4(42);
        }}
        note="The last call replaces the entire queue — the final value is always 42."
      />

      <section className="card-glass recap-card">
        <h2>Recap</h2>
        <ul>
          <li>
            Setting state does not change the variable in the existing render,
            but it requests a new render.
          </li>
          <li>
            React processes state updates after event handlers have finished
            running. This is called batching.
          </li>
          <li>
            To update some state multiple times in one event, you can use the{" "}
            <code>setNumber(n =&gt; n + 1)</code> updater function.
          </li>
        </ul>
      </section>

      <section className="card-glass challenge-box">
        <p className="section-badge">Challenge 1 of 2</p>
        <h2>Fix a request counter</h2>
        <RequestTracker />
      </section>

      <section className="card-glass challenge-box">
        <p className="section-badge">Challenge 2 of 2</p>
        <h2>Implement the state queue yourself</h2>
        <App2 />
      </section>
    </div>
  );
}