import "./App.css";
import TodoList2 from "./Challenge/ch1";
import TodoList3 from "./Challenge/ch2";
import TodoList4 from "./Challenge/ch3";

const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "var(--bg-secondary)",
    color: "var(--text-main)",
    padding: "1.5rem",
    borderRadius: "16px",
    borderLeft: "4px solid var(--accent-primary)",
    boxShadow: "var(--card-shadow)",
  },
};

export function Avatar() {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";
  return (
    <div className="avatar-section">
      <img
        className="avatar"
        src={avatar}
        alt={description}
        width={100}
        height={100}
      />
      <p style={{ marginTop: "1rem", fontWeight: "600" }}>{description}</p>
    </div>
  );
}

export function TodoList() {
  const name = "Hedy Lamarr";
  return (
    <div className="todo-container">
      <h1>{name}'s To Do List</h1>
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <main className="container">
      <header className="header">
        <h1>JavaScript in JSX</h1>
        <p>
          JSX lets you write HTML-like markup inside a JavaScript file, keeping
          rendering logic and content in the same place. Use curly braces{" "}
          <code>{"{ }"}</code> to open a window to JavaScript logic or dynamic
          properties.
        </p>
      </header>

      <section className="section">
        <h2>Basic Usage</h2>
        <p>Referencing a variable or a string directly in JSX attributes.</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
            marginTop: "2rem",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "0.8rem",
                textAlign: "center",
                marginBottom: "0.5rem",
              }}
            >
              String Literal
            </p>
            <img
              className="avatar"
              src="https://i.imgur.com/7vQD0fPs.jpg"
              alt="Gregorio Y. Zara"
              width={100}
              height={100}
            />
          </div>
          <div>
            <p
              style={{
                fontSize: "0.8rem",
                textAlign: "center",
                marginBottom: "0.5rem",
              }}
            >
              Using Variables
            </p>
            <Avatar />
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Style Objects & "Double Curlies"</h2>
        <p>
          Inline style properties are written in camelCase. You pass a
          JavaScript object using double braces:{" "}
          <code>{"style={{ ... }}"}</code>.
        </p>
        <div style={person.theme}>
          <h3 style={{ border: "none", padding: 0, fontSize: "1.5rem" }}>
            {person.name}'s Profile
          </h3>
          <p>Managed via a theme object with CSS variables.</p>
          <ul style={{ listStyle: "none", marginTop: "1rem" }}>
            <li style={{ border: "none", padding: "4px 0" }}>
              ✦ Built-in videophone
            </li>
            <li style={{ border: "none", padding: "4px 0" }}>
              ✦ Alcohol-fuelled engine
            </li>
            <li style={{ border: "none", padding: "4px 0" }}>
              ✦ Aeronautics research
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <span className="challenge-badge">Knowledge Check</span>
        <h2>Challenge 1: Fix the Mistake</h2>
        <p>Resolving syntax and logical errors in JSX implementation.</p>
        <TodoList2 />
      </section>

      <section className="section">
        <span className="challenge-badge">Knowledge Check</span>
        <h2>Challenge 2: Data Extraction</h2>
        <p>Refactoring hardcoded values into dynamic objects.</p>
        <TodoList3 />
      </section>

      <section className="section">
        <span className="challenge-badge">Knowledge Check</span>
        <h2>Challenge 3: Inline Expressions</h2>
        <p>Writing meaningful JavaScript expressions directly within markup.</p>
        <TodoList4 />
      </section>

      <footer
        style={{
          textAlign: "center",
          marginTop: "4rem",
          color: "var(--text-dim)",
          fontSize: "0.9rem",
        }}
      >
        React Learning Journey — Day 5: Describing the UI
      </footer>
    </main>
  );
}

export default App;
