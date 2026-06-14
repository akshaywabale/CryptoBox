function checkPassword(){

    let password =
    document.getElementById("password").value;

    let score = 0;

    if(password.length >= 8) score++;
    if(/[A-Z]/.test(password)) score++;
    if(/[a-z]/.test(password)) score++;
    if(/[0-9]/.test(password)) score++;
    if(/[!@#$%^&*]/.test(password)) score++;

    let result = "";

    if(score <= 2)
        result = "Weak Password";

    else if(score <= 4)
        result = "Medium Password";

    else
        result = "Strong Password";

    if(commonPasswords.includes(password)){
        result += " ⚠ Common Password";
    }

    document.getElementById("strength").innerHTML = result;
}