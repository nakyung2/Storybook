import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainPage from './pages/MainPage'
import ArticlePage from './pages/ArticlePage'
import CalendarPage from './pages/CalendarPage'
import BlogPage from './pages/BlogPage'
import TrendPage from './pages/TrendPage'
import SearchPage from './pages/SearchPage'

import Header from './components/common/Header'
import Sidebar from './components/common/Sidebar'
import NavBar from './components/common/Navbar'
import Footer from './components/common/Footer'

import './App.css'

function App() {
  const [title, setTitle] = useState(false)

  if (!title) {
    return (
      <div className='App'>
      <BrowserRouter>
        <div className='right-container'>
          <Header
            title={title}
            setTitle={setTitle}
          />
          <NavBar 
            title={title}
            setTitle={setTitle}
          />
          <Routes>
            {/* <Route path='/' element={<MainPage title={title} setTitle={setTitle} />}></Route> */}
            {/* <Route path='/blog' element={<BlogPage />}></Route> */}
            {/* <Route path='/calendar' element={<CalendarPage />}></Route> */}
            {/* <Route path='/article' element={<ArticlePage />}></Route> */}
            <Route path='/' element={<TrendPage />}></Route>
            <Route path='/search' element={<SearchPage />}></Route>
          </Routes>
          <Footer></Footer>
        </div>
      </BrowserRouter>
    </div>      
    )
  } else {
    return (
      <div className='App'>
        <BrowserRouter>
          <Sidebar></Sidebar>
          <div className='right-container'>
            <Header
              title={title}
              setTitle={setTitle}
            />
            <NavBar 
              title={title}
              setTitle={setTitle}
            />
            <Routes>
              <Route path='/blog' element={<BlogPage />}></Route>
              <Route path='/calendar' element={<CalendarPage />}></Route>
              <Route path='/article' element={<ArticlePage />}></Route>
              {/* <Route path='/' element={<MainPage />}></Route> */}
              {/* <Route path='/trend' element={<TrendPage />}></Route> */}
              {/* <Route path='/search' element={<SearchPage />}></Route> */}
            </Routes>
            <Footer></Footer>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
