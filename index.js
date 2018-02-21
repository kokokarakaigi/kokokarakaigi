$(function(){
  $("#top-container").css('visibility','hidden');
  $("#top-container").addClass("fadeInDown");
  $('.container-fluid').css('visibility','hidden');

  $(".img-modal").click(function(){
    var src = $(this).attr("src");
    $("#image_myModal").html("\
      <div class='modal-dialog modal-dialog-centered'>\
        <div class='modal-body'>\
          <img style='text-align:center; width:100%;' src='"+src+"'>\
        </div>\
      </div>\
    ");
    $("#image_myModal").modal('show');
  });
  
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
    var offsetY = -65;
    var time = 500;
    var target = $(this.hash);
    if (!target.length) return ;
    var targetY = target.offset().top+offsetY;
    $('html,body').animate({scrollTop: targetY}, time, 'swing');
    window.history.pushState(null, null, this.hash);
    return false;
  });

  //add member function
  let member_list = [
    {name:"たかはし くうが", eng:"Kuga Takahashi", img:"avatar.png"},
    {name:"井尻 敬天",      eng:"Yoshitaka Iziri", img:"avatar.png"},
    {name:"岡元 里桜",      eng:"Taro Yamada", img:"avatar.png"},
    {name:"森下 彩絵",      eng:"Sae Morishita", img:"avatar.png"},
    {name:"寺田 麗々蘭",    eng:"Ririka Terada", img:"avatar.png"},
    {name:"長谷川 天音",    eng:"Amane Hasegawa", img:"avatar.png"},
    {name:"松吉 みさと",    eng:"Misato Matsuyoshi", img:"avatar.png"},
    {name:"高橋 愛梨",      eng:"Airi Takahashi", img:"avatar.png"},
    {name:"松尾 智博",      eng:"Tomohiro Matsuo", img:"avatar.png"},
    {name:"盛田 彩乃",      eng:"Ayano Morita", img:"avatar.png"},
    {name:"高野 愛佳",      eng:"Aika Takano", img:"avatar.png"},
    {name:"草留 早紀子",    eng:"Sakiko Kusadome", img:"avatar.png"},
  ];
  $.each(member_list,function(i,v){
    $("#member-list").append("\
    <div class='col-4 col-md-3 col-lg-2' style='margin-bottom: 15px;'> \
    <center style='width:100px;'> <img src='images/members/"+v.img+"' style='width:80px; border:1px var(--main-bg-color) solid;'> \
    <div style='font-size:13px;'>"+v.name+"</div> <div style='font-size:9px'>"+v.eng+"</div> \
    </center> </div><br>");
  });
  
  //add sponcer function
  let sponcer_list = [
    {name:"Google", img:"https://tctechcrunch2011.files.wordpress.com/2015/09/googlelogo_color_300x104dp.png?w=600&h=208"},
    {name:"Micros", img:"http://www.blogcdn.com/www.engadget.com/media/2012/08/microsoft-new-logo-2012.jpg"},
    {name:"Google", img:"https://tctechcrunch2011.files.wordpress.com/2015/09/googlelogo_color_300x104dp.png?w=600&h=208"},
    {name:"Google", img:"https://tctechcrunch2011.files.wordpress.com/2015/09/googlelogo_color_300x104dp.png?w=600&h=208"},
    {name:"Micros", img:"http://www.blogcdn.com/www.engadget.com/media/2012/08/microsoft-new-logo-2012.jpg"},
    {name:"Micros", img:"http://www.blogcdn.com/www.engadget.com/media/2012/08/microsoft-new-logo-2012.jpg"},
  ];
  $.each(sponcer_list,function(i,v){
    $("#sponcer-list").append("\
    <div class='col-4 col-md-3 col-lg-2' style='margin-bottom: 15px;'> \
    <center style='border:1px var(--main-bg-color) solid; width:80px; height:80px; padding:2px 2px 2px 2px ;display: table-cell; vertical-align: middle;'>\
    <img src='"+v.img+"' style='width:90%;'> \
    </center> </div><br>");
  });
});