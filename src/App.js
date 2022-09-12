import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Product from './Product';
import ErrorFetch from './ErrorFetch';
import Burger from './Burger';
import Sandwitch from './Sandwitch';
import React from 'react';
import ProductDetails from './ProductDetails';

const LazyAbout = React.lazy(() => import("./About"));

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}>
          <Route index element={<Burger/>}/>
          <Route path='burger' element={<Burger/>}/>
          <Route path='sandwitch' element={<Sandwitch/>}/>
        </Route>
        <Route path='/product/:name' element={<ProductDetails/>}>
          <Route index element={<ProductDetails/>}/>
          <Route path=":price" element={<ProductDetails/>}/>
        </Route>
        <Route path='/about' element={<React.Suspense fallback="Loading..."><LazyAbout/></React.Suspense>}/>
        <Route path='*' element={<ErrorFetch/>}/>
      </Routes>
    </div>
  );
}

export default App;
