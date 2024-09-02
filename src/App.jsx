import { useState } from "react";
import Body from "./components/Body";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="w-screen h-screen flex items-center flex-col lg:flex-row">
        <div className="lg:h-screen h-20">
          <Navbar />
        </div>
        <div className="lg:h-screen lg:w-[95%] w-screen">
          <Body />
        </div>
      </div>
    </>
  );
}

export default App;
