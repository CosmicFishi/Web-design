$(document).ready(function() {
    $("div.gototop").hide();
    $(window).scroll(function() {
        if($("html, body").scrollTop() > 1000)
            $("div.gototop").show("slow");
        else
            $("div.gototop").hide("faster");
    });
    $("div.gototop img").click(function(){
        $("html, body").animate({scrollTop:0}, 1200);
    });
});