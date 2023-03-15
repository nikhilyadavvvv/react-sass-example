import React from "react";
import "./App.scss";
function App() {
  return (
    <div className="wrapper">
      <h1>Using Sass in React</h1>
      <header className="wrapper__btns">
        <button className="btn-blue">Blue Button</button>
        <button className="btn-red">Red Button</button>
        <button className="btn-green">Green Button</button>
      </header>
    </div>
  );
}
export default App;
