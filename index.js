$(function(){
  // $("#top-container").css('visibility','hidden');
  // $("#top-container").addClass("fadeInDown");
  $('.container-fluid').css('visibility','hidden');

  var dt = new Date();
  var limit1 = new Date("2018/12/31 00:00:00");
  if( dt > limit1){
    $('#limit-img').attr('src','images/limit-2.png');
  }else{
    $('#limit-img').attr('src','images/limit-1.png');
  }

  if($(window).width() < 575){
    $('.date_resize').addClass('date_resize_766');
    $('.entry_btn_resize').addClass('entry_btn_resize_766');
  }

  if($(window).width() < 767){
    $('.date_resize').addClass('date_resize_767');
    $('.entry_btn_resize').addClass('entry_btn_resize_767');
    $('#information').addClass('text-center');
    $('#sponser').addClass('text-center');
    $('#aboutus_top').append("\
      <center>\
      <img src='images/aboutus.jpg' class='media-object' style='width:100%; margin-bottom:20px;'>\
      </center>\
    ");
    $('#aboutus_bottom').append("\
      <p class='content-text'>\
        2018.08.27 プロジェクト始動。<br>\
        <br>\
        <span style='font-size: 1.3em; margin: 15px 0 15px -7px;'>\
          【とっておきな私と、なりたい私に出会う。】\
        </span>\
        <br>\
        <br>\
        をコンセプトに添え、<br>\
        鹿児島に身を置く学生12名で構成。<br>\
        あなたの想いの側にいたい。<br>\
        手と手をとり合い歩んでく。<br>\
        あなたが明日にときめくように。\
      </p>\
    ");
  } else {
    $('#information').removeClass('text-center');
    $('#sponser').removeClass('text-center');
    $('#aboutus_top').append("\
      <p class='content-text' >\
        2018.08.27 プロジェクト始動。<br>\
        <br>\
        <span style='font-size: 1.3em; margin: 15px 0 15px -7px;'>\
          【とっておきな私と、なりたい私に出会う。】\
        </span>\
        <br>\
        <br>\
        をコンセプトに添え、<br>\
        鹿児島に身を置く学生12名で構成。<br>\
        あなたの想いの側にいたい。<br>\
        手と手をとり合い歩んでく。<br>\
        あなたが明日にときめくように。\
      </p>\
    ");
    $('#aboutus_bottom').append("\
      <center>\
        <img src='images/aboutus.jpg' style='width:100%; margin-bottom:20px;'>\
      </center>\
    ");
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
        if ( $(this).hasClass("not_fadeInDown") ){
        } else {
          $(this).addClass("fadeInDown");
        }
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
    {univ:"鹿児島大学", name:"後藤 宏太", eng:"Kota Goto", img:"test.jpg"},
    {univ:"志學館大学", name:"石川 葵", eng:"Aoi Ishikawa", img:"test.jpg"},
    {univ:"鹿児島国際大学", name:"増留 汐里", eng:"Shiori Masudome", img:"test.jpg"},
    {univ:"志學館大学", name:"森口 大巨", eng:"Daiki Moriguchi", img:"test.jpg"},
    {univ:"鹿児島大学", name:"佐々木 彩華", eng:"Ayaka Sasaki", img:"test.jpg"},
    {univ:"志學館大学", name:"岡元 里桜", eng:"Rio Okamoto", img:"test.jpg"},
    {univ:"鹿児島県立短期大学", name:"寺田 桜心", eng:"Omi Terada", img:"test.jpg"},
    {univ:"鹿児島大学", name:"株本 雅樹", eng:"Masaki Kabumoto", img:"test.jpg"},
    {univ:"鹿児島国際大学", name:"高野 愛佳", eng:"Aika Takano", img:"test.jpg"},
    {univ:"鹿児島純心女子大学", name:"高橋 愛梨", eng:"Airi Takahashi", img:"test.jpg"},
    {univ:"北九州私立大学", name:"高橋 空雅", eng:"Kuga Takahashi", img:"test.jpg"},
    {univ:"鹿児島大学", name:"寺田 麗々蘭", eng:"Ririka Terada", img:"test.jpg"},
  ];
  $.each(member_list,function(i,v){
    $("#member-list").append("\
    <div class='col-4 col-md-3 col-lg-3' style='margin-bottom: 15px;'> \
    <center style='width:100px;'> <img src='images/members/"+v.img+"' style='width: 90px; border:1px var(--main-bg-color) solid; border-radius: 50%;'> \
    <div style='width: 90px;margin: 10px auto 0;font-size:9px; color: var(--main-bg-color);border-bottom: 1px var(--main-bg-color) solid;padding-bottom: 3px;'><span>"+v.univ+"</div> \
    <div style='margin: 3px auto 0;font-size:15px; color: var(--main-bg-color);'>"+v.name+"</div> <div style='font-size:9px; color: var(--main-bg-color);'>"+v.eng+"</div> \
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
    {name:"okuchi", img:"images/company/okuchi.jpg"},
    {name:"nomura", img:"images/company/nomura.png"},
    {name:"renove", img:"images/company/renove.png"},
    {name:"okuchi", img:"images/company/GKAD.png"},
    {name:"forever", img:"images/company/forever.png"},
    {name:"kubo",    img:"images/company/kubo.JPG"},
    {name:"soushin", img:"images/company/soushin.JPG"},
    {name:"sumains", img:"images/company/sumais.JPG"},
  ];
  $.each(big_sponcer_list,function(i,v){
    $("#big-sponcer-list").append("\
    <div class='col-12 col-md-6' style='margin-bottom: 15px;'> \
      <center class='big-sponcer'>\
        <img src='"+v.img+"' class='sponcer-image'> \
      </center> <br>\
    </div><br>");
  });
  $.each(sponcer_list,function(i,v){
    $("#sponcer-list").append("\
    <div class='col-6 col-md-2 col-lg-2' style='margin-bottom: 15px;'> \
      <center class='sponcer'>\
        <img src='"+v.img+"' class='sponcer-image'> \
      </center> \
    </div><br>");
  });
});