
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/navigation/Header';
import Home from './components/Home';
import Login from './components/mainPage/Login'
import SignUp from './components/mainPage/SignUp';
import './components/mainPage/form.css';
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/signIn' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
