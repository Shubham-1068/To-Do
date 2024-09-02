import { useState } from "react";
import Body from "./components/Body";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="w-screen h-screen flex items-center">
        <div className="h-screen ">
          <Navbar />
        </div>
        <div className="h-screen w-[95%]">
          <Body />
        </div>
      </div>
    </>
  );
}

export default App;
