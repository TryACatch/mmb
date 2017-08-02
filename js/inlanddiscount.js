(function(){
	Route.getinlanddiscount({
		callback:function(res){
			console.log(res);
			var allpro=$(".allPro");
			allpro.html(template('allpro',res))
		}
	})
		//返回顶部
	var loginA=$('#logina');
	// console.log(loginA);
	loginA.on('click', function(){
		$(window).scrollTop(0);
	})
})();