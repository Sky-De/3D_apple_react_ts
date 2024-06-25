import "./App.css";
import Features from "./components/Features";
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
      <Features />
    </main>
  );
}

// export default App;
export default Sentry.withProfiler(App);
