import "./App.css";
import { useState } from "react";
import Ch1 from "./ch/ch1/ch1.jsx";
import Ch2 from "./ch/ch2/ch2.jsx";

function Clock({ color, time }) {
  return (
    <h1 style={{ color }}>
      {color} {time}
    </h1>
  );
}

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="main-container">
      <div className="card-glass">
        <h1>Render and Commit</h1>
        <p>
          Before your components are displayed on screen, they must be rendered
          by React. Understanding the steps in this process will help you think
          about how your code executes and explain its behavior.
        </p>
      </div>

      <div className="card-glass">
        <h2>The Mental Model for React's Rendering Process</h2>
        <p>
          Imagine that your components are <strong>cooks in the kitchen</strong>,
          assembling tasty dishes from ingredients. In this scenario, React is
          the <strong>waiter</strong> who puts in requests from customers and
          brings them their orders.
        </p>
        <p>
          This process of requesting and serving UI has three steps:</p>
        
        <div className="flow-diagram">
          <div className="flow-step">
            <strong>1. Trigger</strong>
            <p>Guest's order to kitchen</p>
          </div>
          <span className="flow-arrow">→</span>
          <div className="flow-step">
            <strong>2. Render</strong>
            <p>Prepare the order</p>
          </div>
          <span className="flow-arrow">→</span>
          <div className="flow-step">
            <strong>3. Commit</strong>
            <p>Place order on table</p>
          </div>
        </div>
      </div>

      <div className="card-glass">
        <h2>Step 1: Trigger a render</h2>
        <p>
          There are two reasons for a component to render:
        </p>
        <ul>
          <li><strong>Initial render:</strong> When the app starts, this triggers the first render.</li>
          <li><strong>State update:</strong> When a component's state changes, it schedules a re-render.</li>
        </ul>
      </div>

      <div className="card-glass">
        <h2>Step 2: React renders your component</h2>
        <p>
          After triggering a render, React calls your components to figure out
          what to display on screen.
        </p>
        <p>
          <strong>During initial render:</strong> React creates DOM nodes for each component.
        </p>
        <p>
          <strong>During re-render:</strong> React calculates which of their properties 
          changed and updates only the necessary parts.
        </p>
      </div>

      <div className="card-glass">
        <h2>Step 3: React commits to the DOM</h2>
        <p>
          After rendering your component, React will modify the DOM.
        </p>
        <ul>
          <li>
            <strong>Initial render:</strong> React uses the <code>appendChild()</code> 
            DOM operation to put all the DOM nodes it created on screen.
          </li>
          <li>
            <strong>Re-renders:</strong> React makes the minimal necessary changes 
            (re-rendering) to make the DOM match the latest rendering output.
          </li>
        </ul>
      </div>

      <div className="card-glass">
        <h2>Browser Paint</h2>
        <p>
          After the commit phase finishes, the browser repaints the screen. 
          Although this process is known as "browser rendering", we will refer 
          to it as "painting" to avoid confusion.
        </p>
      </div>

      <div className="card-glass">
        <h2>Demo: Eager vs Lazy Evaluation</h2>
        <p>
          React evaluates the component function and watches for what you return.
          Notice how React waits for the component to be needed before computing.
        </p>
        <button onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"} Clock
        </button>
        {show && (
          <div className="Toolbar">
            <Clock color="blue" time={new Date().toLocaleTimeString()} />
            <Clock color="red" time={new Date().toLocaleTimeString()} />
          </div>
        )}
      </div>

      <div className="card-glass">
        <h2>Recap</h2>
        <ul>
          <li>
            Any screen update in a React app happens in three steps:
            <ol>
              <li>Trigger</li>
              <li>Render</li>
              <li>Commit</li>
            </ol>
          </li>
          <li>You can use <code>StrictMode</code> to find mistakes in your components.</li>
          <li>React does not touch the DOM for rendering changes if the result is the same.</li>
        </ul>
      </div>

      <div className="card-glass challenge-box">
        <h2>Challenges</h2>
        <article>
          <Ch1 />
        </article>
        <hr />
        <article>
          <Ch2 />
        </article>
      </div>
    </div>
  );
}
