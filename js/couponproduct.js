(function(){
	var couponid=$.getUrlParam('couponid');
	console.log(couponid);
	var arrImg=[];//存放所有图片
	var arrP=[];
	var pages=0;//当前的元素的编号
	var mask=$('.mask');
	var maskImg=$('.maskI');
	var maskP=$(".maskP");
	Route.getcouponproduct({
		couponid:couponid,
		callback:function(res){
			console.log(res);
			var count=$('.countproduct');
			count.html(template('countproduct',res));
					
			//遍历存储图片
			var products=$(".product",count);
			products.each(function(i) {
				arrImg.push(res.result[i].couponProductImg);
				arrP.push(res.result[i].couponProductName)
			});

			console.log(arrP);
			console.log(products);
			//点击显示图片
			products.on('click',function(){
				//切换遮罩层
				var mask=$('.mask');
				mask.removeClass('hide').addClass('show');
				//显示点击的元素对应的图片
				var pId=$(this).attr('id');
				// console.log(pId);
				pages=pId;
				// var maskImg=$('.mask-img');
				maskImg.html(arrImg[pId]);
				maskP.html(arrP[pId]);
			})


			var btnLeft=$(".btn-left");
			var btnRight=$(".btn-right");
			var aclose=$(".pause");
			// console.log(aclose);
			//点击切换上一张图片
			btnLeft.on('click',function(){
				if(pages==0){
					return false;
				}
				pages--;				
				maskImg.html(arrImg[pages]);
				maskP.html(arrP[pages]);
			})
			//下一张图片
			btnRight.on('click',function(){
				var len=arrImg.length-1;
				// console.log(len);
				if(pages==len){
					return false;
				}
				pages++;
				maskImg.html(arrImg[pages]);
				maskP.html(arrP[pages]);

			})

			//关闭遮罩层
			aclose.on('click',function(){
				// console.log(1);
				
				mask.removeClass('show').addClass('hide');
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