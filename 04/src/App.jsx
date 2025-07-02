import "./App.css";
// import Card from './component/Card'
function App() {
  function handleButtonClick() {
    alert("Did you clicked me?");
  }
  function handleOver() {
    // alert("Hi i am para");
  }

  function handleInputChange(e) {
    console.log("Value changed at input");
    console.log(e.target.value);
  }
  return (
    <>
      {/* <Card name="Ritesh Kafle">
      <h2>Learning React</h2>
      <p>Hello and welcome </p>
      <div>Namaste Everyone</div>
    </Card> */}

      <p onMouseOver={handleOver}>I am a para</p>
      <div>
        <button onClick={handleButtonClick}>Click me</button>
      </div>

      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Enter text"
        className="bg-red-300 border-2 m-1.5 p-1.5"
      />
    </>
  );
}

export default App;
