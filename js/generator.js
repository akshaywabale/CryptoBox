const generateBtn =
document.getElementById("generateBtn");

if(generateBtn){

generateBtn.addEventListener(
"click",
generatePassword
);

function generatePassword(){

    const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

    let result = "";

    for(let i=0;i<16;i++){

        result += chars.charAt(
        Math.floor(
        Math.random()*chars.length
        ));

    }

    document.getElementById(
    "generatedPassword"
    ).value = result;
}
}