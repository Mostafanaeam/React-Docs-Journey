import "./App.css";
import { useState } from "react";
import TrafficLight from "./ch/ch1/ch1.jsx";

export default function App() {
  const [number, setNumber] = useState(0);
  const [to, setTo] = useState("Alice");
  const [message, setMessage] = useState("Hello");

  function handleClickOnce() {
    setNumber(number + 1);
  }

  function handleClickTriple() {
    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 3000);
  }

  return (
    <div className="main-container">
      <div className="card-glass">
        <h1>State as a Snapshot</h1>
        <p>
          State variables might look like regular JavaScript variables that you can read and write to. However, state behaves more like a snapshot. Setting it does not change the state variable you already have, but instead triggers a re-render.
        </p>
      </div>

      <div className="card-glass">
        <h2>Rendering Takes a Snapshot in Time</h2>
        <p>
          "Rendering" means that React is calling your component, which is a function. The JSX you return from that function is like a snapshot of the UI in time. Its props, event handlers, and local variables were all calculated using its state at the time of the render.
        </p>
        <div className="snapshot-demo">
          <p className="snapshot-label">State value in current render:</p>
          <p className="snapshot-value">{number}</p>
          <button onClick={() => setNumber(number + 1)}>Set to {number + 1}</button>
        </div>
      </div>

      <div className="card-glass">
        <h2>State "Fixed" Within an Event Handler</h2>
        <p>
          Even if you call <code>setNumber()</code> three times, in this render's event handler <code>number</code> is always <code>{number}</code>, so you set the state to <code>{number + 1}</code> three times.
        </p>
        <button onClick={handleClickTriple}>Set +3 (but only adds 1)</button>
        <p>After your event handler finishes, React re-renders with <code>number</code> equal to {number === 0 ? 1 : number + 1} rather than {number + 3}.</p>
      </div>

      <div className="card-glass">
        <h2>Event Handlers Access a "Snapshot"</h2>
        <p>
          Try changing the recipient to Bob before the alert runs. Whose name will appear in the alert?
        </p>
        <form onSubmit={handleSubmit}>
          <label>
            To:{' '}
            <select
              value={to}
              onChange={e => setTo(e.target.value)}
              style={{ padding: "0.5rem", borderRadius: "8px", marginLeft: "0.5rem", background: "rgba(30, 41, 59, 0.8)", color: "var(--text-main)", border: "1px solid var(--glass-border)" }}
            >
              <option value="Alice">Alice</option>
              <option value="Bob">Bob</option>
            </select>
          </label>
          <br /><br />
          <label>
            Message:{' '}
            <input
              type="text"
              value={message}
              onChange={e => setMessage(e.target.value)}
              style={{ padding: "0.5rem", borderRadius: "8px", marginLeft: "0.5rem", background: "rgba(30, 41, 59, 0.8)", color: "var(--text-main)", border: "1px solid var(--glass-border)" }}
            />
          </label>
          <br /><br />
          <button type="submit">Send (3s delay)</button>
        </form>
      </div>

      <div className="card-glass">
        <h2>Recap</h2>
        <ul>
          <li>Setting state requests a new render.</li>
          <li>React stores state outside of your component, as if on a shelf.</li>
          <li>When you call <code>useState</code>, React gives you a snapshot of the state for that render.</li>
          <li>Variables and event handlers don't "survive" re-renders. Every render has its own event handlers.</li>
          <li>Every render (and functions inside it) will always "see" the snapshot of the state that React gave to that render.</li>
          <li>You can mentally substitute state in event handlers, similarly to how you think about the rendered JSX.</li>
        </ul>
      </div>

      <div className="card-glass challenge-box">
        <h2>Challenges</h2>
        <article>
          <TrafficLight />
        </article>
      </div>
    </div>
  );
}
