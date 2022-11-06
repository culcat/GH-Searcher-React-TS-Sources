import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { HomePage } from './pages/homePage';
import {FavoritePage} from './pages/favoritePage'
import {Navigation} from './components/Navigation'

function App() {
  return (
    <>
    <Navigation/>
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="favorites" element={<FavoritePage/>}/>
      
      
   </Routes>
   </>
  );
}

export default App;
