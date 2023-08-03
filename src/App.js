import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage.jsx'
import Navigation from './pages/Navigation/Navigation.jsx';
import LoginPage from './pages/LoginPage/LoginPage';
import MyPage from './pages/MyPage/MyPage.jsx';
import SignupPage from './pages/SignupPage/SignupPage.jsx';
import WritePage from './pages/WritePage/WritePage.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path='/write' element={<WritePage/>}></Route>
          <Route path='/signup' element={<SignupPage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/mypage' element={<MyPage/>}></Route>
          <Route path='/' element={<HomePage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
