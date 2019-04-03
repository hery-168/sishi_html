/*下拉框  begin*/

$(document).ready(function(){

	// 下拉框//////////////////////////////
	$(".clue_select").click(function(e){
		/*$(this).parent('.pageinput_div').addClass('current');*/
		e.stopPropagation();
		$('.user-up').hide();
		$(this).parent('.clue_user').children(".user-up").addClass("current");
		$(this).parents('.clue_user').children(".user-up").show();
	})
	
	$(document).click(function(){
		$(".user-up").css('display','none');			   
	});
	
	$('.user-up .user-up-ul li').click(function(){
		$(this).parents('.user-up').hide();	
		var myhtml=$(this).html();
		$(this).parents('.clue_user').find('.clue_select').val(myhtml);
	});

	// 下拉框//////////////////////////////

	$('.backs').click(function(){
		$('.enter_source').show();
	});
	$('.icon_ul li').click(function(){
		$('.enter_line').show();
	})
	$('.del,.login_input2').click(function(){
		$(this).parents('.enter').hide();
	});
	// $('.login_input1').click(function(){
	// 	window.location.href="login.html";
	// })

})

var initDate=function(){
  var $StartDate = $(".start_time");
  var $endDate=$('.end_time')
  var minStartDate = new Date(new Date() - 24 * 60 * 60 * 1000);
  var beginTime = null;
    $StartDate.datepicker({
      language: "zh-CN",
      todayHighlight: true,
      format: 'yyyy-mm',
      autoclose: true,
      startView: 'months',
      maxViewMode:'years',
      minViewMode:'months',
      endDate:new Date(),
      title: '请选择开始时间'
    });

    $endDate.datepicker({
      language: "zh-CN",
      todayHighlight: true,
      format: 'yyyy-mm',
      autoclose: true,
      startView: 'months',
      maxViewMode:'years',
      minViewMode:'months',
      endDate:new Date(),
      title: '请选择开始时间'
    });
}







