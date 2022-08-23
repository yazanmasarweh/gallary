//show and hide nav in sm screen
$("#toggle-nav").click(function(){
  $("#menu").slideToggle();
});
// fixed navbar when scrolling
let heightScreen= window.innerHeight;  
$(document).scroll(function () { 
   let scrolly = window.scrollY;
   if(scrolly > heightScreen){
      $("nav").addClass("fixed top-0 w-full");
   }else{
      $("nav").removeClass("fixed top-0 w-full");
   }
});   
//lanuch plagin bxSlider
$(document).ready(function(){
  $('.slider-phrase').bxSlider({
    "auto":true,
    "pager":false
  });
});
// lanuch plagin Fancybox
Fancybox.bind('[data-fancybox="gallery"]', {
  infinite: false
});
Fancybox.bind('[data-fancybox="main-gallery"]', {
  infinite: false
});
// lanuch plagin Plyr 
const player = new Plyr('#player');
//lanuch plagin SmoothScroll
var scroll = new SmoothScroll('a[href*="#"]');
//show pop draw
$(".item-draw").click(function(){
  $("body").css({"overflow":"hidden"});
  $("#pop-drow").fadeIn();
});
// hide pop draw
$("#pop-drow , .close").click(function (e) { 
  $("body").css({"overflow":"auto"});
  e.stopPropagation();
   $("#pop-drow").fadeOut()
});
//content pop draw
$(".main-drow-item").click(function (e) { 
  e.stopPropagation();
});
//
$(".dir-body").click(function(){
  if($("html").attr("dir") == "ltr"){
    $("html").attr("dir", "rtl");
    $(".dir-body span").text("AR");
  }else{
    $("html").attr("dir", "ltr");
    $(".dir-body span").text("ER");
  }
});
//
$("#switch-dark").click(function(){
  $("body").toggleClass("dark");

  if($("body").hasClass("dark")){
    $("#switch-dark span.suny").fadeOut();
    $("#switch-dark span.moony").fadeIn();
  }else{
    $("#switch-dark span.suny").fadeIn();
    $("#switch-dark span.moony").fadeOut();
  }
});
