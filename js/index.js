$(function () {
  var nua = navigator.userAgent
  var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
  if (isAndroid) {
    $('select.form-control').removeClass('form-control').css('width', '100%')
  }
});
//返回顶部+浏览器大小变化 右侧分类是否悬浮 +关于界面悬浮------------------------------------------------------------------------
$(function(){
  $(window).scroll( function() { 
    var scrollValue=$(window).scrollTop();
    var re_width=$(window).width();
    if(re_width < 500){
        $('div[class=scroll]').fadeOut();
    }else{
      scrollValue > 500 ? $('div[class=scroll]').fadeIn():$('div[class=scroll]').fadeOut();      
    } 
    if(re_width > 1024){
        //scrollValue > 50 ? $('.js_header').addClass('fixed_top'):$('.js_header').removeClass('fixed_top'); 导航栏固定
      var class_height=$('.js_header').height()+$('.js_side_right').height();
      scrollValue > class_height ? $('.js_class_menu').addClass('fixed_top'):$('.js_class_menu').removeClass('fixed_top');
    } 
    // if(scrollValue > 70){
    //    $('.js_about_ul').addClass('fixed_top');
    // } else{
    //    $('.js_about_ul').removeClass('fixed_top');
    // }      
  });    
  $('#scroll').click(function(){
      $("html,body").animate({scrollTop:0},200);  
  });  
  function re_width(){
      var re_width=$(window).width();
      if(re_width < 500){
        $('div[class=scroll]').fadeOut();
      }
  }
  $(window).resize(function(){
      var re_width=$(window).width();
      if(re_width < 500){
        $('div[class=scroll]').fadeOut();
      }
  });  
});
//导航效果，显示英文------------------------------------------------------------------------
$(".js_nav_menu li").on({
    mouseover:function(){
      $(this).find('span').show().animate({top:'50px','font-size':'12px'},500);
    }, 
    mouseleave:function(){
      $(this).find('span').hide().animate({top:'40px','font-size':'10px'},10);
    }
});
//底部显示二维码------------------------------------------------------------------------
$('.js_ewm_small').on({
  mouseover:function(){
      $(this).next('img').show(0);
  },
  mouseleave:function(){
      $(this).next('img').hide(0);
  }
});
// $('.js_ewm_small').on({
//   mouseover:function(){
//       $(this).next('img').slideDown(300);
//   },
//   mouseleave:function(){
//       $(this).next('img').slideUp(0);
//   }
// });
//随笔效果--------------------随笔栏目----------------------------------------------------
$('.js_note_outerleft').on({
  mouseover:function(){
    $(this).find('dl').addClass('bg_add');
    $(this).find('.circle').addClass('bg_add');
  },
  mouseleave:function(){
    $(this).find('dl').removeClass('bg_add');
    $(this).find('.circle').removeClass('bg_add');
  }
});
//关于页面点击切换----------------关于栏目--------------------------------------------------------
$('.js_about_ul li').on('click',function(){
  $(this).addClass('tab').siblings('li').removeClass('tab');
  //$('.js_about_ul').addClass('fixed_top'); 
  var index_li=$(this).index();
  console.log(index_li);
  $(this).parents('.js_about_side_main').find('.js_detail_content').eq(index_li).show().siblings('.js_detail_content').hide();
});
$('.js_about_money li').on({
  mouseover:function(){
    $(this).addClass('tab').siblings('li').removeClass('tab');
    var index_li=$(this).index();
    $(this).parents('.js_about_money').next('.js_about_money_r').find('.ewm').eq(index_li).show().siblings('.ewm').hide();
  }
});
//首页列表加载--瀑布流------------------首页列表------------------------------------------------
$('.js_side_main').get(0) && (~function(){
$(window).scroll(function(){
      var new_dl='<dl class="title_word js_title_word"><dt><a href="#"><img src="images/tp2.png" alt=""></a></dt><dd class="dd_title"><a href="#">十年营销总结：火了是意外，没火太正常</a></dd><dd class="dd_date grey">2016-06-06 <span>阅读：<i>1212</i></span> <span>类别：<i>网页设计</i></dd><dd class="dd_detail">如果同事需要你帮忙，在不耽误自己工作的情况下，能帮就帮。还有不要越级汇报，打小报告。你可以客观反映一些问题，但一定要有证据，切不可以恶意中伤别人。此外，同事之间，偶尔议论一个人挺正常。当听到别人议论你时，也…</dd><div class="clearfix"></div></dl>';
        if(height_scroll()){
            $(new_dl).appendTo($('.js_side_main'));            
        }
});
function height_scroll(){
    var box=$('.js_title_word');
    var last_height=box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
    var document_height=$(document).height();
    var scroll_top=$(window).scrollTop();
    var scroll_if=(last_height<document_height+scroll_top)?true:false;
            //console.log(scroll_if);
    return scroll_if;
}
}());

