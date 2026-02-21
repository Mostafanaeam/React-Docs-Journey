/*
Challenge 2 of 4: Nested lists in one component 
Make a list of recipes from this array! For each recipe in the array, 
display its name as an <h2> and list its ingredients in a <ul>.
*/

import { recipes } from './data';

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map(recipes=>
            <li key={recipes.id}>
                <h2>{recipes.name}</h2>
                <ul>
                    {recipes.ingredients.map(ingredients=>
                        <li key={ingredients}>{ingredients}</li>
                    )}
                </ul>
            </li>
        )}
      </ul>
    </div>
  );
}
