import MainLayout from "./layout";
import { Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import { renderRoutes } from "./router/utils";
import { mainRoutes } from "./router";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {renderRoutes(mainRoutes)}
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
