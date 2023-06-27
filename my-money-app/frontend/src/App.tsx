import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RoutesManager from "./routes";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="container__content">
        <Sidebar />
        <RoutesManager />
      </div>
      <Footer />
    </div>
  );
}

export default App;
