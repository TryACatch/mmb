(function(){
	Route.getcoupon({
		callback:function(res){
			console.log(res);
			$('.coupon').html(template('coupon',res));
		}
	})

		//返回顶部
	var loginA=$('#logina');
	// console.log(loginA);
	loginA.on('click', function(){
		$(window).scrollTop(0);
	})
})();