import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavigationComponent from "./components/Navigation/Navigation";
import Headers from "./components/Ui/Headers/Headers";
import Sidebar from "./components/Ui/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Headers />
        <div className="md:flex ">
          <Sidebar />
          <NavigationComponent />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
