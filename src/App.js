import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import InventoryDetail from './pages/InventoryDetail/InventoryDetail';
import ManageInventories from './pages/ManageInventories/ManageInventories';
import NotFound from './pages/Shared/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/inventory/:id' element={<InventoryDetail/>}/>
        <Route path='/manage' element={<ManageInventories/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
