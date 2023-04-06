import './scss/app.scss';
import Header from './components/Header';
import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="App">
      <div className="wrapper">
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <Header></Header>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/cart" element={<Cart></Cart>}></Route>
              <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
          </div>
        </SearchContext.Provider>
      </div>
    </div>
  );
}

export default App;
