import $ from '../plugs/jquery';
import '../plugs/swiper-3.4.0.min.js';

/**
 * 一般轮播效果
 */

export function swiper() {
    new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        autoplay : 2000,
        loop:true,
        paginationClickable: true
    });
}

/**
 * 我的订单页面滑动事件
 */

export function tj_all_swiper() {
    var le = $('.tj_all_swiperContainer').length;
    if(le>0){//跳转到第几页
        var initialSlide = 0;
        var src = window.location.href.split('PTopage=')[1];
        if(src!=undefined){
            initialSlide = src
        }
        new Swiper('.tj_all_swiperContainer', {
            pagination: '.tj_all_pagination',
            paginationClickable: true,
            paginationBulletRender: function (swiper, index, className) {
                console.log(index);
                var indexName = '';
                if(index==0){
                    indexName = '进行中'
                }else if(index==1){
                    indexName = '待评价'
                }else if(index==2){
                    indexName = '全部订单'
                }
                return '<li class="' + className + '">' + indexName + '</li>';
            },initialSlide :initialSlide
        });
    }
}

/**
 * 账户类型选择
 */

export function choType() {
    //单选
    $('.chooseCodeLei li,.popupTimeCho .le li,.OneChoose li').click(function(){
        var _this = $(this);
        var _has = $(this).hasClass('active');
        if(!_has){
            _this.addClass('active').siblings().removeClass('active');
        }
    });
    //多选
    $('.chooseBstype2 li,.AllChoose li').click(function(){
        var _this = $(this);
        var _has = $(this).hasClass('active');
        if(!_has){
            _this.addClass('active');
        }else{
            _this.removeClass('active');
        }
    });
    //星星选择
    $('.StarColClick li').click(function(){
        var _this = $(this);
        var _has = $(this).hasClass('active');
        if(!_has){
            _this.addClass('active').prevAll().addClass('active');
        }else{
            _this.addClass('active').nextAll().removeClass('active');
        }
    });
}