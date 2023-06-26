import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="container__content">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
