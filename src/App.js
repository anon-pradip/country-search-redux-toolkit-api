import Navabar from "./components/Navabar";
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SIngleCountry from "./pages/SIngleCountry";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Navabar />}>
          <Route index element={<Home />}></Route>
          <Route path="/:code" element={<SIngleCountry />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
