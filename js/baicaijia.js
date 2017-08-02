(function(){
	var id=0;
	Route.getbaicaijiaproduct({
		titleid:id,
		callback:function(res){
		 	var main=$(".main");
			main.html(template('main',res));
		}
	})


	Route.getbaicaijiatitle({
		callback:function(res){
			console.log(res);
			var lis=$(".lis");
			lis.html(template('lis',res)); 
			var li=$('li',lis);
			// console.log(li);
			li.on('click',function(){
				li.removeClass('currt');
				$(this).addClass('currt');
				var titleid=$(this).attr('titleid');
				console.log(titleid);
				Route.getbaicaijiaproduct({
					titleid:titleid,
					callback:function(res){
						console.log(res);
						var main=$(".main");
						main.html(template('main',res));
					}
				})
			})
		}
	})

		//返回顶部
	var loginA=$('#logina');
	// console.log(loginA);
	loginA.on('click', function(){
		$(window).scrollTop(0);
	})
})();