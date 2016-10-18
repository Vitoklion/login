/**
 * Created by Administrator on 2016/9/10.
 */
$(document).ready(function () {
    $(".all").click(function () {
        $(this).css({"border-bottom":" 3px solid #6E6E6E",
            "padding-bottom":"2%","font-weight":"bold"});
        $(".income").css("border-bottom","none");
        $(".output").css("border-bottom","none");
        $(".scores-table-income").css("display","none");
        $(".scores-table-output").css("display","none");
        $(".scores-table-all").css("display","inline");
    });
    $(".income").click(function () {
        $(this).css({"border-bottom":" 3px solid #6E6E6E",
            "padding-bottom":"2%","font-weight":"bold"});
        $(".all").css("border-bottom","none");
        $(".output").css("border-bottom","none");
        $(".scores-table-output").css("display","none");
        $(".scores-table-all").css("display","none");
        $(".scores-table-income").css("display","inline");

    });
    $(".output").click(function () {
        $(this).css({"border-bottom":" 3px solid #6E6E6E",
            "padding-bottom":"2%","font-weight":"bold"});
        $(".all").css("border-bottom","none");
        $(".income").css("border-bottom","none");

        $(".scores-table-all").css("display","none");
        $(".scores-table-income").css("display","none");
        $(".scores-table-output").css("display","inline");
    });
});