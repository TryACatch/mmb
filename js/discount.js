(function(){
	var productid=$.getUrlParam('productid');
	console.log(productid);
	Route.getdiscountproduct({
		productid:productid,
		callback:function(res){
			console.log(res);
			var goods=$('.goods');
			goods.html(template('goods',res));
			var newcom=$('.newcom');
			console.log(res.result[0].productComment)
			newcom.html(res.result[0].productComment);
		}
	})
		//返回顶部
	var loginA=$('#logina');
	// console.log(loginA);
	loginA.on('click', function(){
		$(window).scrollTop(0);
	})
})();