$(function(){
    var clickCount = 0;
    $("h1").click(function(){
        if(clickCount > 1){
            console.log("greater than 1");
        }
        else
        {
            clickCount++;
        }
    })
})
