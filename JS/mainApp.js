var mainApp = mainApp || {};

$(function(){
    console.log("jquery működik");
    $(".gomb").dblclick(function(event){
        event.preventDefault();
    });
});

mainApp.hndlNumericKey = function(me){
    var d = $(me);
    console.log("gomb felirat: "+d.text());
    var kjlzo = $("#szamolas").text().trim();
    if(kjlzo.length < 15){
        console.log("d.text().length: "+d.text().length);
        $('#szamolas').text(kjlzo+d.text().trim());
        $(d).css({
            "background-color":"#cfcfcf",
            "box-shadow":"inset 2px 2px 4px #000000",
            "height":"34px",
            "width":"44px"
        });
        setTimeout(function(){
            console.log('TIMEOUT!!!');
            console.log("DE:");
            console.log(d);
            //$(d).css("");
            $(d).css({
                "height":"35px",
                "width":"45px",
                "box-shadow":"2px 2px 3px #050505",
                "background-color":"#dfdfdf"
            });
        }, 250, d);
    }else{
        console.error("Csak 15 karakternek van hely!");
    }
    
}

mainApp.hndlACBtn = function(me){
    
    var scrnCntn = $("#szamolas").text();
    //console.log('scrnCntn: '+scrnCntn);
    if(scrnCntn != ''){
        $("#szamolas").text(scrnCntn.substr(0,(scrnCntn.length-1)));
    }
}

