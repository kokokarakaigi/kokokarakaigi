var member_list = [
  {univ:"鹿児島大学", name:"佐々木 彩華", eng:"Ayaka Sasaki", img:"ayaka.jpg"},
  {univ:"志學館大学", name:"石川 葵", eng:"Aoi Ishikawa", img:"aoi.jpg"},
  {univ:"志學館大学", name:"森口 大巨", eng:"Daiki Moriguchi", img:"daiki.jpg"},
  {univ:"鹿児島大学", name:"江田 彩夏", eng:"Ayaka Eta", img:"etaayaka.jpg"},
  {univ:"鹿児島大学", name:"帖佐 安希子", eng:"Akiko Chosa", img:"akiko.jpg"},
  {univ:"鹿児島女子短期大学", name:"池上 未紗", eng:"Misa Ikegami", img:"misa.jpg"},
  {univ:"鹿児島国際大学", name:"黒岩 海斗", eng:"Kaito Kuroiwa", img:"kaito.jpg"},
  {univ:"鹿児島大学", name:"小牧 かなで", eng:"Kanade Komaki", img:"kanade.jpg"},
  {univ:"鹿児島国際大学", name:"溜 祐之介", eng:"Yunosuke Tamari", img:"yunosuke.jpg"},
  {univ:"鹿児島大学", name:"藤本 光陽", eng:"Koyo Fujimoto", img:"koyo.jpg"},
];

var resize_func = function (width) {
  if(width < 575){
    // mobile
    $('#information').addClass('text-center');
    $('#sponsor').addClass('text-center');
    $('.date').removeClass('date_ipad');
    $('.entry_btn').removeClass('entry_btn_ipad');
    $('.date').addClass('date_mobile');
    $('.entry_btn').addClass('entry_btn_mobile');
    $('#project-left').css({'background':'url(./images/box-project.svg) center no-repeat/60%',
                            'background-position-x':'110%',
                            'background-position-y':'90%',
                            'margin-bottom':'20px'});
    $('#field-right').css({'background':'url(./images/box-field.svg) center no-repeat/97%',
                            'background-position-x':'150px',
                            'background-position-y':'80%'});
    $('#field-img').css({'width':'100%'});
    $('h2').css({'font-size':'1.5rem'});
    $('#member-list').empty();
    //add member function
    $.each(member_list,function(i,v){
      $("#member-list").append("\
      <div class='col-6 col-md-3 col-lg-3' style='margin-bottom: 15px;'> \
        <center style='width: 100px; color: var(--main-bg-color);'> \
          <img src='images/members/"+v.img+"' style='width: 90px; border:1px var(--main-bg-color) solid;'> \
          <div style='width: 90px; margin: 5px auto 0; font-size: 10px; border-bottom: 1px solid; padding-bottom: 3px;'> \
            "+v.univ+" \
          </div> \
          <div style='margin: 3px auto 0; font-size: 13px;'> \
            "+v.name+" \
          </div> \
          <div style='font-size: 10px;'> \
            "+v.eng+" \
          </div> \
        </center> \
      </div> \
      <br> \
      ");
    });
  } else if (width < 767) {
    // Tablet
    $('#information').addClass('text-center');
    $('#sponsor').addClass('text-center');
    $('.date').removeClass('date_mobile');
    $('.entry_btn').removeClass('entry_btn_mobile');
    $('.date').addClass('date_ipad');
    $('.entry_btn').addClass('entry_btn_ipad');
    $('#project-left').css({'background':''});
    $('#field-right').css({'background':''});
    $('#field-img').css({'width':'80%'});
    $('h2').css({'font-size':''});
    $('#member-list').empty();
    //add member function
    $.each(member_list,function(i,v){
      $("#member-list").append("\
      <div class='col-4 col-md-3 col-lg-3' style='margin-bottom: 15px;'> \
        <center style='width: 110px; color: var(--main-bg-color);'> \
          <img src='images/members/"+v.img+"' style='width: 110px; border:1px var(--main-bg-color) solid; '> \
          <div style='width: 110px; margin: 5px auto 0; font-size: 15px; border-bottom: 1px solid; padding-bottom: 3px;'> \
            "+v.univ+" \
          </div> \
          <div style='margin: 3px auto 0; font-size: 13px;'> \
            "+v.name+" \
          </div> \
          <div style='font-size: 10px;'> \
            "+v.eng+" \
          </div> \
        </center> \
      </div> \
      <br> \
      ");
    });
  } else {
    $('#information').removeClass('text-center');
    $('#sponsor').removeClass('text-center');
    $('.date').removeClass('date_mobile');
    $('.entry_btn').removeClass('entry_btn_mobile');
    $('.date').removeClass('date_ipad');
    $('.entry_btn').removeClass('entry_btn_ipad');
    $('#project-left').css({'background':''});
    $('#field-right').css({'background':''});
    $('#field-img').css({'width':'100%'});
    $('h2').css({'font-size':''});
    $('#field-block').css({'margin-left':'40%'})
    $('#member-list').empty();
    //add member function
    $.each(member_list,function(i,v){
      $("#member-list").append("\
      <div class='col-xs-15' style='margin: 15px 0px 0 0px'> \
        <center style='width: 150px; color: var(--main-bg-color);'> \
          <img src='images/members/"+v.img+"' style='width: 110px; border:1px var(--main-bg-color) solid; '> \
          <div style='width: 130px; margin: 5px auto 0; font-size: 14px; border-bottom: 1px solid; padding-bottom: 3px;'> \
            "+v.univ+" \
          </div> \
          <div style='margin: 3px auto 0; font-size: 18px;'> \
            "+v.name+" \
          </div> \
          <div style='font-size: 12px;'> \
            "+v.eng+" \
          </div> \
        </center> \
      </div> \
      <br> \
      ");
    });
  }
};

$(function(){
  $('.container-fluid').css('visibility','hidden');

  var dt = new Date();
  var limit1 = new Date("2018/12/31 00:00:00");
  if( dt > limit1){
    $('#limit-img').attr('src','images/limit-2.png');
  }else{
    $('#limit-img').attr('src','images/limit-1.png');
  }

  resize_func($(window).width());
  $(window).resize(function(){
    resize_func($(window).width());
  });

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

  //$(".navbar-nav li a").click(function(event) {
    //$(".navbar-collapse").collapse('hide');
  //});

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