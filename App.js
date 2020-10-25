import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Register from './components/Register/Register'
import Login from './components/Login/Login'



function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="row mt-5">
          <div className="col-md-6 border py-3">
            <Register/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
