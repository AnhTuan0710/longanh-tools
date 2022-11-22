import './App.scss';
import { Route, Routes } from "react-router-dom";
import Dashboard from './view/Dashboard';
import SignIn from './view/Login/SignIn';
import SignUp from './view/Login/SignUp';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}
export default App;
