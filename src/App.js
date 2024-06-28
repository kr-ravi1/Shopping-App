import { Fragment } from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from './Pages/Signup';
import ErrorPage from './Pages/ErrorPage';
import Details from "./Pages/Details";
import {Routes,Route } from "react-router-dom";
import Card  from './Pages/Card';

function App() {
  return (
    <Fragment>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/details/:id' element={<Details />}></Route>
          <Route path='/card' element={<Card/>}></Route>
          <Route path='*' element={<ErrorPage/>}></Route>
          
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
