import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WebFont from "webfontloader";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
    <App />
  
);

//import fonts
WebFont.load({
  google: {
      families: ['Poppins', "Inter:,700","Quicksand:500,700","Montserrat:500,700,600"]
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
