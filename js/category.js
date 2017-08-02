(function(){
	Route.getcategorytitle({
		callback:function(res){
			
			$('.big-menu').html(template('main',res));
			var btns=$('.btn-toggle');
			btns.on('click',function(){
				var titleid=$(this).attr('titleid');
				var that=$(this).parent().parent().siblings();
				console.log(titleid);
				Route.getcategory({
					titleid:titleid,
					callback:function(res){
						console.log(res);
						// console.log(template('list',res));
						var ul=$('ul',that);
						// console.log(ul);
						ul.html(template('list',res));
					}
				});
				that.toggleClass('hide');
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
