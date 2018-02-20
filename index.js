$(function(){
  $("#top-container").css('visibility','hidden');
  $("#top-container").addClass("fadeInDown");
  $('.container-fluid').css('visibility','hidden');

  $(window).scroll(function(){
    var windowHeight = $(window).height(),
        topWindow = $(window).scrollTop();
    $('.container-fluid').each(function(){
      var targetPosition = $(this).offset().top;
      if(topWindow > targetPosition - windowHeight + 100){
      $(this).addClass("fadeInDown");
      }
    });
  });

  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });

  $('a[href^="#"]').click(function(){
    var offsetY = -10;
    var time = 500;
    var target = $(this.hash);
    if (!target.length) return ;
    var targetY = target.offset().top+offsetY;
    $('html,body').animate({scrollTop: targetY}, time, 'swing');
    window.history.pushState(null, null, this.hash);
    return false;
  });

  let member_list = [
    {name:"山田太郎", eng:"Taro Yamada", img:"avatar.png"},
    {name:"山田太郎", eng:"Taro Yamada", img:"avatar.png"},
    {name:"山田太郎", eng:"Taro Yamada", img:"avatar.png"},
    {name:"山田太郎", eng:"Taro Yamada", img:"avatar.png"},
    {name:"山田太郎", eng:"Taro Yamada", img:"avatar.png"},
    {name:"山田太郎", eng:"Taro Yamada", img:"avatar.png"},
    {name:"山田太郎", eng:"Taro Yamada", img:"avatar.png"},
    {name:"山田太郎", eng:"Taro Yamada", img:"avatar.png"},
    {name:"山田太郎", eng:"Taro Yamada", img:"avatar.png"},
  ];
  $.each(member_list,function(i,v){
    $("#member-list").append("<div class='col-4 col-md-3 col-lg-2' style='margin-bottom: 15px;'> <center> <img src='images/members/"+v.img+"' style='width:100px'> <div>"+v.name+"</div> <div style='font-size:10px;'>"+v.eng+"</div> </center> </div><br>");
  });
  
});