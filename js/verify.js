let pinElement = document.querySelector("#tokenInput");
let verifyButton = document.querySelector("#verify");
let messageElement = document.querySelector("#message");

let savedToken = localStorage.getItem("otp");

verifyButton.addEventListener("click", (e) => {
  let pin = Number(pinElement.value);
  console.log(pin);
  if (pin !== "" && pin === savedToken){
    messageElement.textContent = "Success! You are verified."
  } else{
    messageElement.textContent = "Fail! You are not verified."
  }
}
);
