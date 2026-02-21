/*
Challenge 4 of 4: List with a separator 
This example renders a famous haiku by Tachibana Hokushi, with each line wrapped 
in a <p> tag.
Your job is to insert an <hr /> separator between each paragraph.
Your resulting structure should look like this:
<article>
  <p>I write, erase, rewrite</p>
  <hr />
  <p>Erase again, and then</p>
  <hr />
  <p>A poppy blooms.</p>
</article>
A haiku only contains three lines, but your solution should work with 
any number of lines. Note that <hr /> elements only appear between the <p> elements,
not in the beginning or the end!
*/
const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) => (
        <>
          {index > 0 && <hr />}
          {/* index is not a prop, it is a variable */}
          <p key={index}>
            {line}
            {/* {index} */}
          </p>
        </>
      ))}
    </article>
  );
}

/*
!solutions:
You can write a manual loop, inserting <hr /> and <p>...</p> into the output array as you go:
const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
  let output = [];

  // Fill the output array
  poem.lines.forEach((line, i) => {
    output.push(
      <hr key={i + '-separator'} />
    );
    output.push(
      <p key={i + '-text'}>
        {line}
      </p>
    );
  });
  // Remove the first <hr />
  output.shift();

  return (
    <article>
      {output}
    </article>
  );
}

!Using the original line index as a key doesn’t work anymore because each separator and paragraph are now in the same array. However, you can give each of them a distinct key using a suffix, e.g. key={i + '-text'}.

Alternatively, you could render a collection of Fragments which contain <hr /> and <p>...</p>. However, the <>...</> shorthand syntax doesn’t support passing keys, so you’d have to write <Fragment> explicitly:
import { Fragment } from 'react';

const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, i) =>
        <Fragment key={i}>
          {i > 0 && <hr />}
          <p>{line}</p>
        </Fragment>
      )}
    </article>
  );
}

Remember, Fragments (often written as <> </>) let you group JSX nodes without adding extra <div>s!
*/
