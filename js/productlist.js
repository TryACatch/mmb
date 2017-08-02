(function(){
	var  urlNum=$.getUrlParam("categoryid");
	var count=0;
	var pageCount=1;//当前页码
	Route.getcategorybyid({
		categoryid:urlNum,
		callback:function(res){
			console.log(res)
			var cateName=$('.cateName')
			cateName.html(template('name',res));
		}
	})

	Route.getproductlist({
		categoryid:urlNum,
		callback:function(res){
			console.log(res);
			var menu=$('.menu');
			menu.html(template('list',res));

			count=Math.ceil(res.totalCount/res.pagesize);
			var pageNum=$('#pageNum');
			// console.log(count);
			for (var i = 0; i < count; i++) {
				var option=$('<option value="'+(i+1)+'">'+(i+1)+'/'+count+'</option>');
				pageNum.append(option);
			};
			pageNum.change(function(event) {
				// console.log($(this).val());
				var pCount=$(this).val();
				if(pCount==pageCount){
					return false;
				}else{
					Route.getproductlist({
						categoryid:urlNum,
						pageid:pCount,
						callback:function(res){
							console.log(res);
							var menu=$('.menu');
							menu.html(template('list',res));
							pageCount=pCount;
						}
					})
				}
			});
			var prev=$('.prev');
			var next=$('.next');
			prev.on('click',function(){
				if(pageCount==1){
					return false;
				}
				pageCount--;
				Route.getproductlist({
						categoryid:urlNum,
						pageid:pageCount,
						callback:function(res){
							console.log(res);
							var menu=$('.menu');
							menu.html(template('list',res));
							pageNum.val(pageCount);
						}
				})
			});
			next.on('click',function(){
				if(pageCount==3){
					return false;
				}
				pageCount++;
				Route.getproductlist({
						categoryid:urlNum,
						pageid:pageCount,
						callback:function(res){
							console.log(res);
							var menu=$('.menu');
							menu.html(template('list',res));
							pageNum.val(pageCount);
						}
				})
			});


		}


	})
	//返回顶部
	var loginA=$('#logina');
	// console.log(loginA);
	loginA.on('click', function(){
		$(window).scrollTop(0);
	})
})();