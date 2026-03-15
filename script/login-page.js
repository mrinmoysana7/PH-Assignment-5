const clickBtn = document.getElementById("sign-btn").addEventListener("click", () => {
    console.log("button clicked", clickBtn);
    const inputUsername = document.getElementById("input-username");
    const userValue = inputUsername.value 
    if(userValue != "admin"){
        alert("Invalid Username");
    }
    console.log(userValue);
    
    const inputPassword = document.getElementById("input-password");
    const passValue = inputPassword.value;
    console.log(passValue);
    if(passValue != "admin123"){
        alert("Invalid Password");
        return;
    } else if(userValue === "admin" && passValue === "admin123"){
        alert("Login Successful");
        window.location.href = "home.html";
    } else {
        alert("Invalid credentials");
    }    
    inputUsername.value = "";
    inputPassword.value = "";
    
});