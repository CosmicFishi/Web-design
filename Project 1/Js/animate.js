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


    $("div.Word-BT > div.word-para:not(:first-child)").hide();
    var count = 1;
    $("#buttonID").click(function() {
        if(count < 3)
        {
            count = count+1;
            $("div.Word-BT > div.word-para").hide();
            $("div.Word-BT > div.word-para:nth-child(" +  count+ ")").show();
        }
        else
            alert("Bạn đã hoàn thành bài , vui lòng quay lại trang trước");
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