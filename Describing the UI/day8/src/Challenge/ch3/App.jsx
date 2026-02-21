/*
Challenge 3 of 4: Extracting a list item component 
This RecipeList component contains two nested map calls. 
To simplify it, extract a Recipe component from it which will accept id, name, and ingredients props. 
Where do you place the outer key and why?
*/

import { recipes } from "./data";

function Recipe({ recipe }) {
  return (
    <div>
      <h2>{recipe.name}</h2>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}
export default function RecipeList2() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
/*
You can copy-paste the JSX from the outer map into a new Recipe component and return that JSX. 
Then you can change recipe.name to name, recipe.id to id, and so on, and pass them as props to the Recipe:
Here, <Recipe {...recipe} key={recipe.id} /> is a syntax shortcut saying “pass all properties of the recipe object as props to the Recipe component”. 
You could also write each prop explicitly: <Recipe id={recipe.id} name={recipe.name} ingredients={recipe.ingredients} key={recipe.id} />.

Note that the key is specified on the <Recipe> itself rather than on the root <div> returned from Recipe.
 This is because this key is needed directly within the context of the surrounding array.
  Previously, you had an array of <div>s so each of them needed a key, but now you have an array of <Recipe>s. 
  In other words, when you extract a component, don’t forget to leave the key outside the JSX you copy and paste.
*/
