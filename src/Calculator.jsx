import React from "react";
import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [total, setTotal] = useState("");
  const [operation, setOperation] = useState("");
  let numHolder;
  const ShowNumbers = (e) => {
    setOperation((numHolder += e.target.value));
  };
  numHolder = operation;
  const Calculate = () => {
    setTotal(eval(numHolder));
  };

  const Reset = () => {
    setOperation("");
    setTotal("");
  };

  const Del = () =>{
    setOperation(numHolder.slice(0,-1) + "");
    setTotal("");
  }

  return (
    <>
      <div className="container-fluid  vh-100">

        <div className="row h-75 m-0">
  
          <div className="col-12 col-lg-10 d-flex justify-content-center" >
            <div className="calcContainer ">
            <h2>Calc</h2>
              <div className="screen ">
                <div className="row  m-0 d-flex">
                  <div className="col-9  toCalc">
                    <h3 className="">{operation}</h3>
                  </div>
                  <div className="col-3"></div>
                  <div className="col-3"></div>
                  <div className="col-9  total m-0 ">
                    <h3 className=" m-0">{total}</h3>
                  </div>
                </div>
              </div>

              <div className="keyboard ">
                <div className="row ">
                  <div className="col-8 p-0">
                    <div className="btn-group keysNumber ">
                      <button
                        type="button"
                        className="btn rounded number"
                        value={1}
                        onClick={ShowNumbers}
                      >
                        1
                      </button>
                      <button
                        type="button"
                        className="btn rounded number"
                        onClick={ShowNumbers}
                        value={2}
                      >
                        2
                      </button>
                      <button
                        type="button"
                        className="btn rounded number"
                        onClick={ShowNumbers}
                        value={3}
                      >
                        3
                      </button>
                    </div>
                    <div className="btn-group keysNumber  ">
                      <button
                        type="button"
                        className="btn rounded number"
                        onClick={ShowNumbers}
                        value={4}
                      >
                        4
                      </button>
                      <button
                        type="button"
                        className="btn rounded number"
                        onClick={ShowNumbers}
                        value={5}
                      >
                        5
                      </button>
                      <button
                        type="button"
                        className="btn rounded number"
                        onClick={ShowNumbers}
                        value={6}
                      >
                        6
                      </button>
                    </div>
                    <div className="btn-group keysNumber ">
                      <button
                        type="button"
                        className="btn rounded number"
                        onClick={ShowNumbers}
                        value={7}
                      >
                        7
                      </button>
                      <button
                        type="button"
                        className="btn rounded number"
                        onClick={ShowNumbers}
                        value={8}
                      >
                        8
                      </button>
                      <button
                        type="button"
                        className="btn rounded number"
                        onClick={ShowNumbers}
                        value={9}
                      >
                        9
                      </button>
                    </div>
                    <div className="btn-group keysNumber ">
                      <button
                        type="button"
                        className="btn rounded number"
                        onClick={ShowNumbers}
                        value={"."}
                      >
                        .
                      </button>
                      <button
                        type="button"
                        className="btn rounded number"
                        onClick={ShowNumbers}
                        value={0}
                      >
                        0
                      </button>
                      <button
                        type="button"
                        className="btn rounded number"
                        onClick={ShowNumbers}
                        value={"/"}
                      >
                        /
                      </button>
                    </div>
                  </div>
                  <div className="col-4 p-0">
                    <div className="functionContainer  m-0">
                      <button
                        type="button"
                        className="btn rounded functions "
                        onClick={Del}
                        id="del"
                      >
                        DEL
                      </button>
                      <button
                        type="button"
                        className="btn rounded functions "
                        value={"+"}
                        onClick={ShowNumbers}
                      >
                        +
                      </button>

                      <button
                        type="button"
                        className="btn rounded functions "
                        value={"-"}
                        onClick={ShowNumbers}
                      >
                        -
                      </button>

                      <button
                        type="button"
                        className="btn rounded functions "
                        value={"*"}
                        onClick={ShowNumbers}
                      >
                        x
                      </button>
                    </div>
                  </div>
                  <div className="btn-group p-0">
                    <button
                      type="button"
                      className="btn rounded number"
                      id="reset"
                      onClick={Reset}
                    >
                      RESET
                    </button>
                    <button
                      type="button"
                      className="btn rounded number"
                      id="equals"
                      onClick={Calculate}
                    >
                      =
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;