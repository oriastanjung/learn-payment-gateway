import "./App.css";
// import axios from ""
import React, { useState } from "react";
function App() {
  const [token, setToken] = useState("");
  const handleClick = async () => {
    try {
      const data = await fetch("http://localhost:8080/");
      let json = await data.json();
      console.log("data >> ", json.data);
      setToken(json.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBayar = () => {
    window.snap.pay(token);
  };
  return (
    <div className="App" style={{ marginTop: "20%" }}>
      {token && <p>{token}</p>}
      <button onClick={handleClick}>Click</button>
      <button onClick={handleBayar}>bayar</button>
    </div>
  );
}

export default App;
