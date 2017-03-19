
var MenuLayer = cc.Layer.extend({
    ctor:function(){
        this._super();

        var spri
    }
});

// 定义了一个场景
// var HelloWorldScene = cc.Scene.extend({
//     onEnter:function () {
//         this._super();//调用父类
//         var layer = new HelloWorldLayer();
//         this.addChild(layer);//添加一个子节点
//
//         // director导演实现场景切换
//         setTimeout(function(){
//             cc.director.runScene(new cc.TransitionRotoZoom(2,new secondScene()));
//         },300)
//     }
// });


var secondScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        var layer = new MenuLayer();
        this.addChild(layer);
    }
})