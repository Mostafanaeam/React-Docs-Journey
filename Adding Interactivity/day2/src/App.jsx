import "./App.css";
import { sculptureList } from "./data.jsx";
import { useState } from "react";
import Gallery from "./Gallery.jsx";
import Ch1 from "./ch/ch1/ch1.jsx";
import Ch2 from "./ch/ch2/ch2.jsx";
import Ch3 from "./ch/ch3/ch3.jsx";
import Ch4 from "./ch/ch4/ch4.jsx";

export default function App() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    setIndex(index + 1);
  }
  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }
  let sculpture = sculptureList[index];
  return (
    <div className="main-container">
      <div className="card-glass">
        <h1>State: A Component's Memory</h1>
        <p>
          Components often need to change what's on the screen as a result of an
          interaction. Typing into the form should update the input field,
          clicking "next" on an image carousel should change which image is
          displayed, clicking "buy" should put a product in the shopping cart.
          Components need to "remember" things: the current input value, the
          current image, the shopping cart. In React, this kind of
          component-specific memory is called state.
        </p>
        <button onClick={handleClick}>Next</button>
      </div>

      <div className="card-glass">
        <h2>
          <i>{sculpture.name} </i>
          by {sculpture.artist}
        </h2>
        <h3>
          ({index + 1} of {sculptureList.length})
        </h3>
        <img src={sculpture.url} alt={sculpture.alt} />
        <p>{sculpture.description}</p>
      </div>

      <div className="card-glass">
        <h2>Meet your first Hook</h2>
        <p>
          In React, useState, as well as any other function starting with "use",
          is called a Hook. Hooks are special functions that are only available
          while React is rendering (which we'll get into in more detail on the
          next page). They let you "hook into" different React features. State is
          just one of those features, but you will meet the other Hooks later.
        </p>
      </div>

      <div className="card-glass">
        <h2>Anatomy of useState </h2>
        <p>
          When you call useState, you are telling React that you want this
          component to remember something:
        </p>
        <code>const [index, setIndex] = useState(0); </code>
        <p>
          In this case, you want React to remember index.
        </p>
        <p>
          The only argument to useState is the initial value of your state
          variable. In this example, the index's initial value is set to 0 with
          useState(0). Every time your component renders, useState gives you an
          array containing two values: The state variable (index) with the value
          you stored. The state setter function (setIndex) which can update the
          state variable and trigger React to render the component again.
        </p>
      </div>

      <div className="card-glass">
        <h2>Giving a component multiple state variables </h2>
        <button onClick={handleNextClick}>Next</button>
        <h2>
          <i>{sculpture.name} </i>
          by {sculpture.artist}
        </h2>
        <h3>
          ({index + 1} of {sculptureList.length})
        </h3>
        <button onClick={handleMoreClick}>
          {showMore ? "Hide" : "Show"} details
        </button>
        {showMore && <p>{sculpture.description}</p>}
        <img src={sculpture.url} alt={sculpture.alt} />
      </div>

      <div className="card-glass">
        <h2>State is isolated and private</h2>
        <p>
          State is local to a component instance on the screen. In other words, if
          you render the same component twice, each copy will have completely
          isolated state! Changing one of them will not affect the other.
        </p>
        <div className="Toolbar">
          <Gallery />
        </div>
        <div className="Toolbar">
          <Gallery />
        </div>
      </div>

      <div className="card-glass">
        <h2>Recap</h2>
        <ul>
          <li>Use a state variable when a component needs to "remember" some information between renders.</li>
          <li>State variables are declared by calling the useState Hook.</li>
          <li>Hooks are special functions that start with use. They let you "hook into" React features like state.</li>
          <li>Hooks might remind you of imports: they need to be called unconditionally. Calling Hooks, including useState, is only valid at the top level of a component or another Hook.</li>
          <li>The useState Hook returns a pair of values: the current state and the function to update it.</li>
          <li>You can have more than one state variable. Internally, React matches them up by their order.</li>
          <li>State is private to the component. If you render it in two places, each copy gets its own state.</li>
        </ul>
      </div>

      <div className="card-glass challenge-box">
        <h2>Challenge 1 of 4: Complete the gallery </h2>
        <p>
          When you press "Next" on the last sculpture, the code crashes. Fix the logic to prevent the crash. You may do this by adding extra logic to event handler or by disabling the button when the action is not possible.
        </p>
        <p>
          After fixing the crash, add a "Previous" button that shows the previous sculpture. It shouldn't crash on the first sculpture.
        </p>
        <Ch1 />
      </div>

      <div className="card-glass challenge-box">
        <h2>Challenge 2 of 4: Fix stuck form inputs </h2>
        <p>When you type into the input fields, nothing appears. It's like the input values are stuck with empty strings. The value of the first input is set to always match the firstName variable, and the value for the second input is set to always match the lastName variable. This is correct. Both inputs have onChange event handlers, which try to update the variables based on the latest user input (e.target.value). However, the variables don't seem to "remember" their values between re-renders. Fix this by using state variables instead.</p>
        <Ch2 />
      </div>

      <div className="card-glass challenge-box">
        <h2>Challenge 3 of 4: Fix a crash </h2>
        <p>
          Here is a small form that is supposed to let the user leave some feedback. When the feedback is submitted, 
          it's supposed to display a thank-you message.
          However, it crashes with an error message saying "Rendered fewer hooks than expected". 
          Can you spot the mistake and fix it?
        </p>
        <Ch3 />
      </div>

      <div className="card-glass challenge-box">
        <h2>Challenge 4 of 4: Remove unnecessary state </h2>
        <p>
          When the button is clicked, this example should ask for the user's name and then display an alert greeting them. 
          You tried to use state to keep the name, but for some reason the first time it shows
          "Hello, !", and then "Hello, [name]!" with the previous input every time after.
          To fix this code, remove the unnecessary state variable. (We will discuss about why this didn't work later.)
          Can you explain why this state variable was unnecessary?
        </p>
        <Ch4 />
      </div>
    </div>
  );
}
