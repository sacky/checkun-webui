$(document).ready(function(){
  $('.tab-list li').on('click',function(){
    var tabIndex = $(this).attr('data-tabIndex');
    $('.tab-area').removeClass('current');
    $('.tab-area[data-tabIndex="'+ tabIndex +'"]').addClass('current');

    // クリックしたタブにクラスを追加
    $('.tab-list li').removeClass('selected');
    $(this).addClass('selected');
  });
});
