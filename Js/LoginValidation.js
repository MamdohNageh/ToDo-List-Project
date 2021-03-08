
var  f =  new Error("name must include only letters");

function Reg(){
    try{
    if (!isNaN(document.getElementById("username").value))
        {
            throw f;
        }
        else
        {
        setCookie("name",document.getElementById("username").value);
        setCookie("pass",document.getElementById("password").value);
        //location.replace("Begin.html");
        }      
        }
    
    
        catch(e){
            alert(e.message);
            return false;
            }}