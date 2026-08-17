document.getElementById("login-btn")
.addEventListener('click', function(){
    // console.log("clicked");
    // Get the mobile number input 
    const numberInput= document.getElementById("input-number");
    const numberContact = numberInput.value;
    console.log(numberContact);

    // Get the pin number input
    const numberPin = document.getElementById("input-pin");
    const pin = numberPin.value;
    console.log(pin);

    // match pic & mobile number 
    if(numberContact == "01521567890" && pin =="1234"){
        alert("Login Successful");
        window.location.replace("./home.html")
    }
    else{
        alert("Login Failed");
        return;
    }
});



