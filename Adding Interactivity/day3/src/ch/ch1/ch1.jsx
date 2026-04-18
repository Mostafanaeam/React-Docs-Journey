export default function Clock({ time }) {
  return (
    <p className="card-glass" style={{ color: "var(--accent-blue)", marginTop: "1rem" }}>
      {time}
    </p>
  );
}
