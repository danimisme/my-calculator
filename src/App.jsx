/* eslint-disable react/prop-types */
import { useState } from "react";
function App() {
  const [displayNum, setDisplayNum] = useState("");

  const handleClick = (e) => {
    console.log(displayNum);
    const value = e;
    if (value === "AC") {
      setDisplayNum("");
    } else if (value === "=") {
      setDisplayNum(calculate(displayNum));
    } else if (
      displayNum.split(" ").length >= 3 &&
      displayNum.split(" ")[displayNum.split(" ").length - 1] !== ""
    ) {
      setDisplayNum(calculate(displayNum));
    } else {
      setDisplayNum(displayNum + value);
    }
  };

  const calculate = (num) => {
    try {
      const input = num.split(" ");
      console.log(num);
      for (let i = 1; i < input.length; i = i + 2) {
        if (input[i] === "+") {
          input[i - 1] = Number(input[i - 1]) + Number(input[i + 1]);
          input.splice(i, 2);
          i = 0;
        } else if (input[i] === "-") {
          input[i - 1] = Number(input[i - 1]) - Number(input[i + 1]);
          input.splice(i, 2);
          i = 0;
        } else if (input[i] === "*") {
          input[i - 1] = Number(input[i - 1]) * Number(input[i + 1]);
          input.splice(i, 2);
          i = 0;
        } else if (input[i] === "/") {
          input[i - 1] = Number(input[i - 1]) / Number(input[i + 1]);
          input.splice(i, 2);
          i = 0;
        } else if (input[i] === "%") {
          input[i - 1] = Number(input[i - 1]) % Number(input[i + 1]);
          input.splice(i, 2);
          i = 0;
        }
      }

      return input.toString();
    } catch (e) {
      return `displaynum = ${displayNum} . ${e}`;
    }
  };

  return (
    <div className="container-lg col-lg-6 col-md-8 col-12">
      <h1>My Calculator</h1>
      <DisplayInput displayNum={displayNum} />
      <Buttons handleClick={handleClick} />
    </div>
  );
}

const DisplayInput = (props) => {
  const { displayNum } = props;
  return (
    <div
      className=" fs-1 text-end border border-1 p-2 border-dark"
      style={{ height: "100px" }}
    >
      {displayNum}
    </div>
  );
};

const Buttons = (props) => {
  const { handleClick } = props;
  return (
    <div className=" justify-content-center gap-2 my-2 p-2  ">
      <div className=" d-flex gap-2 w-100 mb-2">
        <button
          className="btn btn-danger w-100 py-4 fs-3"
          onClick={() => handleClick("AC")}
        >
          AC
        </button>
        <button className="btn btn-danger w-100 py-4 fs-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="bi bi-backspace-fill text-white fs-3"
            viewBox="0 0 16 16"
          >
            <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z" />
            <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
          </svg>
        </button>
        <button
          className="btn btn-secondary w-100 py-4 fs-3"
          onClick={() => handleClick(" % ")}
        >
          %
        </button>
        <button
          className="btn btn-secondary w-100 py-4 fs-3"
          onClick={() => handleClick(" / ")}
        >
          /
        </button>
      </div>
      <div className=" d-flex gap-2 w-100 mb-2">
        <button
          className="btn btn-primary w-100 py-4 fs-3"
          id="btn-7"
          value="7"
          onClick={() => handleClick("7")}
        >
          7
        </button>
        <button
          className="btn btn-primary w-100 py-4 fs-3"
          value="8"
          onClick={() => handleClick("8")}
        >
          8
        </button>
        <button
          className="btn btn-primary w-100 py-4 fs-3"
          value="9"
          onClick={() => handleClick("9")}
        >
          9
        </button>
        <button
          className="btn btn-secondary w-100 py-4 fs-3"
          onClick={() => handleClick(" * ")}
        >
          *
        </button>
      </div>
      <div className=" d-flex gap-2 w-100 mb-2">
        <button
          className="btn btn-primary w-100 py-4 fs-3"
          value="4"
          onClick={() => handleClick("4")}
        >
          4
        </button>
        <button
          className="btn btn-primary w-100 py-4 fs-3"
          value="5"
          onClick={() => handleClick("5")}
        >
          5
        </button>
        <button
          className="btn btn-primary w-100 py-4 fs-3"
          value="6"
          onClick={() => handleClick("6")}
        >
          6
        </button>
        <button
          className="btn btn-secondary w-100 py-4 fs-3"
          onClick={() => handleClick(" - ")}
        >
          -
        </button>
      </div>
      <div className=" d-flex gap-2 w-100 mb-2">
        <button
          className="btn btn-primary w-100 py-4 fs-3"
          value="1"
          onClick={() => handleClick("1")}
        >
          1
        </button>
        <button
          className="btn btn-primary w-100 py-4 fs-3"
          value="2"
          onClick={() => handleClick("2")}
        >
          2
        </button>
        <button
          className="btn btn-primary w-100 py-4 fs-3"
          value="3"
          onClick={() => handleClick("3")}
        >
          3
        </button>
        <button
          className="btn btn-secondary w-100 py-4 fs-3"
          onClick={() => handleClick(" + ")}
        >
          +
        </button>
      </div>
      <div className=" d-flex gap-2 w-100 mb-2">
        <button
          className="btn btn-primary w-100 py-4 fs-3"
          value="0"
          onClick={() => handleClick("0")}
        >
          0
        </button>
        <button
          className="btn btn-primary w-100 py-4 fs-3"
          value="."
          onClick={() => handleClick(".")}
        >
          .
        </button>
        <button
          className="btn btn-success w-100 py-4 fs-3"
          onClick={() => handleClick("=")}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default App;
