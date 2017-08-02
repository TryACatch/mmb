(function(){
	var brand=$.getUrlParam('brandtitleid');
	var title=$.getUrlParam('brandtitle');
	title=title.substring(0,title.lastIndexOf('十'));
	console.log(title);
	$(".brand").html(title+"哪个牌子好");
	$(".sales").html(title+"产品销量排行");
	$(".comments").html(title+"最新评论");

	var pro=$(".producer-module");
	Route.getbrand({
		brandtitleid:brand,
		callback:function(res){
			console.log(res);
			pro.html(template('pro',res));
			var producer=$('.producer');
			producer.on('click',function(){
				var brandid=$(this).attr("id");
				console.log(brandid);
					Route.getbrandproductlist({
					brandtitleid:brandid,
					pagesize:4,
					callback:function(res){
						console.log(res);
						var menu=$('.menu');
						menu.html(template('list',res));
						var productid=res.result[0].productId;
						console.log(productid);
						
						Route.getproductcom({
							productid:productid,
							callback:function(data){
								// console.log(res);
								var productAll=$(".product-all");
								productAll.html(template('main',data));
								var productOne=$('.product-one');
								productOne.html(template('one',res));
							}
						})
						// console.log(productOne);
						
					}
				})
			})

		}
	})

	// Route.getbrandproductlist({
	// 	brandtitleid:brandid,
	// 	pagesize:4,
	// 	callback:function(res){
	// 		console.log(res);
	// 		var menu=$('.menu');
	// 		menu.html(template('list',res));
	// 	}
	// })
			//返回顶部
	var loginA=$('#logina');
	// console.log(loginA);
	loginA.on('click', function(){
		$(window).scrollTop(0);
	})
})();