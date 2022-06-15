import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import LogOutButton from './Components/LogOutButton';
import LoginPage from './Components/Login';
import Main from './Components/Main'

function App() {
  const {isAuthenticated, isLoading} = useAuth0();
  if(isLoading){
    return <div>Loading...</div>
  }
  if(isAuthenticated){
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/logout' element={<LogOutButton/>} />
          <Route path='/' element={<Main/>} />
        </Routes>
      </BrowserRouter>
    );
  }else{
    return <LoginPage/>
  }
}

export default App;
