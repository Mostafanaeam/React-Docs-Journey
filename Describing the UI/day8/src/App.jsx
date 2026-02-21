import "./App.css";
import { people } from "./data";
import { getImageUrl } from "./utils";
import List2 from "./Challenge/ch1/App";
import RecipeList from "./Challenge/ch2/App";
import RecipeList2 from "./Challenge/ch3/App";
import Poem from "./Challenge/ch4/App";
import reactLogo from "./assets/react.svg";

//* const people = [
//   "Creola Katherine Johnson: mathematician",
//   "Mario José Molina-Pasquel Henríquez: chemist",
//   "Mohammad Abdus Salam: physicist",
//   "Percy Lavon Julian: chemist",
//   "Subrahmanyan Chandrasekhar: astrophysicist",
// *];

export default function List() {
  //* const listItems = people.map((person) => <li>{person}</li>);
  //map() is a higher-order function that takes a callback function as an argument.
  // The callback function is called for each element in the array.
  // The callback function returns a value that is added to the new array.
  // The map() function returns a new array with the values returned by the callback function.
  //? const chemists = people.filter((person) => person.profession === "chemist");
  //? console.log(chemists);
  // filter() is a higher-order function that takes a callback function as an argument.
  // The callback function is called for each element in the array.
  // The callback function returns a boolean value that is used to filter the array.
  // The filter() function returns a new array with the elements that return true.
  /* const listItems = chemists.map((person) => (
   ? <li>
    ?  <img src={getImageUrl(person)} alt={person.name} />
    ?  <p>
    ?    <b>{person.name}:</b>
    ?    {" " + person.profession + " "}
    ?    known for {person.accomplishment}
    ?  </p>
    ?</li>
  ));*/
  const listItems = people.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));

  return (
    <div className="container">
      <div className="logo-container">
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Rendering Lists</h1>
      <section className="section-card">
        <p>
          You will often want to display multiple similar components from a
          collection of data. You can use the JavaScript array methods to
          manipulate an array of data. On this page, you’ll use filter() and
          map() with React to filter and transform your array of data into an
          array of components.
        </p>

        {/* <ul>{listItems}</ul> */}
        {/* <ul>{listItems}</ul> */}
        <ul>{listItems}</ul>
      </section>

      <hr />

      <h1>Challenges</h1>
      <section className="section-card">
        <h2>Challenge 1: Splitting a list in two</h2>
        <p>
          Show two separate lists one after another: Chemists and Everyone Else.
        </p>
        <List2 />
      </section>

      <section className="section-card">
        <h2>Challenge 2: Splitting a list in two</h2>
        <p>
          Show two separate lists one after another: Chemists and Everyone Else.
        </p>
        <RecipeList />
      </section>

      <section className="section-card">
        <h2>Challenge 3: Extracting a list item component</h2>
        <p>Simplify the component by extracting a Recipe component.</p>
        <RecipeList2 />
      </section>

      <section className="section-card">
        <h2>Challenge 4: List with a separator</h2>
        <p>
          Insert an <code>hr</code> separator between each paragraph.
        </p>
        <Poem />
      </section>

      <div className="recap-section">
        <h2>Recap</h2>
        <p>On this page you learned:</p>
        <ul>
          <li>
            How to move data out of components and into data structures like
            arrays and objects.
          </li>
          <li>
            How to generate sets of similar components with JavaScript’s{" "}
            <code>map()</code>.
          </li>
          <li>
            How to create arrays of filtered items with JavaScript’s{" "}
            <code>filter()</code>.
          </li>
          <li>
            Why and how to set <code>key</code> on each component in a
            collection so React can keep track of each of them even if their
            position or data changes.
          </li>
        </ul>
      </div>
    </div>
  );
}
