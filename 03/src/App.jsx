import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [Password, setPassword] = useState("");

  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "1234569870";

    if (character) str += "!@#$%^&*(){}[]~-+:,";

    for (let index = 1; index <= length; index++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      // console.log(randomIndex);
      const randomChar = str[randomIndex];
      // console.log(randomChar);
      pass += randomChar;
      // console.log(pass);
    }
    setPassword(pass);
  }, [length, number, character]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, character, passwordGenerator]);

  const copyPassword = useCallback(() => {
    passRef.current?.select();
    // passRef.current?.setSelectionRange(0, 5);
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  return (
    <>
      <h2 className="text-center m-10 font-bold text-3xl ">
        Password Generator
      </h2>

      <div className="max-w-3xl mx-auto bg-gray-600 text-center font-bold text-3xl my-4 p-6 shadow-2xl rounded-lg">
        {/* Password Display Section */}
        <div className="flex flex-col items-center justify-center my-4 p-4 shadow-xl bg-emerald-200 rounded-lg">
          <input
            type="text"
            value={Password}
            className="outline-none bg-amber-50 px-4 py-2 text-xl rounded w-full text-center mb-3 overflow-x-scroll"
            placeholder="password"
            readOnly
            ref={passRef}
          />
          <button
            className="text-xl px-6 py-2 bg-sky-600 rounded text-white hover:bg-sky-700 transition"
            onClick={copyPassword}
          >
            Copy
          </button>
        </div>

        {/* Range Slider + Length */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-4">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer w-60"
              onChange={(e) => setLength(e.target.value)}
            />
            <label className="text-xl text-orange-400">Length: {length}</label>
          </div>

          {/* Both Checkboxes in One Row */}
          <div className="flex items-center space-x-6">
            {/* Number Checkbox */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="boxNumber"
                className="cursor-pointer w-5 h-5"
                defaultChecked={number}
                onChange={() => setNumber((prev) => !prev)}
              />
              <label htmlFor="boxNumber" className="text-xl text-sky-400">
                Number
              </label>
            </div>

            {/* Character Checkbox */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="boxChar"
                className="cursor-pointer w-5 h-5"
                defaultChecked={character}
                onChange={() => setCharacter((prev) => !prev)}
              />
              <label htmlFor="boxChar" className="text-xl text-sky-400">
                Character
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
