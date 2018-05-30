/*
* @module:  集中整租
* @time:  20180508
* @name:  liangbin
* */
//切换房态图
$('.subTopBox').on('click','.JS_switch',function(){
    var stateTxt = $(this).data('state');
    if(parseInt(stateTxt)  == 1){
        $(this).data('state','0');
        $(this).text('切换至列表');
        $('#roomList').addClass('hide');
        $('#roomState').removeClass('hide');
    }else{
        $(this).data('state','1');
        $(this).text('切换至房态图');
        $('#roomList').removeClass('hide');
        $('#roomState').addClass('hide');
    }
});
//登记房源-项目基本信息录入
$('.subTopBox').on('click','.masterInfo',function(){
    var index = layer.open({
        type: 2,
        title: '项目基本信息录入',
        skin: 'popup-title-bg', //样式类名
        closeBtn : 1,
        maxmin: true,
        resize: false,
        area: ['740px','550px'],
        //btn:['关闭'],
        btnAlign: 'c',
        content: 'qft_addroomInfo.html'
    });
    layer.iframeAuto(index)
});
//登记租客-项目基本信息录入
$('.subTopBox').on('click','.roomInfo',function(){
    layer.open({
        type: 2,
        title: '项目基本信息录入',
        skin: 'popup-title-bg', //样式类名
        closeBtn : 1,
        area: ['740px','560px'],
        //btn:['关闭'],
        btnAlign: 'c',
        content: ''
    });
});
//查看房间信息
$('.wareList').on('dblclick','tbody tr',function(){
    layer.open({
        type: 2,
        title: '百康年世纪门A幢3单元4-12',
        skin: 'popup-title-bg', //样式类名
        closeBtn : 1,
        area: ['900px','500px'],
        resize: false,
        //btn:['关闭'],
        btnAlign: 'c',
        content: 'details/roomInfo.html'
    });
});