import { Star, MapPin, Clock, Tag } from "lucide-react";
import { motion } from "framer-motion";

export function DestinationCard({ destination }) {
  // [RULE 3]: Using JSX Variables for cleaner conditional rendering
  const featuredTag = destination.isFeatured && (
    <span
      style={{
        background: "var(--accent)",
        color: "#05060a",
        padding: "4px 12px",
        borderRadius: "50px",
        fontSize: "0.7rem",
        fontWeight: 800,
        textTransform: "uppercase",
      }}
    >
      Featured
    </span>
  );

  const newTag = destination.isNew && (
    <span
      style={{
        background: "#ff4d4d",
        color: "white",
        padding: "4px 12px",
        borderRadius: "50px",
        fontSize: "0.7rem",
        fontWeight: 800,
        textTransform: "uppercase",
      }}
    >
      New
    </span>
  );

  const ratingBadge = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.25rem",
        color: "#f1c40f",
      }}
    >
      <Star size={14} fill="#f1c40f" />
      <span
        style={{
          fontSize: "0.9rem",
          fontWeight: 700,
          color: "var(--text-main)",
        }}
      >
        {destination.rating}
      </span>
    </div>
  );

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10 }}
      className="glass-card"
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <div
        className="card-header"
        style={{ position: "relative", height: "200px" }}
      >
        <img
          src={destination.image}
          alt={destination.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            display: "flex",
            gap: "0.5rem",
          }}
        >
          {featuredTag}
          {newTag}
        </div>
      </div>

      <div className="card-content" style={{ padding: "1.5rem", flex: 1 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "0.5rem",
          }}
        >
          <h2 style={{ fontSize: "1.25rem", margin: 0 }}>{destination.name}</h2>
          {ratingBadge}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "var(--text-secondary)",
            fontSize: "0.85rem",
            marginBottom: "1rem",
          }}
        >
          <Tag size={12} />
          <span>{destination.category}</span>
        </div>

        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "0.9rem",
            lineHeight: "1.6",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            marginBottom: "1.5rem",
          }}
        >
          {destination.description}
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            color: "var(--text-secondary)",
            fontSize: "0.8rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <Clock size={12} />
            {destination.duration}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <MapPin size={12} />
            Explore
          </div>
        </div>
      </div>

      <div
        className="card-footer"
        style={{
          padding: "1.25rem 1.5rem",
          borderTop: "1px solid var(--glass-border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "rgba(255, 255, 255, 0.02)",
        }}
      >
        <div className="price">
          <span
            style={{
              fontSize: "1.2rem",
              fontWeight: 800,
              color: "var(--accent)",
            }}
          >
            {destination.price}
          </span>
          <span
            style={{
              fontSize: "0.7rem",
              color: "var(--text-secondary)",
              marginLeft: "4px",
            }}
          >
            / person
          </span>
        </div>
        <button
          style={{
            background: "white",
            color: "#05060a",
            padding: "0.6rem 1.2rem",
            borderRadius: "10px",
            fontWeight: 700,
            fontSize: "0.85rem",
          }}
        >
          Book Now
        </button>
      </div>
    </motion.div>
  );
}
