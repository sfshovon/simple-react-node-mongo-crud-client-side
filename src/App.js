import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/CRUD/AddUser';
import UpdateUser from './components/CRUD/UpdateUser';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/user/add" element={<AddUser/>} />
        <Route path="/update/:id" element={<UpdateUser/>} />
      </Routes>
    </div>
  );
}

export default App;
