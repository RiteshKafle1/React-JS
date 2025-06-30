import { useState } from "react";
function App() {
  // let counter = 5;

  // responsible to reflect the state change in ui
  let [counter, setCounter] = useState(0);

  // problem ,the value of counter update,but not reflecting in our UI.
  // so the react should react on the variable,therefore we need hooks.
  function addValue() {
    // console.log("I am running");
    if (counter < 20) setCounter((counter += 1));
    console.log(counter);
  }

  function removeValue() {
    if (counter > 0) setCounter((counter -= 1));
    console.log(counter);
    // console.log("I am running too");
  }
  // const username="ritesh kafle"
  return (
    <>
      {/* value inside the curly braces is treated as variable.  */}
      {/* {username}  */}

      <h1>Learning React</h1>
      <h3>Counter Value:{counter}</h3>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
