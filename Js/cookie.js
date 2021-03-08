function setCookie(cookieName,cookieValue,expiryDate){

    if(expiryDate){

    var today= new Date();


    var m=today.getMonth();



    today.setMonth(m+expiryDate);


    document.cookie  =  cookieName+"="+encodeURIComponent(cookieValue)+";expires="+today.toUTCString();
    }
    else{
    document.cookie=cookieName+"="+cookieValue;
    }

}

function getcookie(cookiename){
    var cookies=document.cookie.split(";");

           var cookiesArr=[];

           for(i=0;i<cookies.length;i++){
               var key=(cookies[i].split("=")[0]).trim();
               var val=decodeURIComponent((cookies[i].split("=")[1]));

               cookiesArr[key]=val;
           }
           return cookiesArr[cookiename];
}

function getallcookie(){
    var cookies=document.cookie.split(";");

           var cookiesArr=[];
           var result=[];

           for(i=0;i<cookies.length;i++){
               var key=(cookies[i].split("=")[0]).trim();
               var val=decodeURIComponent((cookies[i].split("=")[1]));
               cookiesArr[key]=val;
           }
           return cookiesArr;
}


function deletecookie(cookieName){

    var today= new Date();
    var m=today.getMonth();
    today.setMonth(m-1);
    document.cookie=cookieName+"=;expires="+today.toUTCString();
}