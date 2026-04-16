/*
Challenge 4 of 4: Remove unnecessary state 
When the button is clicked, this example should ask for the user’s name and then display an alert greeting them. 
You tried to use state to keep the name, but for some reason the first time it shows
“Hello, !”, and then “Hello, [name]!” with the previous input every time after.
To fix this code, remove the unnecessary state variable. (We will discuss about why this didn’t work later.)
Can you explain why this state variable was unnecessary?
*/
export default function FeedbackForm() {

  function handleClick() {
    const name = prompt("What is your name?");
    alert(`Hello, ${name}!`);
  }
  

  return <button onClick={handleClick}>Greet</button>;
}
