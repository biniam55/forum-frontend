import "./App.css";
import {  Routes, Route, useNavigate, useLocation } from "react-router-dom"
import Home from "./components/home/Home"
import Afterloginhome from "./components/Afterlogin/Afterloginhome"
import Answer from "./components/Answerquestion/Answer";
import Question from "./components/Askquestion/Question";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(()=>{
    const token = localStorage.getItem('token');
    const authenticatedBasePaths = ['/afterlogin', '/ask-question','/answers'];
    const publicPaths = ['/'];

    const isAuthBasePath = authenticatedBasePaths.some(path => location.pathname.startsWith(path)) || location.pathname.startsWith('/questions/');
    if (token && !isAuthBasePath){
      navigate('/afterlogin');
    }
    else if(!token && !publicPaths.includes(location.pathname)){
      navigate('/')
    }
  },[navigate]);

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/afterlogin" element={<Afterloginhome/>} />
        <Route path="/ask-question" element={<Question />} />
        <Route path="/questions/*" element={<Answer />} />
      </Routes>
    </div>
  );
}

export default App;
