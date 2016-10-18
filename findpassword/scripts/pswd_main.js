/**
 * Created by Administrator on 2016/9/9.
 */
$(document).ready(function () {
    $(".content-body form").click(function () {
        var forms=[];
        forms=$(this).parent().find("form");
        if($(this).className!==$(".phone-form").className){
            $(".phone-form").css("display","none");
        }
        for(var i=0; i<forms.length; i++){
            if($(this)==forms[i]){
                $(forms[i]).css("display","inline");
            }
        }
    });


    $(".phone").click(function () {
        $(this).css({"border-bottom":" 3px solid #6E6E6E",
            "padding-bottom":"2%"});
        $(".steps .finish").css("border-bottom","none");
        $(".steps .new-passwd-border").css("border-bottom","none");
        $(".passwd-form").css("display","none");
        $(".finish-index").css("display","none");
        $(".phone-form").css("display","inline");
    });
    $(".steps .new-passwd-border").click(function () {
        $(this).css({"border-bottom":" 3px solid #6E6E6E",
                      "padding-bottom":"2%"});
        $(".steps .finish").css("border-bottom","none");
        $(".steps .phone").css("border-bottom","none");
        $(".phone-form").css("display","none");
        $(".finish-index").css("display","none");
        $(".passwd-form").css("display","inline");

    });
    $(".steps .finish").click(function () {

        $(this).css({"border-bottom":" 3px solid #6E6E6E",
            "padding-bottom":"2%"});
        $(".steps .new-passwd-border").css("border-bottom","none");
        $(".steps .phone").css("border-bottom","none");
        $(".phone-form").css("display","none");
        $(".passwd-form").css("display","none");
        $(".finish-index").css("display","inline");
    });
});
