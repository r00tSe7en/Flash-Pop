document.write("<script src='./layer/jquery.min.js'></script>");
document.write("<script src='./layer/layer.js'></script>");
window.onload = function(){
    layer.open({
        //id: "123",//不管是什么类型的层，都只允许同时弹出一个。一般用于页面层和iframe层模式
        type: 1,//Page层类型
        move: false ,//禁止拖拽
        area: ['613px', '328px'],//设置弹窗大小
        title: false,//关闭标题栏
        shade: 0.6,//遮罩透明度
        //maxmin: true ,//允许全与屏最小化
        anim: 1,//0-6的动画形式，-1不开启
        offset: '100px',//设置顶部距离
        scrollbar: false,//禁用滚轮
        content: '<a href="https://www.se7ensec.cn/"><img src="./flash.jpg"></a>'//创建图像
    });
}