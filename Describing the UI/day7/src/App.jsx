import "./App.css";
import PackingList2 from "./Challenge/ch1";
import PackingList3 from "./Challenge/ch2";
import DrinkList from "./Challenge/ch3";
import reactLogo from "./assets/react.svg";

function Item({ name, isPacked }) {
  //* Conditional (ternary) operator
  // return <li className="item">{isPacked ? name + "✅" : name}</li>;
  // return <li className="item">{isPacked ? null : name}</li>;
  //* if statement
  // if (isPacked) {
  // return <li className="item">{name} ✅</li>;
  //   return null;
  // }
  // return <li className="item">{name}</li>;
  // return <li className="item">{isPacked ? <del>{name + " ✅"}</del> : name}</li>;
  //* Logical AND operator (&&)
  return (
    <li className="item">
      {name}
      {isPacked && " ✅"}
    </li>
  );
}

export default function PackingList() {
  return (
    <div className="container">
      <div className="logo-container">
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Conditional Rendering</h1>
      <p>
        Your components will often need to display different things depending on
        different conditions. In React, you can conditionally render JSX using
        JavaScript syntax like <code>if</code> statements, <code>&&</code>, and{" "}
        <code>? :</code> operators.
      </p>
      <section className="section-card">
        <h2>Sally Ride's Packing List</h2>
        <ul>
          <Item isPacked={true} name="Space suit" />
          <Item isPacked={true} name="Helmet with a golden leaf" />
          <Item isPacked={false} name="Photo of Tam" />
        </ul>
      </section>
      <hr />
      <section className="section-card">
        <h2>Challenge 1 of 3</h2>
        <p>
          Challenge 1 of 3: Show an icon for incomplete items with ? : Use the
          conditional operator (cond ? a : b) to render a ❌ if isPacked isn’t
          true.
        </p>
        <PackingList2 />
      </section>
      <hr />
      <section className="section-card">
        <h2>Challenge 2 of 3</h2>
        <p>
          Challenge 2 of 3: Show the item importance with && In this example,
          each Item receives a numerical importance prop. Use the && operator to
          render “(Importance: X)” in italics, but only for items that have
          non-zero importance.
        </p>
        <PackingList3 />
      </section>
      <hr />
      <section className="section-card">
        <h2>Challenge 3 of 3</h2>
        <p>
          Challenge 3 of 3: Refactor a series of ? : to if and variables This
          Drink component uses a series of ? : conditions to show different
          information depending on whether the name prop is "tea" or "coffee".
          Refactor this code to use a single if statement instead of three ? :
          conditions.
        </p>
        <DrinkList />
      </section>
      <hr />
      <div className="recap-section">
        <h2>Recap</h2>
        <ul>
          <li>In React, you control branching logic with JavaScript.</li>
          <li>
            You can return a JSX expression conditionally with an{" "}
            <code>if</code> statement.
          </li>
          <li>
            You can conditionally save some JSX to a variable and then include
            it inside other JSX by using the curly braces.
          </li>
          <li>
            In JSX, <code>{"{cond ? <A /> : <B />}"}</code> means “if cond,
            render <code>{"<A />"}</code>, otherwise <code>{"<B />"}</code>”.
          </li>
          <li>
            In JSX, <code>{"{cond && <A />}"}</code> means “if cond, render{" "}
            <code>{"<A />"}</code>, otherwise nothing”.
          </li>
          <li>
            The shortcuts are common, but you don’t have to use them if you
            prefer plain <code>if</code>.
          </li>
        </ul>
      </div>
    </div>
  );
}
