var password ;
var repassword;
var username;
function signup()
{
    username=document.getElementById("username").value;
    password=document.getElementById("password").value;
    repassword=document.getElementById("repassword").value;

    console.log(password);
    console.log(repassword);
    if(username.length <5)
    {
        alert("username must be of atleast 5 characters");
    }

    if(password != repassword)
    {
        alert("password and repassword must match!");
    }
   
}