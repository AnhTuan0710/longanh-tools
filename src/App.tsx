import './App.scss';
import { Route, Routes } from "react-router-dom";
import SignIn from './view/Login/SignIn';
import SignUp from './view/Login/SignUp';
import Main from './layout/Main';
import Dashboard from './view/Dashboard';
import Invoice from './view/Invoice';
import Category from './view/Category';
import Product from './view/Product';
import Customer from './view/Customer';
import Provider from './view/Provider';
import Import from './view/Import';
import Export from './view/Export';
import Check from './view/Check';
import Inventory from './view/Inventory';
import Revenue from './view/Revenue';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} >
        <Route index path='dashboard' element={<Dashboard />} />
        <Route path='invoice' element={<Invoice />} />
        <Route path='category' element={<Category />} />
        <Route path='product' element={<Product />} />
        <Route path='customer' element={<Customer />} />
        <Route path='provider' element={<Provider />} />
        <Route path='import' element={<Import />} />
        <Route path='export' element={<Export />} />
        <Route path='check' element={<Check />} />
        <Route path='inventory' element={<Inventory />} />
        <Route path='revenue' element={<Revenue />} />
      </Route>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}
export default App;
