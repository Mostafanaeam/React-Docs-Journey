/*
Challenge 1 of 3: Fix a broken clock 
This component tries to set the <h1>’s CSS class to "night" during the time from midnight to six hours in the morning, 
and "day" at all other times.
However, it doesn’t work. Can you fix this component?

You can verify whether your solution works by temporarily changing the computer’s timezone. 
When the current time is between midnight and six in the morning, the clock should have inverted colors!

export default function Clock({ time }) {
  const hours = time.getHours();
  let className;
  if (hours >= 0 && hours <= 6) {
    className = 'night';
  } else {
    className = 'day';
  }
  return (
    <h1 className={className}>
      {time.toLocaleTimeString()}
    </h1>
  );
}
*/

export default function Clock({ time }) {
  const hours = time.getHours();
  let className = "";
  if (hours >= 0 && hours <= 6) {
    className = "night";
  } else {
    className = "day";
  }
  return <h1 className={className}>{time.toLocaleTimeString()}</h1>;
}

// explain the code
/*
export default function Clock({ time }) {
  //* get the hours from the time
  const hours = time.getHours();
  //* set the class name based on the hours
  let className = "";
  //* if the hours are between 0 and 6, set the class name to "night"
  if (hours >= 0 && hours <= 6) {
    className = "night";

  } else {
    className = "day";

  }
  return <h1 className={className}>{time.toLocaleTimeString()}</h1>;

}

*/ 