import React from 'react';
//import react from react , index.js hamri bhot important file hai
import ReactDOM from 'react-dom/client';
//react dom ko import kar rhe hai, matlab , matlab react dom koi dependency hai
//jo ki react-dom/client main padi hai

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
//ReactDOM 

root.render(
  //React.Strict_Mode isse kya, hoga Error pata chale ga,
  //hmane hello world print kar diya 
  <React.StrictMode> 
    <App/>
    Hello World      
  </React.StrictMode>
);

   
reportWebVitals();
