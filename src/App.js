import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./component/Main/Main";
import { Kim } from "./component/test/Kim";
import { Yang } from "./component/test/Yang";
import { Yun } from "./component/test/Yun";
import { Choi } from "./component/test/Choi";
import { Hong } from "./component/test/Hong";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/kim" element={<Kim />} />
        <Route path="/yang" element={<Yang />} />
        <Route path="/yun" element={<Yun />} />
        <Route path="/choi" element={<Choi />} />
        <Route path="/hong" element={<Hong />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
