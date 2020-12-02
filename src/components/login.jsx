import React from "react";

export default (props) => {
  let [num, setNum] = React.useState("");
  let [error, setError] = React.useState("");

  let phoneNumbers = [];

  const handleSubmit = () => {
    if (num.length !== 10) {
      console.log(num);
      errorMessage("Digits in phone number should be equal to 10");
      return;
    }
    // Validating if all digits entered are numbers.
    if (!isValid()) {
      errorMessage("Characters are not allowed");
      return;
    }
    phoneNumbers.push(num);
    props.history.push("/otpValidation");
  };

  const isValid = () => {
    let temp = parseInt(num);
    while (temp > 0) {
      // If the input number is a character, then it'll return false
      //since inputting characters are not allowed.

      if (!isNaN(temp % 10)) {
        return false;
      }

      temp = parseInt(temp / 10);
    }
    return true;
  };

  // An Error Message will be displayed if entered
  // number is invalid, which will be removed after 2 seconds
  const errorMessage = (message) => {
    setError(message);
    setTimeout(() => setError(""), 3000);
  };

  return (
    <div className="container">
      <h2>Enter your Mobile number to login:</h2>
      <input
        onChange={(event) => setNum(event.target.value)}
        placeholder="Enter 10 digit Mobile number"
        className="input"
      />
      <button onClick={handleSubmit} className="submit">
        Get OTP
      </button>
      <h3 className="error">{error}</h3>
    </div>
  );
};
