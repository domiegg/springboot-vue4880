
var projectName = '企业客户信息反馈平台';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
        name: '我的收藏',
        url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '问题信息',
	url: './pages/wentixinxi/list.html'
}, 
{
	name: '技术文档',
	url: './pages/jishuwendang/list.html'
}, 

{
	name: '平台公告',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/springbootzypuo/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"客户","menuJump":"列表","tableName":"kehu"}],"menu":"客户管理"},{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["新增","查看","修改","删除"],"menu":"运维人员","menuJump":"列表","tableName":"yunweirenyuan"}],"menu":"运维人员管理"},{"child":[{"appFrontIcon":"cuIcon-link","buttons":["新增","查看","修改","删除"],"menu":"问题类型","menuJump":"列表","tableName":"wentileixing"}],"menu":"问题类型管理"},{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看","修改","删除","报表","查看评论"],"menu":"问题信息","menuJump":"列表","tableName":"wentixinxi"}],"menu":"问题信息管理"},{"child":[{"appFrontIcon":"cuIcon-full","buttons":["新增","查看","修改","删除","报表","导出"],"menu":"问题报表","menuJump":"列表","tableName":"wentibaobiao"}],"menu":"问题报表管理"},{"child":[{"appFrontIcon":"cuIcon-present","buttons":["新增","查看","修改","删除","查看评论"],"menu":"技术文档","menuJump":"列表","tableName":"jishuwendang"}],"menu":"技术文档管理"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"平台公告","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["查看","查看评论"],"menu":"问题信息列表","menuJump":"列表","tableName":"wentixinxi"}],"menu":"问题信息模块"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看","查看评论"],"menu":"技术文档列表","menuJump":"列表","tableName":"jishuwendang"}],"menu":"技术文档模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["新增","查看","修改","删除","查看评论"],"menu":"问题信息","menuJump":"列表","tableName":"wentixinxi"}],"menu":"问题信息管理"},{"child":[{"appFrontIcon":"cuIcon-favor","buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["查看","查看评论"],"menu":"问题信息列表","menuJump":"列表","tableName":"wentixinxi"}],"menu":"问题信息模块"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看","查看评论"],"menu":"技术文档列表","menuJump":"列表","tableName":"jishuwendang"}],"menu":"技术文档模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"客户","tableName":"kehu"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看","查看评论","报表","修改"],"menu":"问题信息","menuJump":"列表","tableName":"wentixinxi"}],"menu":"问题信息管理"},{"child":[{"appFrontIcon":"cuIcon-full","buttons":["查看","导出","报表"],"menu":"问题报表","menuJump":"列表","tableName":"wentibaobiao"}],"menu":"问题报表管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["查看","查看评论"],"menu":"问题信息列表","menuJump":"列表","tableName":"wentixinxi"}],"menu":"问题信息模块"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看","查看评论"],"menu":"技术文档列表","menuJump":"列表","tableName":"jishuwendang"}],"menu":"技术文档模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"运维人员","tableName":"yunweirenyuan"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
