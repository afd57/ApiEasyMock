import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import reportWebVitals from './reportWebVitals1';
import reportWebVitals from './reportWebVitals2';
import reportWebVitals from './reportWebVitals3';
import reportWebVitals from './reportWebVitals10';

const root = ReactDOM.createRoot(document.getElementById('root'));

function tick() {
  root.render(<HelloWorld/>);
}

setInterval(tick, 1000)



function HelloWorld(props) {
  const date = new Date().toLocaleTimeString();
  console.log();
  return (
    <div>
    <h1>Hello, world!</h1>
    <h2>It is {date}.</h2>
  </div>
  );

}

function HelloWorld2(props) {
  const date = new Date().toLocaleTimeString();
  return (
    <div>
    <h1>Hello, world!</h1>
    <h2>It is {date}.</h2>
  </div>
  );

}

function HelloWorld3(props) {
  const date = new Date().toLocaleTimeString();
  return (
    <div>
    <h1>Hello, world3!</h1>
    <h2>It is {date}.</h2>
  </div>
  );

}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
