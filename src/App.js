import './App.css';
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import TaskCompleted from './components/Home/TaskCompleted';
import ToDo from './components/Home/ToDo';
import Calendar from './components/Home/Calendar';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/completed' element={<TaskCompleted></TaskCompleted>}></Route>
        <Route path='/todo' element={<ToDo></ToDo>}></Route>
        <Route path='/calendar' element={<Calendar></Calendar>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
