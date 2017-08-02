(function(){
	Route.getindexmenu({
		callback:function(res){
			// console.log(res);
			var mainMenu=$('.main-menu');
			mainMenu.html(template('menu',res))
			var menuA=$('a',mainMenu);//获取所有的a标签
			// console.log(menuA);
			// 隐藏第9-12个图标
			menuA.each(function(index, el) {
				if(index==7){
					$(el).attr('href',"javascript:;");
				}
				if(index>7){
					$(el).addClass('hide');
				}
				
			});
			//点击更多图标 切换显示下面的项目
			menuA.eq(7).on('click',function(){
				menuA.each(function(index, el) {
				if(index>7){
					$(el).toggleClass('hide');
				}
				
			});
			})
		
				
			
		}
	});

	//请求数据 并返回到页面
	Route.getmoneyctrl({
		callback:function(res){
			console.log(res);
			var sale=$(".sale");
			sale.html(template('list',res));
		}
	});


	//点击返回顶部 回到顶部
	var loginA=$('#logina');
	// console.log(loginA);
	loginA.on('click', function(){
		$(window).scrollTop(0);
	})
})()