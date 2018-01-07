$(document).ready(function(){
    $(".produce_detail ul li a").click(function(){
        $(this).addClass("active");
        $(this).parent().siblings().children().removeClass("active");
    });
    $(".big ul li a img").click(function(){
        $(this).addClass("active");
        $(this).parents("li").siblings().find("img").removeClass("active");
    });
    $(".box .shoplian ul li a").click(function(){
    	$(this).addClass("active").parent().siblings().children().removeClass("active");
    	var index = $(".box .shoplian ul li a").index(this);
    	$(".box .tapbox .diva").eq(index).show().siblings().hide();
    });
});