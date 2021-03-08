if(getcookie("name")==undefined){

    alert ("You Must Log In ");
    location.assign("../login.html")

}else{
var xhr = new XMLHttpRequest();
xhr.open("GEt", "json/data.json");
xhr.send('');
var info;
var counter = 0;
var len=0;
xhr.onreadystatechange = function () {
if (xhr.readyState == 4) {

info = JSON.parse(xhr.responseText);
len=info['data'].length;
}
var string ="";
for (var i=0;i<len;i++) {

string +='<div id="pp'+i+'" class="projectList" onclick="project(this)" onmouseover="overStyle(this)"onmouseout="leaveStyle(this)">'
+info["data"][i].name+'</div>';
}
document.getElementById('lists').innerHTML =string;
for(var i=0;i<len;i++)
{
document.getElementsByClassName('projectList')[i].style.backgroundImage = "url("+info["data"][i].img+")";
document.getElementsByClassName('projectList')[i].style.backgroundRepeat = "no-repeat";
document.getElementsByClassName('projectList')[i].style.backgroundSize="cover";
}
document.getElementById("usName").innerHTML="Hello Mr "+ getcookie("name");
}
function project(v)
{
    setCookie('listname',document.getElementById(v.id).innerHTML);
//document.cookie= "listname =" +document.getElementById(v.id).innerHTML ;
location.assign("project.html");
}

function overStyle(c){
    var x=c.id;
    $("#"+x).animate({color:"blue"},'slow');
}

function leaveStyle(c){
    var x=c.id;
    $("#"+x).animate({color:"white"},'slow');
}
}