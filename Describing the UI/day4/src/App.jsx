import "./App.css";
import Challenge from "./ch.jsx";

export function TodoList() {
  return (
    <div className="todo-card">
      <h2>
        📋 Hedy Lamarr's Todos
        <img
          src="https://i.imgur.com/yXOvdOSs.jpg"
          alt="Hedy Lamarr"
          className="photo"
        />
      </h2>
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <>
      {/* ===== Page Header ===== */}
      <header className="page-header">
        <div className="badge">⚛️ React Docs Journey · Day 4</div>
        <h1>Writing Markup with JSX</h1>
        <p>
          JSX is a syntax extension for JavaScript that lets you write HTML-like
          markup inside a JavaScript file. Although there are other ways to
          write components, most React developers prefer the conciseness of JSX,
          and most codebases use it.
        </p>
      </header>

      {/* ===== Demo: TodoList ===== */}
      <div className="section-divider">
        <span>Live Demo</span>
      </div>

      <div className="demo-section">
        <div className="demo-label">📌 TodoList Component</div>
        <TodoList />
      </div>

      {/* ===== Challenge Section ===== */}
      <div className="section-divider">
        <span>Challenge</span>
      </div>

      <Challenge />

      {/* ===== Footer ===== */}
      <footer className="page-footer">
        Built with <span>❤️</span> using React &amp; Vite
      </footer>
    </>
  );
}
