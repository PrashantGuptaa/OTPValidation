import React from 'react';

export default (props) =>{

let [num, setNum] = React.useState("");
let [error, setError] = React.useState("");

let phoneNumbers = []

const handleSubmit = () => {
if(num.length !== 10){
  setError("Digits in phone number should be equal to 10");
setTimeout(() => setError(""), 3000);
return;
}
phoneNumbers.push(num);
props.history.push('/otpValidation');
}



  return(
    <div className = 'container'>
      <h2>Enter your Mobile number to login:</h2>
    <input onChange = {(event) => setNum(event.target.value) } type = 'Number' placeholder="Enter 10 digit Mobile number" className = 'input'/>
 <button onClick = {handleSubmit} className = 'submit' >Get OTP</button>
   <h3 className = 'error'>{error}</h3>
    </div>
  )
} 