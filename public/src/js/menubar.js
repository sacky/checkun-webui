$(function(){
  /* switch tab contents */
  $('.tab-list li').on('click',function(){
    var tabIndex = $(this).attr('data-tabIndex');
    $('.tab-area').removeClass('current');
    $('.tab-area[data-tabIndex="'+ tabIndex +'"]').addClass('current');
    $('.tab-list li').removeClass('selected');
    $(this).addClass('selected');
  });

  /* initialize history content */
  $('#history_tab').click(function(){
      $('#display_payment_detail').parent('div').show();
      $('.history_detail').hide();
  });
});
