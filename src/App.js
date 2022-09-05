import Footer from "./Components/Footer/Footer.js";
import Navbar from "./Components/Navbar/Navbar.js";
import Home from "./Pages/Home/Home.js";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Navbar />
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
