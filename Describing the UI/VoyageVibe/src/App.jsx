import { destinations } from "./data";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { DestinationList } from "./DestinationList";
import { motion } from "framer-motion";

function App() {
  const handleCategoryClick = (category) => {
    // Logic removed to follow [RULE 1]: No Hooks/State for now.
    console.log(`Category clicked: ${category}`);
  };

  return (
    <div className="app-layout">
      <Sidebar handleCategoryClick={handleCategoryClick} activeCategory="All" />

      <main className="main-content">
        <header className="container" style={{ marginBottom: "2rem" }}>
          <Navbar />
        </header>

        <section className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="header-text" style={{ marginBottom: "3rem" }}>
              <h1
                className="title text-gradient"
                style={{ fontSize: "3rem", marginBottom: "0.5rem" }}
              >
                Explore the World
              </h1>
              <p
                className="subtitle"
                style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}
              >
                Discover breathtaking destinations tailored for your next
                adventure.
              </p>
            </div>

            <DestinationList destinations={destinations} />
          </motion.div>
        </section>
      </main>
    </div>
  );
}

export default App;
