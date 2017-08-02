/* 接口地址管理 Route，ajax请求封装，请求基于 jquery */
(function(window) {


    var Route = {
        /* 提出 URL 以备 提取接口 可以集中管理 */
        baseUrl : '192.168.22.43',

               /* ------ 首页 api 数据请求 ------ */
        // 获取首页上面的菜单栏数据
        getindexmenu: ml_getindexmenu

      }

     /**
     * 获取首页上面的菜单栏数据
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
    function ml_getindexmenu(callback) {
        var url = Route.baseUrl + '/api/getindexmenu';
        $.get( url, function( res ) {
            callback && callback( res );
        }, 'json');
    }



    window.Route = Route; /* 向外暴露 Route */

})(window);