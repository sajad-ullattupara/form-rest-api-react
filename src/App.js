import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          mobileNumber: mobileNumber,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setEmail("");
        setMobileNumber("");
        setMessage("User created");
      } else {
        setMessage("Error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={mobileNumber}
          placeholder="Contact Number"
          onChange={(e) => setMobileNumber(e.target.value)}
        />
        <button type="submit">Create</button>
        <div className="message"><b>{message ? <p>{message}</p> : null}</b></div>
      </form>
    </div>
  );
}

export default App;