import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Route path='/register' element={<Register />} />
    </BrowserRouter>
  );
}
