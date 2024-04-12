import './App.css';
import React , { Fragment } from 'react';
import {Routes , HashRouter , Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';


function App() {
  return (
    <Fragment>
            <div className='App'>

        <HashRouter>
        <Navbar/>

           <Routes>
              <Route exact path='' element={<Home/>}/>
              <Route exact path='/home' element={<Home/>}/>
          </Routes>
        </HashRouter>
      </div>
    </Fragment>
  );
}

export default App;
