import { useState } from "react";

import "./App.css";

function App() {
  let [password, setPassword] = useState("");
  let [length, setLength] = useState(8);
  let [includeUpper, setIncludeUpper] = useState(false);
  let [includeLower, setIncludeLower] = useState(false);
  let [includeNumber, setIncludeNumber] = useState(false);
  let [includeSymbol, setIncludeSymbol] = useState(false);
  function generatePassword() {
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let number = "0123456789";
    let symbol = "!@#$%^&*()_+{}[]";
    let characters = "";
    if (includeUpper) {
      characters += upper;
    }
    if (includeLower) {
      characters += lower;
    }
    if (includeNumber) {
      characters += number;
    }
    if (includeSymbol) {
      characters += symbol;
    }
    if(characters==""){
      // characters=upper+lower+number+symbol;
      setPassword("")
      alert('choose any one checkbox');
      return

    }
    console.log(characters);
    let newpass="";
    for(let i=0;i<length;i++){
      let randomIndex=Math.floor(Math.random()*characters.length);
      // console.log(randomIndex);
      // setPassword(password+characters[randomIndex])
newpass+=characters[randomIndex];

    }
    setPassword(newpass);
  
  }
  // console.log(includeLower);
  function copy(){
    navigator.clipboard.writeText(password);
    alert(`copied to clipboard: ${password}`);
  }

  return (
    <>
      <div className="container">
        <h1>Password Generator</h1>
        <div className="passwordbox">
        <input type="text" value={password} readOnly placeholder="Check any of the Check Boxes"  /><button onClick={copy}>COPY</button>
        </div>
        <div className="length">
          <p>Select Password length(**8-50 characters**)</p>
          <input
            type="number"
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
        </div>
        <input
          type="checkbox"
          id="upper"
          checked={includeUpper}
          onChange={(e) => {
            setIncludeUpper(e.target.checked);
          }}
        />
        <label htmlFor="upper">Include Uppercase Letters</label>
        <input
          type="checkbox"
          id="lower"
          checked={includeLower}
          onChange={(e) => {
            setIncludeLower(e.target.checked);
          }}
        />
        <label htmlFor="lower">Include Lowercase Letters</label>
        <input
          type="checkbox"
          id="numbers"
          checked={includeNumber}
          onChange={(e) => {
            setIncludeNumber(e.target.checked);
          }}
        />
        <label htmlFor="numbers">Include Numbers</label>
        <input
          type="checkbox"
          id="symbols"
          checked={includeSymbol}
          onChange={(e) => {
            setIncludeSymbol(e.target.checked);
          }}
        />
        <label htmlFor="symbols">Include Symbols</label>
        <button onClick={generatePassword}>Generate Password</button>
      </div>
    </>
  );
}

export default App;
