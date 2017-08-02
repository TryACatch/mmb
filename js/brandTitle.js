(function(){
	Route.getbrandtitle({
		callback:function(res){
			console.log(res);
			var rank=$(".rank");
			rank.html(template('rank',res));
		}
	})

				//返回顶部
	var loginA=$('#logina');
	// console.log(loginA);
	loginA.on('click', function(){
		$(window).scrollTop(0);
	})
})();