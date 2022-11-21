import './App.scss';
import Login from './view/Login';
import { Route, Routes } from "react-router-dom";
import Dashboard from './view/Dashboard';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default App;
