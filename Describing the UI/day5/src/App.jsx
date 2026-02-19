import "./App.css";
import TodoList2 from "./Challenge/ch1";
import TodoList3 from "./Challenge/ch2";
import TodoList4 from "./Challenge/ch3";

const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

export function Avatar() {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";
  return <img className="avatar" src={avatar} alt={description} />;
}

export function TodoList() {
  const name = "Hedy Lamarr";
  return <h1>{name}'s To Do List</h1>;
}

function App() {
  return (
    <>
      <h1>JavaScript in JSX with Curly Braces</h1>
      <p>
        JSX lets you write HTML-like markup inside a JavaScript file, keeping
        rendering logic and content in the same place. Sometimes you will want
        to add a little JavaScript logic or reference a dynamic property inside
        that markup. In this situation, you can use curly braces in your JSX to
        open a window to JavaScript.
      </p>
      <h2>Image src as a string </h2>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <hr />
      <h2>variable</h2>
      <Avatar />
      <hr />
      <TodoList />
      <hr />
      <ul
        style={{
          backgroundColor: "black",
          color: "pink",
        }}
      >
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
      <h2>important notes</h2>

      <p>
        Inline style properties are written in camelCase. For example, HTML
        background-color: black would be written as backgroundColor: "black" in
        your component.
      </p>
      <hr />
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/7vQD0fPs.jpg"
          alt="Gregorio Y. Zara"
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
      <hr />
      <h2>Challenge 1 of 3: Fix the mistake </h2>
      <TodoList2 />
      <hr />
      <h2>Challenge 2 of 3: Extract information into an object </h2>
      <TodoList3 />
      <hr />
      <h2>Challenge 3 of 3: Write an expression inside JSX curly braces </h2>
      <TodoList4 />
    </>
  );
}

/*
what is the diffrent between:
      src="https://i.imgur.com/7vQD0fPs.jpg"
and
      src={avatar}
*/

export default App;
