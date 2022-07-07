
import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes, Route, } from "react-router-dom";
import { Main } from './components'

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);

root.render(<Main/>);

//ReactDOM.render(
 //   <BrowserRouter>
 //       <App />
 //   </BrowserRouter>,

 //   document.getElementById('app')

//);




//const app = ReactDOM.createApp(
 //   document.getElementById('app')
//);
//const element = <h1>Hello, world</h1>;
//app.render(
   // <BrowserRouter>
  //      <App />
  //  </BrowserRouter>
//);

//const API_URL = `https://strangers-things.herokuapp.com/api/${cohort}`
//const cohort = '2206-FTB-WEB-FT'



