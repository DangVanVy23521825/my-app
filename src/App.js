import React, { useState, useEffect } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import BodyContainer from './components/Body/BodyContainer.js';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <Header />
      <BodyContainer products={products} />
      <Footer />
    </div>
  );
}

export default App;