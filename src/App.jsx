import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/home/Home';
import Favorites from './pages/favorites/Favorites';
import Details from './pages/details/Details';
import Navbar from './components/navbar/Navbar';
import PageNotFound from './components/pagenotfound/PageNotFound';

function App() {
  return (
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/recipe-item/:param" element={<Details />}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
      </div>
    </div>
  )
}

export default App
