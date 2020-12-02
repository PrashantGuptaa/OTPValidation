import React from "react";

export default (props) => {
  let [otp, setOtp] = React.useState("");
  let [error, setError] = React.useState("");

  const handleSubmit = () => {
    if (otp.length !== 6) {
      errorMessage("Digits in OTP number should be equal to 6");
      return;
    }
    if (isEven()) props.history.push("/home");
    else {
      errorMessage("Invalid OTP!");
    }
  };

  const isEven = () => {
    let sumOfDigit = 0;
    let temp = parseInt(otp);
    while (temp > 0) {
      sumOfDigit += temp % 10;
      temp = parseInt(temp / 10);
    }
    return sumOfDigit % 2 === 0;
  };

  const errorMessage = (message) => {
    setError(message);
    setTimeout(() => setError(""), 2000);
  }

  

  return (
    <div className = 'container'>
      <h2>Enter the OTP sent to your number:</h2>
      <input
        onChange={(event) => setOtp(event.target.value)}
        placeholder="Enter 6 digit OTP"
        className='input'
      />
      <button onClick={handleSubmit} className = 'submit'>Login</button>
      <h3 className = 'error'>{error}</h3>
    </div>
  );
};
