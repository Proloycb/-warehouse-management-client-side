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
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import AddNewItem from './pages/AddNewItem/AddNewItem';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import Blogs from './pages/Blogs/Blogs';
import MyItems from './pages/MyItems/MyItems';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <InventoryDetail/>
          </RequireAuth>
        }/>
        <Route path='/manage' element={
          <RequireAuth>
            <ManageInventories/>
          </RequireAuth>
        }/>
        <Route path='/addNewItem' element={
          <RequireAuth>
            <AddNewItem/>
          </RequireAuth>
        }/>
        <Route path='/myItems' element={
          <RequireAuth>
            <MyItems/>
          </RequireAuth>
        }/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
