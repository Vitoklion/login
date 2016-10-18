/**
 * Created by Administrator on 2016/9/12.
 */
$(document).ready(function () {
    $(".wlxl a").click(function () {
        $(".from-load-add").css("display","none");
        $(".from-right").css("display","inline");

    });
    $(".xlxz a").click(function () {
        $(".from-right").css("display","none");
        $(".from-load-add").css("display","inline");
    });
});