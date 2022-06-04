import React from 'react';
import './App.css';
import Layout from './components/Layout';
import Router from './routes/routes';
import {BrowserRouter} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    <div className="App">
    <>
    <BrowserRouter>
      <Layout>
        <Router/>  
      </Layout>
    </BrowserRouter>
      </>
    </div>
  );
}

export default App;
