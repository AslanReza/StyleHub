import "./App.css";
import Flexbox from "./articles/7-CSSGrid-Concept";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="flex items-stretch">
      <Sidebar />
      <Flexbox />
      <Footer />
    </main>
  );
}

export default App;
