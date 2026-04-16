/*
Challenge 3 of 4: Fix a crash 
Here is a small form that is supposed to let the user leave some feedback. When the feedback is submitted, 
it’s supposed to display a thank-you message.
 However, it crashes with an error message saying “Rendered fewer hooks than expected”. 
 Can you spot the mistake and fix it?
 ?solution: 
 Try moving the second useState call after the if condition and notice how this breaks it again.

If your linter is configured for React, you should see a lint error when you make a mistake like this.
 If you don’t see an error when you try the faulty code locally, you need to set up linting for your project.
*/
import { useState } from "react";

export default function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("");

  if (isSent) {
    return <h1>Thank you!</h1>;
  } else {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(`Sending: "${message}"`);
          setIsSent(true);
        }}
      >
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    );
  }
}
