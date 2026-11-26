let otpDisplay = document.getElementById("otpDisplay");
let generateButton = document.getElementById("generateOTP");

generateButton.addEventListener("click", function(){
    let otp = Math.floor(1000 + Math.random() * 9000);
    otpDisplay.textContent= otp;
    localStorage.setItem("otp",otp);
});