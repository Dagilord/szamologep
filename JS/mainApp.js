var mainApp = mainApp || {};

$(function(){
    console.log("jquery működik");
    $(".gomb").mouseleave(function(){
        console.log("MOUSE UP");
        $(".gomb").css({
            "height":"35px",
            "width":"45px",
            "box-shadow":"2px 2px 3px #050505"
        });
    })
});

mainApp.hndlNumericKey = function(me){
    var d = $(me);
    console.log("gomb felirat: "+d.text());
    $('#szamolas').text($('#szamolas').text()+d.text());
    $(me).css({
        "background-color":"#cfcfcf",
        "box-shadow":"inset 2px 2px 4px #000000",
        "height":"34px",
        "width":"44px"
    });
}