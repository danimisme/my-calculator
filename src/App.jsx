import { useState } from "react";
function App() {
  return (
    <div className="container-lg col-lg-6 col-md-8 col-12">
      <h1>My Calculator</h1>
      <DisplayInput />
      <Buttons />
    </div>
  );
}

const DisplayInput = () => {
  return (
    <div className=" fs-1 text-end border border-1 p-2 border-dark ">0</div>
  );
};

const Buttons = () => {
  return (
    <div className=" justify-content-center gap-2 my-2 p-2  ">
      <div className=" d-flex gap-2 w-100 mb-2">
        <button className="btn btn-primary w-100 py-4 fs-3">AC</button>
        <button className="btn btn-primary w-100 py-4 fs-3">C</button>
        <button className="btn btn-primary w-100 py-4 fs-3">%</button>
        <button className="btn btn-primary w-100 py-4 fs-3">/</button>
      </div>
      <div className=" d-flex gap-2 w-100 mb-2">
        <button className="btn btn-primary w-100 py-4 fs-3">7</button>
        <button className="btn btn-primary w-100 py-4 fs-3">8</button>
        <button className="btn btn-primary w-100 py-4 fs-3">9</button>
        <button className="btn btn-primary w-100 py-4 fs-3">*</button>
      </div>
      <div className=" d-flex gap-2 w-100 mb-2">
        <button className="btn btn-primary w-100 py-4 fs-3">4</button>
        <button className="btn btn-primary w-100 py-4 fs-3">5</button>
        <button className="btn btn-primary w-100 py-4 fs-3">6</button>
        <button className="btn btn-primary w-100 py-4 fs-3">-</button>
      </div>
      <div className=" d-flex gap-2 w-100 mb-2">
        <button className="btn btn-primary w-100 py-4 fs-3">1</button>
        <button className="btn btn-primary w-100 py-4 fs-3">2</button>
        <button className="btn btn-primary w-100 py-4 fs-3">3</button>
        <button className="btn btn-primary w-100 py-4 fs-3">+</button>
      </div>
      <div className=" d-flex gap-2 w-100 mb-2">
        <button className="btn btn-primary w-100 py-4 fs-3">0</button>
        <button className="btn btn-primary w-100 py-4 fs-3">.</button>
        <button className="btn btn-primary w-100 py-4 fs-3">=</button>
      </div>
    </div>
  );
};

export default App;
