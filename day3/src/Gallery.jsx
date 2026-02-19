import Profile from "./Profile.jsx";

export default function Gallery() {
  return (
    <div className="gallery-section">
      <div className="gallery-title">
        <span className="icon">🔬</span>
        <h2>Amazing Scientists</h2>
      </div>
      <div className="gallery-grid">
        <Profile />
        <Profile />
        <Profile />
      </div>
    </div>
  );
}
