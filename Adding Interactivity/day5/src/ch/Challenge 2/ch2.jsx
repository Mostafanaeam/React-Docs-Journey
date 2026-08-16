/**
 Challenge 2 of 2: Implement the state queue yourself 
In this challenge, you will reimplement a tiny part of React from scratch! It's not as hard as it sounds.

Scroll through the sandbox preview. Notice that it shows four test cases. They correspond to the examples you've seen earlier on this page. Your task is to implement the getFinalState function so that it returns the correct result for each of those cases. If you implement it correctly, all four tests should pass.

You will receive two arguments: baseState is the initial state (like 0), and the queue is an array which contains a mix of numbers (like 5) and updater functions (like n => n + 1) in the order they were added.

Your task is to return the final state, just like the tables on this page show!
*/
import { getFinalState } from "./processQueue.jsx";

function increment(n) {
  return n + 1;
}
increment.toString = () => "n => n + 1";

export default function App2() {
  return (
    <div className="test-cases">
      <TestCase baseState={0} queue={[1, 1, 1]} expected={1} />
      <TestCase
        baseState={0}
        queue={[increment, increment, increment]}
        expected={3}
      />
      <TestCase baseState={0} queue={[5, increment]} expected={6} />
      <TestCase baseState={0} queue={[5, increment, 42]} expected={42} />
    </div>
  );
}

function TestCase({ baseState, queue, expected }) {
  const actual = getFinalState(baseState, queue);
  const correct = actual === expected;
  return (
    <div className={`test-case ${correct ? "pass" : "fail"}`}>
      <span className={`test-badge ${correct ? "pass" : "fail"}`}>
        {correct ? "correct" : "wrong"}
      </span>
      <div className="test-grid">
        <div className="test-field">
          <span className="test-label">Base state</span>
          <span className="test-value">{baseState}</span>
        </div>
        <div className="test-field">
          <span className="test-label">Queue</span>
          <span className="test-value">[{queue.join(", ")}]</span>
        </div>
        <div className="test-field">
          <span className="test-label">Expected result</span>
          <span className="test-value">{expected}</span>
        </div>
        <div className="test-field">
          <span className="test-label">Your result</span>
          <span className={`test-value ${correct ? "ok" : "bad"}`}>
            {actual}
          </span>
        </div>
      </div>
    </div>
  );
}