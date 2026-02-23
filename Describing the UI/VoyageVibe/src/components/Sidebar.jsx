import { destinations } from "../data";
import {
  Map,
  Palmtree,
  Mountain,
  History,
  Tent,
  Waves,
  LayoutGrid,
  ChevronRight,
} from "lucide-react";

const CATEGORY_MAP = [
  { name: "All", icon: LayoutGrid },
  { name: "Coastal", icon: Waves },
  { name: "Cultural", icon: History },
  { name: "Mountain", icon: Mountain },
  { name: "Tropical", icon: Palmtree },
  { name: "Wildlife", icon: Tent },
  { name: "Nature", icon: Map },
];

export function Sidebar({ handleCategoryClick, activeCategory }) {
  // [RULE 3]: Using JSX Variables for cleaner logic
  const categoryLinks = CATEGORY_MAP.map((cat) => {
    const Icon = cat.icon;
    const isActive = activeCategory === cat.name;
    const count =
      cat.name === "All"
        ? destinations.length
        : destinations.filter((d) => d.category === cat.name).length;

    return (
      <li key={cat.name}>
        <button
          onClick={() => handleCategoryClick(cat.name)}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "0.85rem 1rem",
            borderRadius: "14px",
            background: isActive ? "var(--accent-soft)" : "transparent",
            color: isActive ? "var(--accent)" : "var(--text-secondary)",
            border: isActive
              ? "1px solid rgba(100, 255, 218, 0.2)"
              : "1px solid transparent",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
          <span
            style={{
              flex: 1,
              textAlign: "left",
              fontWeight: isActive ? 600 : 400,
            }}
          >
            {cat.name}
          </span>
          <span
            style={{
              fontSize: "0.75rem",
              opacity: 0.6,
              background: isActive ? "var(--accent)" : "var(--glass-border)",
              color: isActive ? "#05060a" : "var(--text-main)",
              padding: "2px 8px",
              borderRadius: "20px",
              fontWeight: 700,
            }}
          >
            {count}
          </span>
        </button>
      </li>
    );
  });

  const planCard = (
    <div
      className="glass-card"
      style={{ padding: "1.25rem", borderRadius: "20px" }}
    >
      <p
        style={{
          fontSize: "0.80rem",
          color: "var(--text-secondary)",
          marginBottom: "0.75rem",
        }}
      >
        Ready for your next trip?
      </p>
      <button
        style={{
          width: "100%",
          background: "var(--gradient-primary)",
          color: "#05060a",
          padding: "0.75rem",
          borderRadius: "12px",
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
        }}
      >
        Plan Now <ChevronRight size={16} />
      </button>
    </div>
  );

  return (
    <aside
      className="glass-panel"
      style={{
        margin: "1rem 0 1rem 1rem",
        padding: "2rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "2.5rem",
      }}
    >
      <div className="sidebar-header">
        <h2
          style={{
            fontSize: "1.20rem",
            color: "var(--text-secondary)",
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          Categories
        </h2>
      </div>

      <div className="sidebar-content">
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          {categoryLinks}
        </ul>
      </div>

      <div style={{ marginTop: "auto" }}>{planCard}</div>
    </aside>
  );
}
