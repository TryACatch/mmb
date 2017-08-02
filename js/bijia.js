(function(){
	var urlNum=$.getUrlParam("productid");
	var price=$.getUrlParam("productPrice");
	var com=$.getUrlParam("productCom");
	var categoryid=$.getUrlParam('categoryid');
	console.log(categoryid);
	var pPrice=$('.p-price');
	var Pcom=$('.com');
	Pcom.html(com);
	pPrice.html(price);
	Route.getproduct({
		productid:urlNum,
		callback:function(res){
			console.log(res);
			var product=$('.product');
			product.html(template('product',res));
			var cateName=$('.cateName');
			var name=res.result[0].productName;
			cateName.attr('title',name)
			name=name.slice(0,14);
			name+="...";
			cateName.html(name);
			var test=$(".test")
			test.html(res.result[0].bjShop)
			
		}
	})
	Route.getproductcom({
		productid:urlNum,
		callback:function(res){
			console.log(res);
			var main=$('.main');
			main.html(template('main',res));
		}
	})

	Route. getcategorybyid({
		categoryid:categoryid,
		callback:function(res){
			var type=$(".type");
			type.html(res.result[0].category+"&gt;");
			var hrefa="productlist.html?categoryid="+categoryid;
			type.attr('href',hrefa);
		}
	})
})();