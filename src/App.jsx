import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./components/Project";
import CompletedProjects from "./components/Completedprojects";
import OngoingProjects from "./components/Ongoingprojects";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/projects"
          element={<Projects />}
        />

        <Route
          path="/projects/completed"
          element={<CompletedProjects />}
        />

        <Route
          path="/projects/ongoing"
          element={<OngoingProjects />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;