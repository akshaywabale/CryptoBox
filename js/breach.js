const commonPasswords = [

"123456",
"password",
"admin",
"qwerty",
"12345678",
"welcome",
"password123",
"iloveyou",
"abc123",
"letmein"

];

function checkBreach(password){

return commonPasswords.includes(
password.toLowerCase()
);

}