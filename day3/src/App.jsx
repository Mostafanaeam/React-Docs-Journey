import "./App.css";
import Gallery from "./Gallery.jsx";
import Profile from "./Profile.jsx";

function App() {
  return (
    <>
      {/* ===== Page Header ===== */}
      <header className="page-header">
        <div className="badge">⚛️ React Docs Journey · Day 3</div>
        <h1>Importing &amp; Exporting Components</h1>
        <p>
          The magic of components lies in their reusability: you can create
          components that are composed of other components. But as you nest more
          and more components, it often makes sense to start splitting them into
          different files. This lets you keep your files easy to scan and reuse
          components in more places.
        </p>
      </header>

      {/* ===== Challenge Card ===== */}
      <div className="challenge-card">
        <h2>🏆 Challenge 1 of 1 &mdash; Split the components further</h2>
        <p>
          Currently, <code>Gallery.js</code> exports both <code>Profile</code>{" "}
          and <code>Gallery</code>, which is a bit confusing.
        </p>
        <p>
          Move the <code>Profile</code> component to its own{" "}
          <code>Profile.js</code>, and then change the <code>App</code>{" "}
          component to render both <code>Profile</code> and <code>Gallery</code>{" "}
          one after another.
        </p>
        <p>
          You may use either a <strong>default</strong> or a{" "}
          <strong>named</strong> export for Profile, but make sure that you use
          the corresponding import syntax in both <code>App.js</code> and{" "}
          <code>Gallery.js</code>!
        </p>
      </div>

      {/* ===== Single Profile demo ===== */}
      <div className="section-divider">
        <span>Live Demo</span>
      </div>

      <div className="demo-section">
        <div className="demo-label">📌 Single Profile Component</div>
        <div className="profile-card">
          <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />
          <div className="profile-info">
            <div className="profile-name">Alan L. Hart</div>
            <div className="profile-role">Physician &amp; Scientist</div>
          </div>
        </div>
      </div>

      {/* ===== Gallery demo ===== */}
      <div className="demo-section">
        <div className="demo-label">🖼️ Gallery Component</div>
        <Gallery />
      </div>

      {/* ===== Footer ===== */}
      <footer className="page-footer">
        Built with <span>❤️</span> using React &amp; Vite
      </footer>
    </>
  );
}

export default App;
