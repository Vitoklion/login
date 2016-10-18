/**
 * Created by Administrator on 2016/9/12.
 */
$(document).ready(function () {
    $(".splb a").click(function () {
        $(".from-load-add").css("display","none");
        $(".from-right").css("display","inline");

    });
    $(".spxz a").click(function () {
        $(".from-right").css("display","none");
        $(".from-load-add").css("display","inline");
    });
});