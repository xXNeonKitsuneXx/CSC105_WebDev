import { useState } from "react";

function MyForm() {
  const [email, setEmail] = useState("");
  console.log(email);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`It's OK`);
  };

  var phonepattern = /^[0-9]+$/;
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLastnameChange(e) {
    setLastname(e.target.value);
  }

  function handlePhonenumberChange(e) {
    if (e.target.value.match(phonepattern)) {
      setPhonenumber(e.target.value);
    }
    if (e.target.value === "") setPhonenumber(e.target.value);
    // console.log(e.target.value.match(phonepattern))
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email address
          <input
            type="text"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <br />
          Name
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={name}
            onChange={handleNameChange}
            required
          />
          <br />
          Lastname
          <input
            type="text"
            name="lastname"
            placeholder="Enter Lastname"
            value={lastname}
            onChange={handleLastnameChange}
            required
          />
          <br />
          Phone Number
          <input
            type="tel"
            pattern="^\d{10}$"
            name="phonenumber"
            placeholder="Enter Phone Number"
            value={phonenumber}
            onChange={handlePhonenumberChange}
            required
          />
          <br />
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <br />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default MyForm;