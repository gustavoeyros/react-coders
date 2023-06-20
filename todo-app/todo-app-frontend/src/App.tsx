import "./App.css";
import Menu from "./components/template/Menu";
import RoutesManager from "./routes/routes";

function App() {
  return (
    <div className="container">
      <Menu />
      <RoutesManager />
    </div>
  );
}

export default App;
