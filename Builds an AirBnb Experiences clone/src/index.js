import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
//import App from './1 Project setup/App';
//import App from "./2 props part 3; Create a contact component/App1"
//import App from "./2 props part 3; Create a contact component/App"
//import App from "./3 props part 3; Receiving props in a component/App"
//import App from "./4 props part 3; Destructuring props/App"
//import App from "./5 props practice/App"
import App from "./14 Project; Spread object as props/App"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
