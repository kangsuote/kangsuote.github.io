	$(window).scroll(function(){
		var top=$(window).scrollTop();
				console.log(top);

		var tops = [624,1200,1700,2427,2908,3480,3830,4100];
		for(var i in tops){
			if(top < 95){
				// pass;
				$(".navbar-nav li").removeClass("active");
			}
			else if(top < tops[i]){
				$(".navbar-nav li").removeClass("active");
 				$($(".navbar-nav li")[i]).addClass("active");
				// console.log(top);
				break;
			}else
				continue;
		}
	});

	
