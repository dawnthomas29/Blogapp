import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddBlog from './components/AddBlog';
import BlogCardList from './components/BlogCardList';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogCardList/>}/>
        <Route path="/add" element={<AddBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
