const generateBtn =
document.getElementById("generateBtn");

generateBtn.addEventListener(
"click",
generatePassword
);

function generatePassword(){

const chars =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

let password = "";

for(let i=0;i<16;i++){

password += chars.charAt(
Math.floor(
Math.random()*chars.length
));

}

document.getElementById(
"generatedPassword"
).value = password;

}