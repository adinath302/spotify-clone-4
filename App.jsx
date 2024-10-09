import React from "react";
import Sidebar from "./component/Sidebar";
import Player from "./component/Player";
import Display from "./component/Display";
const App = () => {
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
    </div>
  );
};

export default App;
