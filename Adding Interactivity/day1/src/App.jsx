import "./App.css";
import LightSwitch from "./ch/ch1";
import ColorSwitch from "./ch/ch2";

function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

// function Button({ onClick, children }) {
//   return <button onClick={onClick}>{children}</button>;
// }

function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return <Button onClick={handlePlayClick}>Play "{movieName}"</Button>;
}

function UploadButton() {
  return <Button onClick={() => alert("Uploading!")}>Upload Image</Button>;
}

export default function App() {
  function handleClick() {
    alert("You clicked me!");
  }
  return (
    <main className="main-container">
      <header>
        <h1>Responding to Events</h1>
        <p className="card-glass">
          React lets you add event handlers to your JSX. Event handlers are your
          own functions that will be triggered in response to interactions like
          clicking, hovering, focusing form inputs, and so on.
        </p>
      </header>

      <section className="card-glass">
        <h2>Basic Interaction</h2>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <button>I don't do anything</button>
          <button onClick={handleClick}>Simple Alert</button>
          <button
            onClick={() => {
              alert("You clicked me!");
            }}
          >
            Inline Alert
          </button>
        </div>
      </section>

      <section className="card-glass">
        <h2>Reading props in event handlers</h2>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <AlertButton message="Playing!">Play Movie</AlertButton>
          <AlertButton message="Uploading!">Upload Image</AlertButton>
        </div>
      </section>

      <section className="card-glass">
        <h2>Passing event handlers as props</h2>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <PlayButton movieName="The Lion King" />
          <UploadButton />
        </div>
      </section>

      <section className="card-glass">
        <h2>Event propagation</h2>
        <p>
          Event handlers will also catch events from any children your component
          might have. We say that an event “bubbles” up the tree.
        </p>
        <div
          className="Toolbar"
          onClick={() => {
            alert("You clicked on the toolbar!");
          }}
        >
          <button onClick={() => alert("Playing!")}>Play Movie</button>
          <button onClick={() => alert("Uploading!")}>Upload Image</button>
        </div>
      </section>

      <section className="card-glass">
        <h2>Stopping propagation</h2>
        <p>
          Sometimes you don’t want an event to bubble up. You can stop it by
          calling `e.stopPropagation()` inside the event handler.
        </p>
        <div
          className="Toolbar"
          onClick={() => {
            alert("You clicked on the toolbar!");
          }}
        >
          <Button onClick={() => alert("Playing!")}>Play Movie</Button>
          <Button onClick={() => alert("Uploading!")}>Upload Image</Button>
        </div>
      </section>

      <section className="card-glass">
        <h2>Recap</h2>
        <ul>
          <li>You can handle events by passing a function as a prop.</li>
          <li>Event handlers must be passed, not called!</li>
          <li>
            You can define an event handler function separately or inline.
          </li>
          <li>Accessing props inside handlers is fully supported.</li>
          <li>Declare in parent, pass to child for clean control.</li>
          <li>Custom event handler props naming is allowed.</li>
          <li>
            Use <code>e.stopPropagation()</code> to prevent bubbling.
          </li>
          <li>
            Use <code>e.preventDefault()</code> for browser default behaviors.
          </li>
        </ul>
      </section>

      <section className="card-glass challenge-box">
        <h2>Challenges</h2>
        <article>
          <h3>Challenge 1 of 2: Fix an event handler</h3>
          <LightSwitch />
        </article>
        <hr />
        <article>
          <h3>Challenge 2 of 2: Wire up the events</h3>
          <ColorSwitch />
        </article>
      </section>
    </main>
  );
}
