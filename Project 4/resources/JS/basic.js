$(document).ready(function() {
    var a = 0;
    $("#btn1").click(function() {
        a += 1;
        $("p").text(a);
    });
    $("#btn2").click (function() {
        $("p").text(a=0);
    });
});

function test(a,b) {
    return a*b;
}

