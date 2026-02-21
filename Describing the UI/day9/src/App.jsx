import "./App.css";
import Clock from "./Challenge/ch1/Clock";
import App2 from "./Challenge/ch2/App";
import StoryTray from "./Challenge/ch3/StoryTray";
import reactLogo from "./assets/react.svg";

function Recipe({ drinkers }) {
  return (
    <ol>
      <li>Boil {drinkers} cups of water.</li>
      <li>
        Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.
      </li>
      <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
    </ol>
  );
}

function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

function TeaSet() {
  return (
    <section className="section-card">
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </section>
  );
}

function Cup2({ guest2 }) {
  return <h2>Tea cup for guest #{guest2}</h2>;
}

function TeaGathering() {
  const cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup2 key={i} guest2={i} />);
  }
  return <section className="section-card">{cups}</section>;
}

export default function App() {
  return (
    <div className="container">
      <div className="logo-container">
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Keeping Components Pure</h1>

      <section className="section-card">
        <p>
          Some JavaScript functions are pure. Pure functions only perform a
          calculation and nothing more. By strictly only writing your components
          as pure functions, you can avoid an entire class of baffling bugs and
          unpredictable behavior as your codebase grows. To get these benefits,
          though, there are a few rules you must follow.
        </p>
      </section>

      <h2>Purity: Components as formulas</h2>
      <section className="section-card">
        <p>
          In computer science (and especially the world of functional
          programming), a pure function is a function with the following
          characteristics: It minds its own business. It does not change any
          objects or variables that existed before it was called. Same inputs,
          same output. Given the same inputs, a pure function should always
          return the same result.
        </p>

        <div className="recipe-section">
          <h3>Spiced Chai Recipe</h3>
          <h4>For two</h4>
          <Recipe drinkers={2} />
          <h4>For a gathering</h4>
          <Recipe drinkers={4} />
        </div>
      </section>

      <TeaSet />
      <hr />
      <TeaGathering />

      <hr />

      <h1>Challenges</h1>

      <section className="section-card">
        <h2>Challenge 1 of 3: Fix a broken clock</h2>
        <p>
          This component tries to set the h1’s CSS class to "night" during the
          time from midnight to six hours in the morning, and "day" at all other
          times. However, it doesn’t work. Can you fix this component?
        </p>
        <Clock time={new Date()} />
      </section>

      <section className="section-card">
        <h2>Challenge 2 of 3: Fix a broken profile</h2>
        <p>
          Two Profile components are rendered side by side with different data.
          Press “Collapse” on the first profile, and then “Expand” it. You’ll
          notice that both profiles now show the same person.
        </p>
        <App2 />
      </section>

      <section className="section-card">
        <h2>Challenge 3 of 3: Fix a broken story tray</h2>
        <p>
          The CEO of your company is asking you to add “stories” to your online
          clock app. But for some reason, “Create Story” appears more than once.
          Fix the issue.
        </p>
        <StoryTray />
      </section>

      <div className="recap-section">
        <h2>Recap</h2>
        <p>On this page you learned:</p>
        <ul>
          <li>
            A component must be pure, meaning:
            <ul>
              <li>
                <strong>It minds its own business:</strong> It should not change
                any objects or variables that existed before it was called.
              </li>
              <li>
                <strong>Same inputs, same output:</strong> Given the same
                inputs, a component should always return the same JSX.
              </li>
            </ul>
          </li>
          <li>
            Rendering can happen at any time, so components should not depend on
            each others’ rendering sequence.
          </li>
          <li>
            You should not mutate any of the inputs that your components use for
            rendering. That includes props, state, and context. To update the
            screen, “set” state instead of mutating preexisting objects.
          </li>
          <li>
            Strive to express your component’s logic in the JSX you return. When
            you need to “change things”, you’ll usually want to do it in an
            event handler. As a last resort, you can <code>useEffect</code>.
          </li>
          <li>
            Writing pure functions takes a bit of practice, but it unlocks the
            power of the React paradigm.
          </li>
        </ul>
      </div>
    </div>
  );
}
