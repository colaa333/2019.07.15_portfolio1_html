//라이트 박스 
$(".lightgallery").lightGallery({
    thembnail: true,
    autoplay: true,
    pause:3000,
    progressBar: true, 
}); 


//레이어 팝업
$(".layer").click(function(e){
    e.preventDefault();
    // $("#layer").css("display","block");
    // $("#layer").show();
    $("#layer").slideDown(250);
});
$("#layer .close").click(function(e){
    e.preventDefault();
    // $("#layer").css("display","none");
    $("#layer").slideUp(250);
});

//원도우 팝업
$(".window").click(function(e){
    e.preventDefault();
    //window.open("파일명","팝업이름","옵션설정");
    //옵션: left, top , width ,height, atatus, toolbar, location, menubar, scroollbars, fullscreen    
    window.open("sample_popup.html","popup01","width=800, height=565, left=50, top-50, scrollbars=0, toolbar=0, menubar=0 ");
});
 
//탭메뉴
var $tab_list = $(".tab_menu");
$tab_list.find("ul ul").hide();
$tab_list.find("li.active > ul").show();  

function tabMenu(e){
    e.preventDefault();
    var $this = $(this);
    $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide(); 
}
$tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);



// 배너                         html마크업 세팅    --> css 연동  -->  제이쿼리연동  -->제이쿼리 호출
$('.ban').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
});

//갤러리
$(".gallery_img").slick({
    dots: true,
    fade: true,
    pauseOnHover: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 1
});
$(".play").click(function(){
    $(".gallery_img").slick("slickPlay");
});
$(".pause").click(function(){
    $(".gallery_img").slick("slickPause");
});
$(".prev").click(function(){
    $(".gallery_img").slick("slickPrev");
});
$(".next").click(function(){
    $(".gallery_img").slick("slickNext");
});


//전체 메뉴      (버튼을 클릭하면 메뉴를 보이게 하세요.)
$(".tit .btn").click(function(e){
    e.preventDefault();                             // 클릭했을때 # 의 이동경로로(0,0) 이동하는데 그걸 차단시켜줌
                                                    // $("#cont_nav").css("display","block");            //방법1    #cont_nav {disply:block;}  랑 같은거임
                                                    // $("#cont_nav").show();                            //방법2    show메서드는 display를 블럭으로 바꿔주는 함수임
                                                    //$("#cont_nav").fadeIn();                           //방법3    서서히나타나게 하는 메서드
                                                    //$("#cont_nav").slideDown();                        //방법4    서서히나타남  단점:한번밖에 못씀
                                                    // $("#cont_nav").toggle();                          //방법5    show();랑 반대인 hide(); 합쳐진거임
                                                    // $("#cont_nav").fadeToggle();                      //방법6    toggle()에 애니메이션효과 추가한거임 
    $("#cont_nav").slideToggle(300);   
                                                    // $(".tit .btn").addClass("on");                    // class 이름에 on을 추가 하는기능
    $(this).toggleClass("on");                           //class 이름에 on 추가했다가 한번더누르면 리부브까지 되는 함수   , this는 자기자신을 가르키는태그 
});

