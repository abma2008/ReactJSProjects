// import './App.css';
import Create from "./components/create/Create";
import Read from "./components/read/Read";
import Update from "./components/update/Update";
import Delete from "./components/delete/Delete";
import NavHeader from "./components/NavHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div><NavHeader /></div>
      <BrowserRouter>
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
