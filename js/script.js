const passwordInput =
document.getElementById("password");

const progressBar =
document.getElementById("progressBar");

const commonPasswords = [
"123456",
"12345678",
"password",
"password123",
"admin",
"qwerty",
"welcome",
"abc123",
"letmein"
];

passwordInput.addEventListener(
"input",
analyzePassword
);

function analyzePassword(){

const pwd =
passwordInput.value;

const hasUpper =
/[A-Z]/.test(pwd);

const hasLower =
/[a-z]/.test(pwd);

const hasNumber =
/\d/.test(pwd);

const hasSymbol =
/[^A-Za-z0-9]/.test(pwd);

let score = 0;

if(pwd.length >= 8)
score += 20;

if(pwd.length >= 12)
score += 15;

if(pwd.length >= 16)
score += 15;

if(hasUpper)
score += 10;

if(hasLower)
score += 10;

if(hasNumber)
score += 15;

if(hasSymbol)
score += 15;

if(commonPasswords.includes(
pwd.toLowerCase()
)){
score = 5;
}

if(score > 100)
score = 100;

document.getElementById(
"score"
).innerText = score;

document.getElementById(
"length"
).innerText = pwd.length;

progressBar.style.width =
score + "%";

if(score < 40){

progressBar.style.background =
"#ff3c6f";

document.getElementById(
"strengthText"
).innerText = "WEAK";

}else if(score < 70){

progressBar.style.background =
"#ffae00";

document.getElementById(
"strengthText"
).innerText = "MEDIUM";

}else{

progressBar.style.background =
"#00ff88";

document.getElementById(
"strengthText"
).innerText = "STRONG";
}

let charset = 0;

if(hasLower) charset += 26;
if(hasUpper) charset += 26;
if(hasNumber) charset += 10;
if(hasSymbol) charset += 32;

const entropy =
pwd.length *
Math.log2(charset || 1);

document.getElementById(
"entropy"
).innerText =
entropy.toFixed(1);

let crackTime;

if(entropy < 28)
crackTime = "Seconds";

else if(entropy < 36)
crackTime = "Minutes";

else if(entropy < 60)
crackTime = "Hours";

else if(entropy < 80)
crackTime = "Years";

else
crackTime = "Centuries";

document.getElementById(
"crack"
).innerText =
crackTime;

const breach =
commonPasswords.includes(
pwd.toLowerCase()
);

document.getElementById(
"breachStatus"
).innerText =
breach ? "WARN" : "SAFE";

document.getElementById(
"breachStatus"
).style.color =
breach
? "#ff3c6f"
: "#00ff88";

setCheck("c1", pwd.length >= 8);
setCheck("c2", hasUpper);
setCheck("c3", hasLower);
setCheck("c4", hasNumber);
setCheck("c5", hasSymbol);
}

function setCheck(id, valid){

const item =
document.getElementById(id);

const text =
item.textContent.substring(2);

item.innerHTML =
valid
? "✔ " + text
: "✖ " + text;

item.style.color =
valid
? "#00ff88"
: "#ff3c6f";
}