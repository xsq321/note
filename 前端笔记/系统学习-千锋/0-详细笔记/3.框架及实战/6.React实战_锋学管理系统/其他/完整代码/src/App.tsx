import "./App.css";
import MainLayout from "./layout";
import { Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import { renderRoutes } from "./router/utils";
import { mainRoutes } from "./router";
import AuthRequire from "./guard/AuthRequire";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthRequire />}>
          {renderRoutes(mainRoutes)}
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
