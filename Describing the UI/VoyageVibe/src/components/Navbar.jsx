import { Search, User, Bell, Compass } from "lucide-react";

export function Navbar() {
  // [RULE 3]: Using JSX Variables for cleaner parts of the UI
  const logoSection = (
    <div
      className="logo"
      style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
    >
      <div
        className="icon"
        style={{
          background: "var(--gradient-primary)",
          padding: "0.5rem",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Compass size={24} color="#05060a" />
      </div>
      <div className="text">
        <h1 style={{ fontSize: "1.5rem", margin: 0 }} className="text-gradient">
          VoyageVibe
        </h1>
      </div>
    </div>
  );

  const searchSection = (
    <div
      className="search-container"
      style={{ position: "relative", width: "40%" }}
    >
      <Search
        size={18}
        style={{
          position: "absolute",
          left: "1rem",
          top: "50%",
          transform: "translateY(-50%)",
          color: "var(--text-secondary)",
        }}
      />
      <input
        type="text"
        placeholder="Search destinations, cultures, secrets..."
        style={{
          width: "100%",
          padding: "0.75rem 1rem 0.75rem 3rem",
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px solid var(--glass-border)",
          borderRadius: "50px",
          color: "var(--text-main)",
          outline: "none",
          fontSize: "0.9rem",
          transition: "all 0.3s ease",
        }}
      />
    </div>
  );

  const userActions = (
    <div
      className="user-actions"
      style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}
    >
      <button style={{ color: "var(--text-secondary)", position: "relative" }}>
        <Bell size={20} />
        <span
          style={{
            position: "absolute",
            top: -2,
            right: -2,
            width: "8px",
            height: "8px",
            background: "var(--accent)",
            borderRadius: "50%",
          }}
        ></span>
      </button>

      <div
        className="user-profile"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          padding: "0.40rem 0.6rem",
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "50px",
          border: "1px solid var(--glass-border)",
        }}
      >
        <div
          className="avatar"
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            overflow: "hidden",
            background: "var(--gradient-primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <User size={18} color="#05060a" />
        </div>
        <div className="user-info">
          <div
            className="name"
            style={{ fontSize: "0.85rem", fontWeight: 600 }}
          >
            John Wander
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <nav
      className="glass-panel"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        marginTop: "1rem",
      }}
    >
      {logoSection}
      {searchSection}
      {userActions}
    </nav>
  );
}
