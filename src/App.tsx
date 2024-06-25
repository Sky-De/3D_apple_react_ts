import "./App.css";
import { Hero } from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import { Navbar } from "./components/Navbar";
import * as Sentry from "@sentry/react";

function App() {
  return (
    <main className="app">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  );
}

// export default App;
export default Sentry.withProfiler(App);
