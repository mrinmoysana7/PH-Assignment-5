const clickBtn = document.getElementById("sign-btn").addEventListener("click", () => {
    // console.log("button clicked", clickBtn);
    const inputUsername = document.getElementById("input-username");
    const userValue = inputUsername.value 
    if(userValue != "admin"){
        alert("Invalid Username");
        // return;
    }
    // console.log(userValue);
    
    const inputPassword = document.getElementById("input-password");
    const passValue = inputPassword.value;
    // console.log(passValue);
    if(passValue != "admin123"){
        alert("Invalid Password");
        return;
    } else if(userValue != "admin" && passValue === "admin123"){
        alert("Invalid credentials");
        // return;
        
    } else if(userValue === "admin" && passValue === "admin123"){ 
        alert("Login Successful");
        window.location.href = "home.html";
    }    
    inputUsername.value = "";
    inputPassword.value = "";
    
});