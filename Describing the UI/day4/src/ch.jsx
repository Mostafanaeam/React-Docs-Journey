export function Bio() {
  return (
    <div className="bio-inner">
      <h1>Welcome to my website!</h1>
      <p className="summary">
        You can find my thoughts here.
        <br />
        <br />
        <b>
          And <i>pictures</i> of scientists!
        </b>
      </p>
    </div>
  );
}

export default function Challenge() {
  return (
    <div className="bio-card">
      <div className="challenge-title">
        🏆 Challenge 1 of 1 — Convert some HTML to JSX
      </div>
      <p className="challenge-desc">
        This HTML was pasted into a component, but it&apos;s not valid JSX. Fix
        it:
      </p>
      <Bio />
    </div>
  );
}
