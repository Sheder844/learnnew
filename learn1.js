let divVisible = true;

$(function(){
    $(".algn").click(function(){
        if(divVisible){
            $("#boxA").fadeOut();
            divVisible = !divVisible;
        } else
        {
            $("#boxA").fadeIn();
            divVisible = !divVisible;
        }
    })
})