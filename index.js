$(function(){
  // $("#top-container").css('visibility','hidden');
  // $("#top-container").addClass("fadeInDown");
  $('.container-fluid').css('visibility','hidden');

  var dt = new Date();
  var limit1 = new Date("2018/03/24 00:00:00");
  if( dt > limit1){
    $('#limit-img').attr('src','images/limit-2.png');
  }else{
    $('#limit-img').attr('src','images/limit-1.png');
  }


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
    {name:"たかはし くうが", eng:"Kuga Takahashi", img:"kuga.jpg"},
    {name:"井尻 敬天",      eng:"Yoshitaka Iziri", img:"yoshi.jpg"},
    {name:"岡元 里桜",      eng:"Rio Okamoto", img:"rio.jpg"},
    {name:"森下 彩絵",      eng:"Sae Morishita", img:"sae.jpg"},
    {name:"寺田 麗々蘭",    eng:"Ririka Terada", img:"riri.jpg"},
    {name:"長谷川 天音",    eng:"Amane Hasegawa", img:"ama.jpg"},
    {name:"松吉 みさと",    eng:"Misato Matsuyoshi", img:"chos.jpg"},
    {name:"髙橋 愛梨",      eng:"Airi Takahashi", img:"airi.jpg"},
    {name:"松尾 智博",      eng:"Tomohiro Matsuo", img:"matsuo.jpg"},
    {name:"盛田 彩乃",      eng:"Ayano Morita", img:"ayano.jpg"},
    {name:"高野 愛佳",      eng:"Aika Takano", img:"kano.jpg"},
    {name:"草留 早紀子",    eng:"Sakiko Kusadome", img:"sakko.jpg"},
  ];
  $.each(member_list,function(i,v){
    $("#member-list").append("\
    <div class='col-4 col-md-3 col-lg-2' style='margin-bottom: 15px;'> \
    <center style='width:100px;'> <img src='images/members/"+v.img+"' style='width:80px; border:1px var(--main-bg-color) solid;'> \
    <div style='font-size:13px;'>"+v.name+"</div> <div style='font-size:9px'>"+v.eng+"</div> \
    </center> </div><br>");
  });
  
  //add sponcer function
  let big_sponcer_list = [
    {name:"ei", img:"images/company/ei.png"},
    {name:"ishimoto", img:"images/company/ishimoto.png"},
  ];
  let sponcer_list = [
    {name:"geo", img:"images/company/geo.png"},
    {name:"tabuchi", img:"images/company/tabuchi.png"},
    {name:"total", img:"images/company/total.png"},
  ];
  $.each(big_sponcer_list,function(i,v){
    $("#big-sponcer-list").append("\
    <div class='col-12 col-md-6' style='margin-bottom: 15px;'> \
      <center class='big-sponcer'>\
        <img src='"+v.img+"' class='sponcer-image'> \
      </center> \
    </div><br>");
  });
  $.each(sponcer_list,function(i,v){
    $("#sponcer-list").append("\
    <div class='col-4 col-md-2 col-lg-2' style='margin-bottom: 15px;'> \
      <center class='sponcer'>\
        <img src='"+v.img+"' class='sponcer-image'> \
      </center> \
    </div><br>");
  });
});