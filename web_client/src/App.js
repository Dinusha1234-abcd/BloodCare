import React from 'react';  
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./pages/page.login";
import SlideMenu from "./components/component.slidemenu";
import Test from "./components/test";
function App() {
   
  return (
    <BrowserRouter> 
     <div className="App">
       
     </div>  
        <Routes>
           <Route path='/login' exact element={<Login/>} />
           <Route path='/dashboard' exact element={<SlideMenu />} />
           <Route path='/test' exact element={<Test/>} />

        </Routes>
      </BrowserRouter>  
);
  
 
}

export default App;
