import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const getResourse = async url => {
  const res = await fetch(url);
  const body = await res.json();
  return body;
};
getResourse("https://swapi.co/api/people/1/").then(body => {
  console.log(body);
});

// fetch("https://swapi.co/api/people/1/")
//   .then(res => {
//     return res.json();
//   })
//   .then(body => {
//     console.log(body);
//   });

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox!!!</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
