if(getcookie("name")==undefined){

    alert ("You Must Log In ");
    location.assign("../login.html")

}else{

var ListName = function () {

    location.assign('project.html');
}

function hideShow(c) {

    var x = c.id;
    $("#"+x).css('display', 'none');
    
    $('#' + x + '+ #hiddeninput').slideToggle(700).css('display', 'block');
    $("textarea").focus();
}

function showHide(c) {
    var x = c.id;

            $('#' + x).parent().siblings().css('display', 'block');

            $('#' + x).parent().slideUp(500);
}

function addNewList(c) {
    var x = c.id;
    $('#' + x).css('display', 'none');
    $('#' + x + "+ #listinput").fadeIn(700).css('display', 'block');

}

function Cancel(c) {
    var x = c.id;
    $('#' + x).parent().one().fadeOut(10);
    $('#addlist').fadeIn(1000);
    
}

function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}


var count = 0;
function cloneNewList() {
    var title = $('#input').val();

    if (!title == null || !title == '') {
        var newnode = document.getElementById('mainlist').cloneNode(true);
        newnode.lastElementChild.firstElementChild.nextElementSibling.firstElementChild.id='ss'+Math.floor(Math.random() * 100);

        newnode.removeAttribute('id');
        mynode=newnode.firstElementChild.nextElementSibling;
        while (mynode.lastElementChild) {
            mynode.removeChild(mynode.lastElementChild);
        }
       

        newnode.firstElementChild.nextElementSibling.nextElementSibling.id = 'ss'+Math.floor(Math.random() * 100);
        newnode.firstElementChild.innerHTML = title;
        newnode.firstElementChild.style.backgroundColor=generateRandomColor();

        
        newnode.lastElementChild.lastElementChild.id = 'ss'+Math.floor(Math.random() * 100)
            $(newnode).css("display","none");
        document.body.firstElementChild.nextElementSibling.nextElementSibling.
            firstElementChild.append(newnode);
            $(newnode).fadeIn(1000);
            
        $('#input').val('');
        count++;
        if (count >= 3) {
            var wid = document.getElementById('window_width');
            wid.style.width = (parseInt(getComputedStyle(wid).width) + 250.0271) + 'px';
        }
    }

}
function addCard(c) {
    var x=c.id;
            var cardContent = $('#'+x).parent().siblings("#textarea").val();
            $('#'+x).parent().siblings("#textarea").focus();

            
            if(!cardContent==null || !cardContent==''){
            var newcard = document.body.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.cloneNode(true);
            $(newcard).fadeIn(1000);
            newcard.id='s'+Math.floor(Math.random() * 100);
            var placetoappend=
            document.getElementById(x).parentNode.parentNode.previousElementSibling.previousElementSibling;

            placetoappend.append(newcard);
            newcard.firstElementChild.innerHTML+=cardContent;
            newcard.firstElementChild.style.color=generateRandomColor()
            $('#'+x).parent().siblings("#textarea").val("");
        }
    }

function moveList(c){
    var x=c.id;
    $('#listssss').disableSelection();
    $('#listssss').sortable({
        start:function(){
            $('.list_description').css("color","lightblue");
        },
        stop:function(){$('.list_description').css("color","white");},
        revert: true
            });
            
}
function removeCard(c){
    $(c).parent().effect("shake",200);
            $(c).parent().fadeOut(500);
            setTimeout(function(){
                $(c).parent().remove();
            },1500);
}
function moveCard(c){
    $(".cardsss").sortable({
        connectWith: ".cardsss",
        revert: true
    });}

function update_card(c){
    var x=c.id;
     var cardContent =$('#'+x).parent().siblings("#textarea").val();
     if(!cardContent==null || !cardContent==''){
    $('#'+x).parent().parent().prev().children().first().text(cardContent);
    $('#'+x).parent().parent().prev().fadeIn(1000);
    $('#'+x).parent().parent().css("display", "none")}
}
function cancel_update(c){
    var x=c.id;
    $("#"+x).parent().prev().fadeIn(1000);
    $("#"+x).parent().css("display", "none")
}



    function editCard(c){
        var butid= 'ss'+Math.floor(Math.random() * 100);
        var crossid='cc'+Math.floor(Math.random() * 100);
            var x=c.id;
        $("#"+ x).css("display","none");
        
       var old= $(c).children().first().text();


        $('<div id="hiddeninput" class="hiddeninput" >'+'<textarea id="textarea">'+old+'</textarea>'+
        '<div id="butt">'+
                '<button id='+butid+' onclick="update_card(this)">Edit</button>'+
           ' </div>'+
            '<div id='+crossid+' class="cross" onclick="cancel_update(this)"> &#10006; </div>'+
            '</div>').insertAfter($("#"+ x));
        //$(c).children().first().css("display","block");///////////////////////////////

    }
    function goBack(){
        location.assign('Begin.html')
    }


var listnames=getcookie("listname");
document.getElementById('nameoflist').innerHTML=  listnames+" List " ;
}