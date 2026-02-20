import "./App.css";
import Avatar from "./Avatar";
import Gallery from "./Challenge/ch1/ch1";
import Profile2 from "./Challenge/ch2/ch2";
import Profile3 from "./Challenge/ch3/ch3";

function Card({ children }) {
  return <div className="card">{children}</div>;
}

export function Clock({ color, time }) {
  return (
    <div className="clock-container">
      <h3 style={{ color: color, margin: 0, fontSize: "2rem" }}>{time}</h3>
    </div>
  );
}

export default function Profile() {
  return (
    <main className="container">
      <header className="header">
        <h1>Passing Props to a Component</h1>
        <p>
          React components use props to communicate with each other. Every
          parent component can pass some information to its child components by
          giving them props.
        </p>
      </header>

      <section className="section">
        <h2>Avatar component</h2>
        <p>Basic prop passing for reusable UI elements.</p>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Avatar
            size={100}
            person={{
              name: "Katsuko Saruhashi",
              imageId: "YfeOqp2",
            }}
          />
          <Avatar
            size={80}
            person={{
              name: "Aklilu Lemma",
              imageId: "OKS67lh",
            }}
          />
          <Avatar
            size={50}
            person={{
              name: "Lin Lanying",
              imageId: "1bX5QH6",
            }}
          />
        </div>
      </section>

      <section className="section">
        <h2>Passing JSX as children</h2>
        <p>Using the special children prop to nest content within a wrapper.</p>
        <div style={{ textAlign: "center" }}>
          <Card>
            <Avatar
              size={100}
              person={{
                name: "Katsuko Saruhashi",
                imageId: "YfeOqp2",
              }}
            />
          </Card>
          <br />
          <Clock
            color="var(--accent-primary)"
            time={new Date().toLocaleTimeString()}
          />
        </div>
      </section>

      <section className="section">
        <span className="challenge-badge">Knowledge Check</span>
        <h2>Challenge 1: Extract a component</h2>
        <p>Refactoring duplicated markup into a reusable component.</p>
        <Gallery />
      </section>

      <section className="section">
        <span className="challenge-badge">Knowledge Check</span>
        <h2>Challenge 2: Dynamic Props</h2>
        <p>Adjusting image sizing logic based on incoming numeric props.</p>
        <Profile2 />
      </section>

      <section className="section">
        <span className="challenge-badge">Knowledge Check</span>
        <h2>Challenge 3: JSX in Children</h2>
        <p>Extracting a layout component that takes arbitrary JSX content.</p>
        <Profile3 />
      </section>

      <footer
        style={{
          textAlign: "center",
          marginTop: "4rem",
          color: "var(--text-dim)",
          fontSize: "0.9rem",
        }}
      >
        React Learning Journey — Day 6: Describing the UI
      </footer>
    </main>
  );
}
