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

/* doi ảnh */
function khoidong() 
{
    setInterval("doianh()", 3000);
}
var i =1;
function doianh()
{
    if(i>3)
        i =1;
    var divImg = document.querySelectorAll("div.background_image > img")[0];
    var img = "images/background"+ i +".jpg";
    i = i+1;

    divImg.src = img;
}