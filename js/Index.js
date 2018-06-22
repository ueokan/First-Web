$(function() {
			//	获取屏幕的宽高
			var nowpage = 0;
			var width = window.innerWidth;
			var height = window.innerHeight;

			$(".content").width(width);
			$(".content").height(4 * height);

			$(".page").width(width);
			$(".page").height(height);
			//	不是jQuery自带的,是引入的插件，手指触屏滑动的事件
	$(".content").swipe({
		swipe:function(event,direction,distance,duration,fingerCount){
//			滑动分页的功能
			if(direction=="up"){
				nowpage++;
			}
			if(direction=="down"){
				nowpage--;
			}
			if(nowpage<0){
				nowpage=3;
			}else if(nowpage>3){
				nowpage=3;
			}
			$(".content").animate({top:-nowpage*100+"%"},{duration:400,complete:function(){
				if(nowpage==1){
					$(".page2-Farm").fadeIn(2000,function(){
						$(".page2-It").fadeIn(2000);
					})
				}
				if(nowpage==2){
					$(".page3-Title").fadeIn(2000);
					$(".page3-BusTitle").fadeIn(3000);
					$(".page3-Bus").animate({left:"-100%"},{duration:2000});
					$(".page3-BusAvatar").animate({left:"50%"},{duration:3000,complete:function(){
						$(".page3-Bus").fadeOut("slow");
						$(".page3-BusStation").fadeOut("slow");
						$(".page3-BusAvatar").fadeOut("slow");
						$(".page3-BusTitle").fadeOut("slow");
						$(".page3-Title").fadeOut("slow",function(){
							$(".page3-TeamWall").fadeIn("slow");
							$(".page3-TeamSpace").fadeIn("slow");
							$(".page3-WhereTxt").fadeIn("slow");
							$(".page3-TeamAvatar").fadeIn("slow",function(){
								$(".page3-TeamSpace").animate({width:"30%"},{duration:400,complete:function(){
									$(".page3-WhereTxt").animate({width:"55%"},{duration:400});
								}
								});
							});
						});
					}
					});
				}
			}});
		}
		
	});
//	animate({要做的动画效果},{duration:动画时长,complete:动画执行完要做的事情})
	$(".page1-Building").fadeIn(400,function(){
		$(".page1-Flight").animate({width:"70%"},{duration:2000});
	});
	$(".page4-Off").click(function(){
		$(this).attr("src","img/lightOn.png")
		$(".page4-OffBg").fadeOut("slow")
		$(".page4-Title").fadeOut("slow")
		$(".page4-Guide").fadeOut("slow",function(){
			$(".page4-OnBg").fadeIn("slow");
			$(".page4-Txt").fadeIn("slow")
		})
	})
	
})

			



		//$(document).ready(function(){
		//})同上
		//等文档完成后再执行js代码,