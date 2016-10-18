/**
 * Created by Administrator on 2016/9/8.
 */
$(document).ready(function () {
    $(".content-login .message a").click(function () {
        $(".content-login .message hr").css("display","inline");
        $(".content-login .account hr").css("display","none");
        $(".act-login").css("display","none");
        $(".msg-login").css("display","inline");
    });
    $(".content-login .account a").click(function () {
        $(".content-login .message hr").css("display","none");
        $(".content-login .account hr").css("display","inline");
        $(".act-login").css("display","inline");
        $(".msg-login").css("display","none");
    })

});