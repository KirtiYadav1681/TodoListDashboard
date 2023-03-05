import React from 'react'
import { Routes, Route } from 'react-router-dom';

import './App.scss';

import Home from './components/Home';
import Navbar from './components/Navbar';
import { CreateTodo } from './components/CreateTodo';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/create-todo" element={<CreateTodo />} />
      </Routes>
    </>
  )
}

export default App