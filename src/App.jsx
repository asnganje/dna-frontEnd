import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main"
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Modify from "./components/auth/Modify";

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Main />} />
          <Route path='/login' element = {<Login />} />
          <Route path='/signup' element = {<SignUp />} />
          <Route path='/modify' element = {<Modify />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
