
var BallLayer = cc.Layer.extend({
    deltaX:1,
    ball:null,
    frame:0,
    bg:null,

    ctor:function () {
        //////////////////////////////
        // 1. super init first
        // this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        // var size = cc.winSize;

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // // create and initialize a label
        // var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
        // // position the label on the center of the screen
        // helloLabel.x = size.width / 2;
        // helloLabel.y = size.height / 2 + 200;
        // // add the label as a child to this layer
        // this.addChild(helloLabel, 5);
        //
        // // add "HelloWorld" splash screen"  一个精灵
        // this.sprite = new cc.Sprite(res.HelloWorld_png);
        // this.sprite.attr({
        //     x: size.width / 2,
        //     y: size.height / 2
        // });
        // this.addChild(this.sprite, 0);
        //
        // return true;

        // 创建一个会动的球
        this._super();
        var size=cc.director.getWinSize();
        var ball=new cc.Sprite(res.Ball_png);

        ball.x=0;
        ball.y=size.height/2;
        this.ball=ball;
        this.addChild(this.ball,1)

        // 记录球的运动轨迹
        // this.bg=new cc.DrawNode();
        // this.addChild(this.bg);
        // this.scheduleUpdate();

        // 移动小球
        // var action=cc.moveBy(1,cc.p(size.width,100));
        // ball.scale=1;

       var action=cc.moveBy(2,0,-(size.height-ball.height/2));
        action.easing(cc.easeIn(2));
        var back=action.clone().reverse();
        back.easing(cc.easeBounceIn());
        var sequence=cc.sequence(action,back);
      ball.runAction(sequence);
        return true;
    }
    // update:function(){
    //     var size=cc.director.getWinSize();
    //     this.ball.x+=this.deltaX;
    //     if(this.ball.x>=size.width||this.ball.x<=0){
    //         this.deltaX*=-1;
    //     }
    //     this.ball.y=Math.sin(this.frame/20)*50+size.height/2;
    //     this.bg.drawDot(new cc.Point(this.ball.x,this.ball.y),2,cc.color(85,0,0));
    //     this.frame++;
    // }
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

// 另一个场景
var secondScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        var layer = new BallLayer();
        this.addChild(layer);
    }
})