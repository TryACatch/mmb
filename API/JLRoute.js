/* 接口地址管理 Route，ajax请求封装，请求基于 jquery */
(function(window) {

    var Route = {
        /* 提出 URL 以备 提取接口 可以集中管理 */
        baseUrl : 'http://127.0.0.1:9090',



    /* ------ 一、首页 api 数据请求 ------ */
        // 1.2.1、获取首页上面的菜单栏数据
        getindexmenu: jl_getindexmenu,

        // 1.2.2、获取首页的折扣列表中的数据
        getmoneyctrl:jl_getmoneyctrl,


    /* ------ 二、比价搜索页面 ------ */
        // 2.2.1、获取分类标题的数据
        getcategorytitle:jl_getcategorytitle,

        // 2.2.2、获取分类列表的数据
        // 需要参数：titleid: 分类标题的id  ( Number类型)
        getcategory:jl_getcategory,

        // 2.4.1、获取根据分类id获取分类数据
        // 需要参数：categoryid: 分类的id  ( Number类型)
        getcategorybyid:jl_getcategorybyid,

        // 2.4.2、获取商品列表的数据
        // 需要参数：categoryid ： 分类id  ( Number类型)
        // pageid :  页数id   ( Number类型)
        getproductlist:jl_getproductlist,

        // 2.6.1、获取商品详情的数据
        // 需要参数：productid ： 商品id  ( Number类型)
        getproduct:jl_getproduct,

        // 2.6.2、获取商品评论的数据
        // 需要参数：productid ： 商品id  ( Number类型)
        getproductcom:jl_getproductcom,


    /* ------ 三、省钱控页面 ------ */
        // 3.2、获取省钱控商品列表的数据
        // 需要参数：pageid : 页数id   (Number) 
        // 不传默认返回第一页数据
        getmoneyctrl:jl_getmoneyctrl,

        // 3.4、获取国内折扣商品详情的数据
        // 需要参数：productid : 商品id (Number)
        getmoneyctrlproduct:jl_getmoneyctrlproduct,


     /* ------ 四、国内折扣页面 ------ */
        // 4.2、获取国内折扣商品列表的数据
        getinlanddiscount:jl_getinlanddiscount,

        // 4.4、获取国内折扣商品详情的数据
         // 需要参数：productid : 商品id (Number)
        getdiscountproduct:jl_getdiscountproduct,


       /* ------ 五、白菜价页面 ------ */
        // 5.2.1、获取国内折扣商品列表的数据
        getbaicaijiatitle:jl_getbaicaijiatitle,

        // 5.2.2、获取白菜价商品列表的数据
        // 需要参数:titleid : 标题id (Number) 
        getbaicaijiaproduct:jl_getbaicaijiaproduct,



     /* --- 六、海淘折扣页面页面（同省钱控页面） --- */
        // 6.2、获取省钱控商品列表的数据
        // 需要参数:pageid : 页数id   (Number) 
        // 不传默认返回第一页数据
        getmoneyctrl:jl_getmoneyctrl,


    /* --- 七、优惠券页面 --- */ 
        // 7.2.1、获取优惠券标题的数据
        getcoupon:jl_getcoupon,

        // 7.2.2、获取优惠券列表的数据
        // 需要参数:couponid：优惠券标题id  (Number)
        getcouponproduct:jl_getcouponproduct,


    /* --- 八、凑单品页面页面 --- */ 
        // 8.2.1、获取凑单品店铺的数据
        getgsshop:jl_getgsshop,

        // 8.2.2、获取凑单品区域的数据
        getgsshoparea:jl_getgsshoparea,

        // 8.2.3、获取凑单品列表的数据
        // 需要参数：shopid : 店铺id  (Number)
        //           areaid : 区域id  (Number)
        getgsproduct:jl_getgsproduct,


    /* --- 九、商城导航页面 --- */ 
        // 9.2、获取商城导航的数据
        getsitenav:jl_getsitenav,


    /* --- 十、品牌大全页面 --- */ 
        // 10.2.1、获取品牌大全标题的数据
        getbrandtitle:jl_getbrandtitle,

         // 10.2.2、获取品牌标题对应的十大品牌的数据
        // 需要参数：brandtitleid：品牌标题id  (Number)
        getbrand:jl_getbrand,

        // 10.2.3、获取品牌标题对应的十大品牌的销量排行商品列表的数据
        // 需要参数：brandtitleid：品牌标题id  (Number) 
        // pagesize ：展示的数据量 默认为4个 (Number)
        getbrandproductlist:jl_getbrandproductlist,
        
        // 10.2.4、获取销量排行商品的评论的数据
        // 需要参数：productid ： 商品id  ( Number类型)
        getproductcom:jl_getproductcom



    }














    
     /*********************************
     * 1.2.1、获取首页上面的菜单栏数据
         * 方法名：getindexmenu
         * 请求方式：get
         * 传参:无
         * 返回数据样例：
         *     {
                "result": [{
                    "indexmenuId": “菜单的id”,
                    "name": "菜单的名称",
                    "img": "菜单的图片",
                    "titlehref": "菜单的链接地址"
                }]
            }
        */
        function jl_getindexmenu (obj) {
            var url = Route.baseUrl + '/api/getindexmenu';
            $.get( url, function( res ) {
                obj.callback && obj.callback( res );
            }, 'json');
        }



    /*********************************
    /* 1.2.2、获取首页的折扣列表中的数据
             * 方法名：getmoneyctrl
             * 请求方式：get
             * 传参:无
             * 返回数据样例：
             *  {
                "result": [{
                    "productId": "商品id",
                    "productName": "商品名称",
                    "productPinkage": "商品价格",
                    "productFrom": "商品来源",
                    "productTime": "商品发布事件",
                    "productImgSm": "商品图片小图",
                    "productComCount": "商品评论"
                }]
        }
     */
     function jl_getmoneyctrl (obj) {
        var url = Route.baseUrl + '/api/getmoneyctrl';
        $.get( url,function( res ) {
            obj.callback && obj.callback( res );
        }, 'json');
    }



    /*********************************
    /* 2.2.1、获取分类标题的数据
     * 方法名：getcategorytitle
     * 请求方式：get
     * 传参:无
     * 返回数据样例：
     *  {
    "result": [{
        "indexmenuId": “菜单的id”,
        "name": "菜单的名称",
        "img": "菜单的图片",
        "titlehref": "菜单的链接地址"
        }]
    }
     */
     function jl_getcategorytitle (obj) {
        var url = Route.baseUrl + '/api/getcategorytitle';
        $.get( url,function( res ) {
            obj.callback && obj.callback( res );
        }, 'json');
    }



  /*********************************
  /* 2.2.2、获取分类列表的数据
     * 方法名：getcategory
     * 请求方式：get
     * 传参:   titleid: 分类标题的id  ( Number类型)
     * 返回数据样例：
     *  {
    "result": [{
        "productId": "商品id",
        "productName": "商品名称",
        "productPinkage": "商品价格",
        "productFrom": "商品来源",
        "productTime": "商品发布事件",
        "productImgSm": "商品图片小图",
        "productComCount": "商品评论"
    }]
}
     */
     function jl_getcategory (obj) {
        var url = Route.baseUrl + '/api/getcategory';
        var data={
            "titleid":obj.titleid
        }
        $.get( url, data,function( res ) {
            obj.callback && obj.callback( res );
        }, 'json');
    }





  /*********************************
  /* 2.4.1、获取根据分类id获取分类名称的数据
     * 方法名：getcategorybyid
     * 请求方式：get
     * 传参:   categoryid: 分类的id  ( Number类型)
     * 返回数据样例：
     *  {
    "result": [{
        "categoryId": "分类id",
        "category": "分类名称",
        "titleId": "分类标题id"
    }]
}
     */
     function jl_getcategorybyid(obj) {
        var url = Route.baseUrl + '/api/getcategorybyid';
        var data={
            "categoryid":obj.categoryid
        }
        $.get( url, data,function( res ) {
            obj.callback && obj.callback( res );
        }, 'json');
    }





     /*********************************
  /* 2.4.2、获取商品列表的数据
     * 方法名：getproductlist
     * 请求方式：get
     * 传参:   categoryid ： 分类id  ( Number类型)，
                    pageid :  页数id   ( Number类型)
     * 返回数据样例：
     *  {
    "pagesize": "每页大小",
    "totalCount": "总条数"
    "result": [{
        "productId": "商品id",
        "categoryId": "商品分类id",
        "productListId": "商品列表id",
        "productName": "商品名称",
        "productImg": "商品图片",
        "productPrice": "商品价格",
        "productQuote": "商品报价",
        "productCom": "商品评论数",
        "brandName": "品牌名称",
        "brandTitleId": "品牌标题id"
    }]
}
     */
     function jl_getproductlist(obj) {
        var url = Route.baseUrl + '/api/getproductlist';
        var data={
            "categoryid":obj.categoryid,
            "pageid" : obj.pageid
        }
        $.get( url, data,function( res ) {
            obj.callback && obj.callback( res );
        }, 'json');
    }




  /*********************************
  /* 2.6.1、获取商品详情的数据
     * 方法名：getproduct
     * 请求方式：get
     * 传参:   productid ： 商品id  ( Number类型)
     * 返回数据样例：
     *   {
    "result": [{        
        "productId": "商品id",
        "productName": "商品名称",
        "productImg": "商品图片",
        "bjShop": "商品比价购买店铺",
        "categoryId": "分类id"
    }]
}
     */
     function jl_getproduct(obj) {
        var url = Route.baseUrl + '/api/getproduct';
        var data={
            "productid":obj.productid
        }
        $.get( url, data,function( res ) {
            obj.callback && obj.callback( res );
        }, 'json');
    }



  /*********************************
  /* 2.6.2、获取商品列表的数据
     * 方法名：getproductcom
     * 请求方式：get
     * 传参:   productid ： 商品id  ( Number类型)
     * 返回数据样例：
     *   {
            "result": [{
                "comId": "商品评论id",
                "comName": "商品评论人名",
                "comTime": "商品评论时间",
                "comFrom": "商品评论来源",
                "comContent": "商品评论内容",
                "productId": "商品id",
                "categoryId": "分类id"
            }]
        }
     */
     function jl_getproductcom(obj) {
        var url = Route.baseUrl + '/api/getproductcom';
        var data={
            "productid":obj.productid
        }
        $.get( url, data,function( res ) {
            obj.callback && obj.callback( res );
        }, 'json');
    }




  /*********************************
  /* 3.2、获取省钱控商品列表的数据
     * 方法名：getmoneyctrl
     * 请求方式：get
     * 传参:   pageid : 页数id   (Number) 
     *         不传默认返回第一页数据
     * 返回数据样例：
     *   {
    "pagesize": "每页数据大小",
    "totalCount": "商品总条数",
    "result": [{
        "productId": "商品id",
        "productName": "商品名称",
        "productPinkage": "商品价格",
        "productFrom": "商品来源",
        "productImgSm": "商品的图片小图",
        "productComCount": "商品评论数量"
    }]
}
     */
     function jl_getmoneyctrl(obj) {
        var url = Route.baseUrl + '/api/getmoneyctrl';
        var data={
            "productid":obj.productid ||0
        }
        $.get( url, data,function( res ) {
            obj.callback && obj.callback( res );
        }, 'json');
    }






  /*********************************
  /* 3.4、获取国内折扣商品详情的数据
     * 方法名：getmoneyctrlproduct
     * 请求方式：get
     * 传参:   pageid : 页数id   (Number) 
     * 返回数据样例：
     *   {
    "result": [{
        "productId": "商品id",
        "productName": "商品名称",
        "productPinkage": "商品价格",
        "productFrom": "商品来源",
        "productTime": "商品发布时间",
        "productTips": "商品发布小编",
        "productInfo": "商品的描述信息1",
        "productInfo1": "商品的描述信息2",
        "productImgSm": "商品的图片小图",
        "productImgLg": "商品的图片大图",
        "productCity": "商品的库存城市",
        "productInfo2": "商品的描述信息3",
        "productImg2": "商品第2张图片",
        "productImg3": "商品第3张图片",
        "productComment": "",
        "productComCount": "商品评论数量"
    }]
} 
     */
     function jl_getmoneyctrlproduct(obj) {
        var url = Route.baseUrl + '/api/getmoneyctrlproduct';
        var data={
            "productid":obj.productid
        }
        $.get( url, data,function( res ) {
            obj.callback && obj.callback( res );
        }, 'json');
    }




  /*********************************
  /* 4.2、获取国内折扣商品列表的数据
     * 方法名：getinlanddiscount
     * 请求方式：get
     * 传参:   无
     * 返回数据样例：
     *   {
    "result": [{
        "productId":  "商品id",
        "productName": "商品名称",
        "productPrice": "商品价格",
        "productFrom": "商品来源",
        "productTime": "商品发布时间",       
        "productImg": "商品的图片",
    }]
}
     */
     function jl_getinlanddiscount(obj) {
        var url = Route.baseUrl + '/api/getinlanddiscount';   
        $.get( url, function( res ) {
            obj.callback && obj.callback( res );
        }, 'json');
    }




  /*********************************
  /* 4.4、获取国内折扣商品详情页功能界面的数据
     * 方法名：getdiscountproduct
     * 请求方式：get
     * 传参:   productid : 商品id (Number)
     * 返回数据样例：
     *   {
    "result": [{
        "productId": "商品id",
        "productName": "商品名称",
        "productPinkage": "商品价格",
        "productFrom": "商品来源",
        "productTime": "商品发布时间",
        "productTips": "商品发布小编",
        "productInfo": "商品的描述信息1",
        "productInfo1": "商品的描述信息2",
        "productImgSm": "商品的图片小图",
        "productImgLg": "商品的图片大图",
        "productCity": "商品的库存城市",
        "productInfo2": "商品的描述信息3",
        "productImg2": "商品第2张图片",
        "productImg3": "商品第3张图片",
        "productComment": "",
        "productComCount": "商品评论数量"
    }]
} 
     */
     function jl_getdiscountproduct(obj) {
        var url = Route.baseUrl + '/api/getdiscountproduct';
        var data={
            "productid":obj.productid 
        }
        $.get( url, data,function( res ) {
            obj.callback && obj.callback( res );
        }, 'json');
    }




 /*********************************
  /* 5.2.1、获取白菜价标题的数据
     * 方法名：getbaicaijiatitle
     * 请求方式：get
     * 传参:   无
     * 返回数据样例：
     *    {
    "result": [{
        "titleId": "标题id",
        "title": "标题内容"
    }]
}
     */
     function jl_getbaicaijiatitle(obj) {
        var url = Route.baseUrl + '/api/getbaicaijiatitle';
        $.get( url, function( res ) {
            obj.callback && obj.callback( res );
        }, 'json');
    }



/*********************************
  /* 5.2.2、获取白菜价商品列表的数据
     * 方法名：getbaicaijiaproduct
     * 请求方式：get
     * 传参:   titleid : 标题id (Number) 
     * 返回数据样例：
     *    {
        "result": [{
        "titleId": "标题id",
        "productId": "商品id",
        "productName": "商品名称",
        "productPrice": "商品价格",
        "productImg": "商品图片",
        "productCoupon": "点击领取优惠券",
        "productHref": "下单链接",
        "productCouponRemain": "已领数量"
    }]
}}
     */
     function jl_getbaicaijiaproduct(obj) {
        var url = Route.baseUrl + '/api/getbaicaijiaproduct';
        var data= {
            "titleid":obj.titleid
        }
        $.get( url, data,function( res ) {
            obj.callback && obj.callback( res );
        }, 'json');
    }


    /*********************************
    /* 6.2、获取省钱控商品列表的数据
     * 方法名：getmoneyctrl
     * 请求方式：get
     * 传参:   pageid : 页数id   (Number) 
     *         不传默认返回第一页数据
     * 返回数据样例：
     *    {
    "pagesize": "每页数据大小",
    "totalCount": "商品总条数",
    "result": [{
        "productId": "商品id",
        "productName": "商品名称",
        "productPinkage": "商品价格",
        "productFrom": "商品来源",
        "productImgSm": "商品的图片小图",
        "productComCount": "商品评论数量"
    }]
}
     */
     function jl_getmoneyctrl(obj) {
        var url = Route.baseUrl + '/api/getmoneyctrl';
        var data= {
            "pageid":obj.pageid||0
        }
        $.get( url, data,function( res ) {
            obj.callback && obj.callback( res );
        }, 'json');
    }




    /*********************************
    /* 7.2.1、获取优惠券标题的数据
     * 方法名：getcoupon
     * 请求方式：get
     * 传参:  无
     * 返回数据样例：
     *    {
    "result": [{
        "couponId": "优惠券标题id",
        "couponImg": "优惠券标题图片",
        "couponLink": "优惠券列表链接",
        "couponTitle": "优惠券标题名称"
    }]
}
     */
     function jl_getcoupon(obj) {
        var url = Route.baseUrl + '/api/getcoupon';
        $.get( url, function( res ) {
            obj.callback && obj.callback( res );
        }, 'json');
    }


    /*********************************
    /* 7.2.2、获取优惠券列表的数据
     * 方法名：getcouponproduct
     * 请求方式：get
     * 传参:   couponid：优惠券标题id  (Number)
     * 返回数据样例：
     *    {
    "result": [{
        "couponProductId": "优惠券商品id",
        "couponId": "优惠券标题id",
        "couponProductTime": "优惠券商品有效期",
        "couponProductImg": "优惠券商品图片",
        "couponProductName": "优惠券商品名称",
        "couponProductPrice": "优惠券商品价格"
    }]
}
     */
     function jl_getcouponproduct(obj) {
        var url = Route.baseUrl + '/api/getcouponproduct';
        var data= {
            "couponid":obj.couponid
        }
        $.get( url, data,function( res ) {
            obj.callback && obj.callback( res );
        }, 'json');
    }



    /*********************************
    /* 8.2.1、获取凑单品店铺的数据
     * 方法名：getgsshop
     * 请求方式：get
     * 传参:   无
     * 返回数据样例：
     *    {
    "result": [{
        "shopId": "店铺id",
        "shopName": "店铺名称"
    }]
} 
     */
     function jl_getgsshop(obj) {
        var url = Route.baseUrl + '/api/getgsshop';
        $.get( url,function( res ) {
            obj.callback && obj.callback( res );
        }, 'json');
    }



  /*********************************
    /* 8.2.2、获取凑单品区域的数据
     * 方法名：getgsshoparea
     * 请求方式：get
     * 传参:   无
     * 返回数据样例：
     *    {
    "result": [{
        "areaId": "区域id",
        "areaName": "区域名称"
    }]
}
     */
     function jl_getgsshoparea(obj) {
        var url = Route.baseUrl + '/api/getgsshoparea';
        $.get( url,function( res ) {
            obj.callback && obj.callback( res );
        }, 'json');
    }



 /*********************************
    /* 8.2.3、获取凑单品商品列表的数据
     * 方法名：getgsproduct
     * 请求方式：get
     * 传参:   shopid : 店铺id  (Number)
                areaid : 区域id  (Number)
     * 返回数据样例：
     *    {
    "result": [{
        "couponProductId": "优惠券商品id",
        "couponId": "优惠券标题id",
        "couponProductTime": "优惠券商品有效期",
        "couponProductImg": "优惠券商品图片",
        "couponProductName": "优惠券商品名称",
        "couponProductPrice": "优惠券商品价格"
    }]
}
     */
     function jl_getgsproduct(obj) {
        var url = Route.baseUrl + '/api/getgsproduct';
        var data= {
            "shopid":obj.shopid,
            "areaid":obj.areaid
        }
        $.get( url, data,function( res ) {
            obj.callback && obj.callback( res );
        }, 'json');
    }




 /*********************************
    /* 9.2、获取商城导航的数据
     * 方法名：getsitenav
     * 请求方式：get
     * 传参:   无
     * 返回数据样例：
     *    {
        "result": [{
            "navId": "导航id",
            "navImg": "导航图片",
            "navTitle": "导航名称",
            "navHref": "导航链接    "
        }]
}
     */
     function jl_getsitenav(obj) {
        var url = Route.baseUrl + '/api/getsitenav';
        $.get( url,function( res ) {
            obj.callback && obj.callback( res );
        }, 'json');
    }



/*********************************
    /* 10.2.1、获取品牌大全标题的数据
     * 方法名：getbrandtitle
     * 请求方式：get
     * 传参:   无
     * 返回数据样例：
     *    {
        "result": [{
            "brandTitleId": "品牌标题id",
            "brandTitle": "品牌标题名称",
            "categoryId": "分类id"
        }]
        }
     */
     function jl_getbrandtitle(obj) {
        var url = Route.baseUrl + '/api/getbrandtitle';
        $.get( url,function( res ) {
            obj.callback && obj.callback( res );
        }, 'json');
    }



 /*********************************
    /* 10.2.2、获取品牌标题对应的十大品牌的数据
     * 方法名：getbrand
     * 请求方式：get
     * 传参:   brandtitleid：品牌标题id  (Number)
     * 返回数据样例：
     *    {
    "result": [{
        "couponProductId": "优惠券商品id",
        "couponId": "优惠券标题id",
        "couponProductTime": "优惠券商品有效期",
        "couponProductImg": "优惠券商品图片",
        "couponProductName": "优惠券商品名称",
        "couponProductPrice": "优惠券商品价格"
    }]
}
     */
     function jl_getbrand(obj) {
        var url = Route.baseUrl + '/api/getbrand';
        var data= {
            "brandtitleid":obj.brandtitleid,
        }
        $.get( url, data,function( res ) {
            obj.callback && obj.callback( res );
        }, 'json');
    }




 /*********************************
    /* 10.2.3、获取品牌标题对应的十大品牌的销量排行商品列表的数据
     * 方法名：getbrandproductlist
     * 请求方式：get
     * 传参:   brandtitleid：品牌标题id  (Number) 
                pagesize ：展示的数据量 默认为4个 (Number)
     * 返回数据样例：
     *    {
    "pagesize": "每页大小",
    "totalCount": "总条数"
    "result": [{
        "productId": "商品id",
        "categoryId": "商品分类id",
        "productListId": "商品列表id",
        "productName": "商品名称",
        "productImg": "商品图片",
        "productPrice": "商品价格",
        "productQuote": "商品报价",
        "productCom": "商品评论数",
        "brandName": "品牌名称",
        "brandTitleId": "品牌标题id",
        "brandId": "品牌id"
    }]
}
     */
     function jl_getbrandproductlist(obj) {
        var url = Route.baseUrl + '/api/getbrandproductlist';
        var data= {
            "brandtitleid":obj.brandtitleid,
            "pagesize":obj.pagesize||4
        }
        $.get( url, data,function( res ) {
            obj.callback && obj.callback( res );
        }, 'json');
    }



 /*********************************
    /* 10.2.4、获取销量排行商品的评论的数据
     * 方法名：getproductcom
     * 请求方式：get
     * 传参:  productid ： 商品id   ( Number类型)
     * 返回数据样例：
     *    {
    "result": [{
        "comId": "商品评论id",
        "comName": "商品评论人名",
        "comTime": "商品评论时间",
        "comFrom": "商品评论来源",
        "comContent": "商品评论内容",
        "productId": "商品id",
        "categoryId": "分类id"
    }]
}
     */
     function jl_getproductcom(obj) {
        var url = Route.baseUrl + '/api/getproductcom';
        var data= {
            "productid":obj.productid,
        }
        $.get( url, data,function( res ) {
            obj.callback && obj.callback( res );
        }, 'json');
    }









    window.Route = Route; /* 向外暴露 Route */

})(window);