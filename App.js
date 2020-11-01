import React from 'react';
import { Container } from 'react-bootstrap'
import Home from './components/Home/Home'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'



function App() {
  return (
    <>
      <Header/>
      <main className="py-4">
        <Container>
        <h1>
          Ecommerce ReactShop
        </h1>
        </Container>
      </main>
      <Footer/>
    </>
  );
}

export default App;
