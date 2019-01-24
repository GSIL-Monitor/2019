 

//联系方式
var tips = $(".tips");
$(".list li").hover(
	function() {
	  	$(this).find(tips).show(30);
	},function() {
	  	$(this).find(tips).hide();
	}
);
$(".list li a").click(function(){
	alert('内容待添加 QWQ 感谢关注!!!');
});

//导航栏
var navBar = true;
$(".menu-btn").click(function() {
	if (navBar) {
		$(".menu").slideDown(300);
	} else {
		$(".menu").slideUp(300);
	}
	navBar = !navBar;
});
if($(window).width()<768){
	$(".menu li").click(function() {
		$(".menu").slideUp(300);
	});
}
 
//GoUp
$(window).scroll(function() {
    $(window).scrollTop() > document.documentElement.clientHeight /2 ? $('#GoUp').fadeIn() : $('#GoUp').fadeOut();
    $(".menu-fixed").hide();
});
$("#GoUp").click(function () {
    $('html,body').stop().animate({
        scrollTop: 0
    }, 500);
});


  
$('.show-box > h1,.show-box > h3,.show-box > p').addClass('animated fadeInUp');
$('.my-avatar,.headline,.flex-item,.say,.timeline,.contact-box').addClass('animated fadeIn');	
$('.my-avatar,.headline,.flex-item,.say,.timeline,.contact-box').attr("data-wow-duration","1s");	
$('.view-box').addClass('animated bounceInRight');
$('.moveup').addClass('animated fadeInUp');
var item = $('.flex-wrap > .flex-item');
for(var i=0;i<item.length;i++){
	item.eq(i).attr("data-wow-delay",(i / 10 )+"s");
}
$(window).load(function() {
	$('body').addClass('loaded');
	$('#loeder-wrapper').fadeOut(300);	
	setTimeout(function(){
		$('.pv').fadeOut(300);
	},6000);
});


// 点击鼠标键
$(document).mousedown(function(e){
    // 鼠标键 1(左键)，2鼠标滚轮，3右键
    var key = e.which; 
    // 点击鼠标右键
    if(key == 3){
        var x = e.clientX; // x 横坐标
        var y = e.clientY; // y 纵坐标
        // $("#zb").html("x = " + x + "  ,  y = " + y); 显示坐标值

        // 获取menu的宽度和高度
        var menuHeight = $(".menu-fixed").height();
        var menuWidth = $(".menu-fixed").width();
        // 获取浏览器的可见高度和宽度
        var clientHeight = getClientHeight();
        var clientWidth = getClientWidth();
        // 判断
        if(menuHeight + y > clientHeight){
            y = clientHeight - menuHeight - 5;
        }
        if(menuWidth + x > clientWidth){
            x = clientWidth - menuWidth - 5;
        }
        $(".menu-fixed").show().css({left:x,top:y});
    }

});

// 浏览器的可见高度
function getClientHeight() {
    var clientHeight = 0;
    if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight: document.documentElement.clientHeight;
    } else {
        clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight: document.documentElement.clientHeight;
    }
    return clientHeight;
}
// 浏览器的可见宽度
function getClientWidth() {
    var clientWidth = 0;
    if (document.body.clientWidth && document.documentElement.clientWidth) {
        clientWidth = (document.body.clientWidth < document.documentElement.clientWidth) ? document.body.clientWidth: document.documentElement.clientWidth;
    } else {
        clientWidth = (document.body.clientWidth > document.documentElement.clientWidth) ? document.body.clientWidth: document.documentElement.clientWidth;
    }
    return clientWidth;
}

$('.menu-fixed > li').eq(0).click(function(){
	location.reload();
})
function Reido() {
	document.onkeydown = function(a) {
		a = window.event || a;
		if (123 == a.keyCode || a.ctrlKey && a.shiftKey && 73 == a.keyCode || a.shiftKey && 121 == a.keyCode) return !1
	}
}
Reido();
document.oncontextmenu = function() {
	return !1
};