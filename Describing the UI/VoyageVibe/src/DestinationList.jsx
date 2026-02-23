import { DestinationCard } from "./components/DestinationCard";
import { motion, AnimatePresence } from "framer-motion";

export function DestinationList({ destinations }) {
  // [RULE 3]: Using JSX Variables for cleaner mapping
  const destinationGrid = destinations.map((destination) => (
    <DestinationCard key={destination.id} destination={destination} />
  ));

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: "2rem",
        paddingBottom: "4rem",
      }}
    >
      <AnimatePresence mode="popLayout">{destinationGrid}</AnimatePresence>
    </div>
  );
}
