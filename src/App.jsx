import React, { useState } from "react";

const App = () => {
  const [state, setState] = useState("CLICK ME");

  return (
    <div>
      <button onClick={() => setState("HELLO")}>{state}</button>
      <div className="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden" />
    </div>
  );
};

export default App;
