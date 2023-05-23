import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function incCount() {
    setCount(count + 1);
  }

  function decCount() {
    setCount(count - 1);
  }
  function resetCount() {
    setCount(0);
  }

  return (
    
    <div className=" d-flex flex-column    bg-primary ">
      <div className="text-center">
        <h1 className=" d-inline-block rounded p-1 mt-3  bg-warning">
          Yours Count App{" "}
        </h1>
        <h2>created By dj dhawan</h2>
        <h2>created By dj Yashwan</h2>
      </div>

      <div className="text-center mt-5">
        <h2 className="bg-light  d-inline-block p-2 rounded border border-dark">
          {count}
        </h2>
      </div>

      <div className="text-center m-5">

        <div className="d-flex-inline justify-content-around  ">
          <button className="btn btn-success m-1" onClick={incCount}>
            increament
          </button>
          <button
            className="btn btn-info m-1"
            onClick={resetCount}
            disabled={count === 0}
          >
            Reset
          </button>
          <button
            className="btn btn-danger m-1"
            onClick={decCount}
            disabled={count === 0}
          >
            Decreament
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
