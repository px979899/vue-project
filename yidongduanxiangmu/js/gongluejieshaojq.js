
$(".erjione-right ul li:nth-of-type(2)").click(function(){
	$(this).siblings().css({"color":"black","background":"#F5F5F5"});
	$(this).css({"color":"white","background":"orange"});
})

$().ready(function(){
$(".ri").css({"color":"#F2C777","border-bottom":"1px solid #F2C777"});
$(".ri").click(function(){
	$(".zhou").css({"color":"#929292","border-bottom":"1px solid white"});
	$(this).css({"color":"#F2C777","border-bottom":"1px solid #F2C777"});
   $(".yue").css({"color":"#929292","border-bottom":"1px solid white"});
})
$(".zhou").click(function(){
	$(".ri").css({"color":"#929292","border-bottom":"1px solid white"});
	$(this).css({"color":"#F2C777","border-bottom":"1px solid #F2C777"});
   $(".yue").css({"color":"#929292","border-bottom":"1px solid white"});
})
$(".yue").click(function(){
	$(".ri").css({"color":"#929292","border-bottom":"1px solid white"});
	$(this).css({"color":"#F2C777","border-bottom":"1px solid #F2C777"});
   $(".zhou").css({"color":"#929292","border-bottom":"1px solid white"});
})

//$(".erjione-right ul li:eq(1)").hover(function(){
//	$(this).siblings().css({"color":"black","background":"#F5F5F5"});
//	$(this).css({"color":"white","background":"orange"});
//})
//$(".erjione-right ul li:eq(2)").hover(function(){
//	$(this).siblings().css({"color":"black","background":"#F5F5F5"});
//	$(this).css({"color":"white","background":"orange"});
//})
//$(".erjione-right ul li:eq(3)").click(function(){
//	$(this).siblings().css({"color":"black","background":"#F5F5F5"});
//	$(this).css({"color":"white","background":"orange"});
//})
//$(".erjione-right ul li:eq(4)").click(function(){
//	$(this).siblings().css({"color":"black","background":"#F5F5F5"});
//	$(this).css({"color":"white","background":"orange"});
//})
//$(".erjione-right ul li:eq(5)").click(function(){
//	$(this).siblings().css({"color":"black","background":"#F5F5F5"});
//	$(this).css({"color":"white","background":"orange"});
//})
//$(".erjione-right ul li:eq(6)").click(function(){
//	$(this).siblings().css({"color":"black","background":"#F5F5F5"});
//	$(this).css({"color":"white","background":"orange"});
//})
})