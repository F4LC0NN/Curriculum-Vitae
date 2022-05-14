import React from 'react';
import './App.css';
import Footer from './categories/footer/Footer';
import Header from './categories/header/Header';
import Main from './categories/main/Main';
import Modals from './categories/window/Modals';

function App() {
  return (
    <div className="App">
      <Modals />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
