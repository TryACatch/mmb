(function(){
	var jd=$(".jd");
	var area=$(".area");
	var jdm=$(".jd-module");
	var aream=$(".area-module");
	var pro=$(".pro-main");
	var shopi=jd.attr('shopid');
	var areai=area.attr('areaid');
	Route.getgsproduct({
			shopid:shopi,
			areaid:areai,
			callback:function(res){
				// console.log(res);
				pro.html(template('pro',res));
				$('.zhenshi').attr('href','https://m.jd.com/');
			}
		})
	//点击按钮 发送请求 获取到所有的店铺数据
	jd.one('click',function(){
		Route.getgsshop({
			callback:function(res){
				console.log(res);
				jdm.html(template('jdm',res));
				jdm.removeClass('hide');
				aream.addClass('hide');
				// jdms=$('div',jdm);
				// console.log(jdms);
			}
		})
		
	})
	jd.on('click',function(){
		jdm.toggleClass('hide');
		aream.addClass('hide');
	})
	//事件代理点击事件
	jdm.on('click',"div",function(){
		shopi=jd.attr('shopid');
		// console.log(shopi);
		var jdmes=$(this).text();
		var ids=$(this).attr('shopid');
		// console.log(ids);
		if(ids==shopi){
			return false;
		}
		jd.html(jdmes);
		jd.attr('shopid',ids);
		var ida=area.attr('areaid');
		Route.getgsproduct({
			shopid:ids,
			areaid:ida,
			callback:function(res){
				console.log(ids);
				pro.html(template('pro',res))
				if(ids==0){
					$('.zhenshi').attr('href','https://m.jd.com/');
				}else if(ids==1){
					console.log('yhd')
					$('.zhenshi').attr('href','https://m.yhd.com/');
				}else if(ids==2){
					$('.zhenshi').attr('href','https://m.tmall.com/');
				}
			}
		})
	})



	area.one('click',function(){
		Route.getgsshoparea({
			callback:function(res){
				console.log(res);
				aream.html(template('aream',res));
				aream.removeClass('hide');
				jdm.addClass('hide');
			}
		})
	})
	area.on('click',function(){
		aream.toggleClass('hide');
		jdm.addClass('hide');
	})
	//事件代理点击事件
	aream.on('click','div',function(){
		areai=area.attr('areaid');
		// console.log(shopi);
		var areames=$(this).text();
		areames=areames.slice(0, 2)
		var ids=$(this).attr('areaid');
		// console.log(ids);
		if(ids==areai){
			return false;
		}
		area.html(areames);
		area.attr('areaid',ids);
		var ida=jd.attr('shopid');
		Route.getgsproduct({
			shopid:ida,
			areaid:ids,
			callback:function(res){
				console.log(res);
				pro.html(template('pro',res))
			}
		})
	})



		//返回顶部
	var loginA=$('#logina');
	// console.log(loginA);
	loginA.on('click', function(){
		$(window).scrollTop(0);
	})

})();