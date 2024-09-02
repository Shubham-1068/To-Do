import React, { useState } from "react";
import TodoDisplay from "./TodoDisplay";

function Body() {
  const [value, setvalue] = useState("");

  const [count, setcount] = useState(1);

  const [todo, settodo] = useState([]);

  function addToList() {
    if (value != "") {
      todo.push({ key: `${count}`, data: `${value}` });
      setcount(count + 1);
      setvalue("");
    } else {
      alert("No text found !!!!!!!");
    }
  }

  function removeFromList(e) {
    let nwTodo = [...todo];
    nwTodo.splice(e, 1);
    settodo(nwTodo);
    setcount(1);
  }

  return (
    <div>
      <div className="h-screen w-full bg-[#171368] flex justify-center items-center">
        <div className="h-[97%] w-[98%] bg-white rounded-xl flex flex-col items-center">
          <div className="border-2 h-24 lg:h-32 w-[95%] bg-slate-200 rounded-xl mt-4 flex justify-around items-center">
            <textarea
              name="todo"
              id="currTodo"
              className="h-[85%] w-[70%] rounded-xl resize-none p-3 outline-none text-xl"
              onChange={(e) => {
                setvalue(e.target.value);
              }}
            ></textarea>

            <div className="flex lg:flex-row flex-col gap-2 lg:gap-6">
              <button
                className="border-2 border-green-600 h-8 w-16 lg:w-28 rounded-lg hover:bg-slate-300 font-semibold"
                onClick={() => {
                  addToList();
                  document.getElementById("currTodo").value = "";
                }}
              >
                Add
              </button>
              <button
                className="border-2 border-red-600 h-8 w-16 lg:w-28 rounded-lg hover:bg-slate-300 font-semibold"
                onClick={() => {
                  setvalue("");
                  document.getElementById("currTodo").value = "";
                }}
              >
                Clear
              </button>
            </div>
          </div>

          <p className="mt-5 w-full pl-11 text-2xl font-bold">My Todos :-</p>
          <div className="mt-3 mb-4 h-[80%] w-[95%] overflow-auto">
            <div className="border-2 min-h-0 w-[95%] bg-slate-200 rounded-xl mt-4 flex items-center flex-col">
              {/* new entry */}
              <ul
                id="collection"
                className="flex flex-col mt-8 min-h-16 w-[95%] overflow-auto"
              >
                {/* todos will lie here */}

                {todo.map((e, i) => {
                  return (
                    <TodoDisplay
                      key={i}
                      i={i}
                      e={e}
                      removeFromList={removeFromList}
                      count={count}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
