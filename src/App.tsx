import './App.scss';
import { Route, Routes } from "react-router-dom";
import Dashboard from './view/Dashboard';
import SignIn from './view/Login/SignIn';
import SignUp from './view/Login/SignUp';
import Main from './layout/Main';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />}>
        <Route index path='dashboard' element={<Dashboard />} />
      </Route>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}
export default App;
