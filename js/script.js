const passwordInput = document.getElementById("password");
const progressBar = document.getElementById("progressBar");

const entropy = document.getElementById("entropy");
const lengthEl = document.getElementById("length");
const crack = document.getElementById("crack");
const score = document.getElementById("score");

passwordInput.addEventListener("input", analyzePassword);

function analyzePassword() {

    const pwd = passwordInput.value;

    let scoreValue = 0;

    const hasUpper = /[A-Z]/.test(pwd);
    const hasLower = /[a-z]/.test(pwd);
    const hasNumber = /\d/.test(pwd);
    const hasSymbol = /[^A-Za-z0-9]/.test(pwd);

    if (pwd.length >= 8) scoreValue += 20;
    if (hasUpper) scoreValue += 20;
    if (hasLower) scoreValue += 20;
    if (hasNumber) scoreValue += 20;
    if (hasSymbol) scoreValue += 20;

    progressBar.style.width = scoreValue + "%";

    score.innerText = scoreValue;
    lengthEl.innerText = pwd.length;

    const charset =
        (hasUpper ? 26 : 0) +
        (hasLower ? 26 : 0) +
        (hasNumber ? 10 : 0) +
        (hasSymbol ? 32 : 0);

    const entropyValue =
        pwd.length * Math.log2(charset || 1);

    entropy.innerText =
        entropyValue.toFixed(1);

    crack.innerText =
        estimateCrackTime(entropyValue);

    updateChecks(
        pwd,
        hasUpper,
        hasLower,
        hasNumber,
        hasSymbol
    );
}

function estimateCrackTime(bits) {

    if(bits < 30) return "Seconds";
    if(bits < 45) return "Minutes";
    if(bits < 60) return "Hours";
    if(bits < 75) return "Days";
    if(bits < 90) return "Years";

    return "Centuries";
}

function updateChecks(
    pwd,
    upper,
    lower,
    num,
    sym
){
    setCheck("c1", pwd.length >= 8);
    setCheck("c2", upper);
    setCheck("c3", lower);
    setCheck("c4", num);
    setCheck("c5", sym);
}

function setCheck(id, valid){

    const item =
        document.getElementById(id);

    item.className =
        valid ? "check valid" : "check invalid";

    item.innerHTML =
        valid
        ? "✔ " + item.innerText.slice(2)
        : "✖ " + item.innerText.slice(2);
}