import React from 'react';
import { Container } from 'react-bootstrap'
import Home from './components/Home/Home'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Sales from './components/Sales/Sales'



function App() {
  return (
    <>
      <Login/>
      <Header/>
      <main className="py-4">
        <Container>
        <Sales/>
        </Container>
      </main>
      <Footer/>
    </>
  );
}

export default App;
