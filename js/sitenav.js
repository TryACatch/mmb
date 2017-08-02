(function(){
	Route.getsitenav({
		callback:function(res){
			console.log(res);
			var site=$(".site");
			site.html(template('site',res));
		}
	})
			//返回顶部
	var loginA=$('#logina');
	// console.log(loginA);
	loginA.on('click', function(){
		$(window).scrollTop(0);
	})
})();