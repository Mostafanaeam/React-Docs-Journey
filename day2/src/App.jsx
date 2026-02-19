import "./App.css";
import Profile1 from "./Challenge/ch1.jsx";
import Profile2 from "./Challenge/ch2.jsx";
import Gallery from "./Challenge/ch3.jsx";
import Congratulations from "./Challenge/ch4.jsx";

export default function App() {
  return (
    <div className="container">
      <header>
        <h1>Your First Component </h1>
        <p className="subtitle">
         Components are one of the core concepts of React . They are the foundation upon which you build user interfaces (UI), which
      makes them the perfect place to start your React journey!
        </p>
      </header>

      <section className="challenges-grid">
        {/* Challenge 1 */}
        <article className="challenge-card">
          <h2>Challenge 1: Export</h2>
          <p>Fixing the default export definition.</p>
          <div className="component-preview">
            <Profile1 />
          </div>
        </article>

        {/* Challenge 2 */}
        <article className="challenge-card">
          <h2>Challenge 2: Return</h2>
          <p>Correcting the return statement syntax.</p>
          <div className="component-preview">
            <Profile2 />
          </div>
        </article>

        {/* Challenge 3 */}
        <article className="challenge-card">
          <h2>Challenge 3: Naming</h2>
          <p>Ensuring components used PascalCase.</p>
          <div className="component-preview">
            <Gallery />
          </div>
        </article>

        {/* Challenge 4 */}
        <article className="challenge-card">
          <h2>Challenge 4: Create</h2>
          <p>Writing a component from scratch.</p>
          <div className="component-preview">
            <Congratulations />
          </div>
        </article>
      </section>

      <footer>
        <p>Day 2 - React Documentation Journey</p>
      </footer>
    </div>
  );
}
