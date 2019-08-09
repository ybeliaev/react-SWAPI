import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class SwappiService {
  async getResourse(url) {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Error! URL: " + url + "Error status: " + res.status);
    }

    return await res.json();
  }
  getAllPersons() {
    return SwappiService(`http https://swapi.co/api/people`);
  }
  getPerson(id) {
    return SwappiService(`http https://swapi.co/api/people/${id}`);
  }
}

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
