"use strict";

$(function()
{
    //Zamiana
    
    $("#button1").click(function(){
        var parag = $("p");
        var newp = document.createElement("p");
        
        newp.innerHTML = parag[4].innerHTML;
        $(parag[0]).before(newp);
        $(parag[4]).remove();  
    });
    
    //Zamiana (na odwrót)
    
    $("#button2").click(function()
    {
        var parag2 =$("p");
        var newp2 = document.createElement("p");
        
        newp2.innerHTML = parag2[0].innerHTML;
        console.log("Działa");
        $(parag2[4]).after(newp2);
        $(parag2[0]).remove();
    });
    
});