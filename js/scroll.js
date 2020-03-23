$(document).ready(function(){
    $("body").css({"height":15900}) // 높이값은 가로스크롤 되는 스크롤 값도 포함해서 지정 
    $(window).on("scroll",scrollAni)  
})

function scrollAni(){
    var scrollTop=$(document).scrollTop()

    // 스크롤 동작 제어 시작
    // 상단 영역 : fixed 상태에서 스크롤되는 만큼 위로 올라가도록 top 좌표를 (초기좌표)-scrollTop
    $("#top_wrap").css({"top":0-scrollTop}) 
    $("#horizontal_wrap").css({"top":2890-scrollTop}) 
    $("#bottom_wrap").css({"top":4010-scrollTop}) 

    // 가로스크롤 영역
    if(scrollTop>=2890 && scrollTop<10890){
        $("#top_wrap").css({"top":-2890}) // 상단영역은 위에 고정 -2890=지금까지 스크롤 된 높이
        $("#bottom_wrap").css({"top":1120}) // 하단영역은 아래 고정. 1120=가운데영역 높이+마진값 170
       
        $("#horizontal_wrap").css({"top":0, "height":$(window).innerHeight()}) // 중간영역은 현재 좌표에서 top:0
        $("#horizontal_wrap").css({"left":-(scrollTop-2890)*0.8}) // left좌표를 scrollTop-2890(지금까지스크롤누적값)만큼 -하면 왼쪽으로 이동 


        $("#night_bg").stop()
        $("#night_bg").animate({"top":-(scrollTop-2890)*0.3},1900,"easeOutExpo")
        $("#night_img02").stop()
        $("#night_img02").animate({"left":1070+(scrollTop-2890)*0.02},2200,"easeOutExpo")

        $("#gourmet_bg").stop()
        $("#gourmet_bg").animate({"top":-(scrollTop-2890)*0.2},1600,"easeOutExpo")
        $("#gourmet_img02").stop()
        $("#gourmet_img02").animate({"left":1200-(scrollTop-2890)*0.02},2500,"easeOutExpo")

        $("#city_bg").stop()
        $("#city_bg").animate({"top":-(scrollTop-2890)*0.3},2200,"easeOutExpo")
        $("#city_img02").stop()
        $("#city_img02").animate({"left":950+(scrollTop-2890)*0.03},2500,"easeOutExpo")

        $("#activity_bg").stop()
        $("#activity_bg").animate({"top":-(scrollTop-2890)*0.2},2000,"easeOutExpo")
        $("#activity_img02").stop()
        $("#activity_img02").animate({"left":1250-(scrollTop-2890)*0.02},2200,"easeOutExpo")

        $("#theme_bg").stop()
        $("#theme_bg").animate({"top":-(scrollTop-2890)*0.4},2400,"easeOutExpo")

    // 하단 영역 
    }else if(scrollTop>=10890){
        $("#top_wrap").css({"top":-2890-(scrollTop-10890)})
        $("#horizontal_wrap").css({"top":0-(scrollTop-10890)})
        $("#bottom_wrap").css({"top":1120-(scrollTop-10890)})
    }
    // 스크롤 동작 제어 끝
    

    // infor 영역 인터렉션 시작 
    if(scrollTop>700){ // infor영역 ani
        $("#infor_back_solid:not(:animated)").animate({"left":0},600,"easeOutCubic",function(){
            $("#infor_back_img").show()  
            $(this).stop()
            $(this).animate({"width":0},400,"easeInCubic")
            $("#infor_back_img img").addClass("selected")
        })

        $("#infor_forward_solid:not(:animated)").animate({"right":0},800,"easeOutCubic",function(){
            $("#infor_forward_img").show()
            $(this).stop()
            $(this).animate({"width":0},500,"easeInCubic")
            $("#infor_forward_img img").addClass("selected")
        })

        $("#infor_title").animate({"top":0,"opacity":1},1400,"easeOutBack")
        $("#infor_sub_title").animate({"top":25,"opacity":1},1500,"easeOutBack")
        $("#infor_text").animate({"top":90,"opacity":1},1900,"easeOutBack")
        $("#infor_btn").animate({"top":360,"opacity":1},2100,"easeOutBack")
    }
    // infor 영역 인터렉션 끝


    // report 영역 인터렉션 시작 
    if(scrollTop>1500){ 
        $("#report_solid:not(:animated)").animate({"top":0},700,"easeOutCubic",function(){
            $("#report_bg").show()
            $(this).stop()
            $(this).animate({"height":0},400,"easeInCubic")
            $("#report_bg").addClass("selected")
            $("#report_list li").animate({"opacity":1},3000,"easeOutCubic")
        })
    }
    // report 영역 인터렉션 끝


    // 가로스크롤 영역 인터렉션 시작 
    if(scrollTop>2600){
        $("#night_img01 img").addClass("selected")
        $("#night_img02 img").addClass("selected")
    }

    if(scrollTop>3000){
        $("#night_box").addClass("circle_motion")
        $("#night_text").animate({"left":1370,"opacity":1},1200,"easeOutQuint")
        $("#night_btn").animate({"left":1370,"opacity":1},1600,"easeOutQuint")
        $("#night_deco").addClass("deco_motion")
    }

    if(scrollTop>4300){
        $("#gourmet_img01 img").addClass("selected")
        $("#gourmet_img02 img").addClass("selected")
    }

    if(scrollTop>5100){
        $("#gourmet_box").addClass("circle_motion")
        $("#gourmet_text").animate({"left":1620,"opacity":1},1200,"easeOutQuint")
        $("#gourmet_btn").animate({"left":1620,"opacity":1},1600,"easeOutQuint")
        $("#gourmet_deco").addClass("deco_motion")
    }

    if(scrollTop>6500){
        $("#city_img01 img").addClass("selected")
        $("#city_img02 img").addClass("selected")
    }

    if(scrollTop>8000){
        $("#city_box").addClass("circle_motion")
        $("#city_text").animate({"left":1610,"opacity":1},1200,"easeOutQuint")
        $("#city_btn").animate({"left":1610,"opacity":1},1600,"easeOutQuint")
        $("#city_deco").addClass("deco_motion")
    }

    if(scrollTop>8800){
        $("#activity_img01 img").addClass("selected")
        $("#activity_img02 img").addClass("selected")
    }

    if(scrollTop>10000){
        $("#activity_box").addClass("circle_motion")
        $("#activity_text").animate({"left":1600,"opacity":1},1200,"easeOutQuint")
        $("#activity_btn").animate({"left":1600,"opacity":1},1600,"easeOutQuint")
        $("#activity_deco").addClass("deco_motion")
    }
    // 가로스크롤 영역 인터렉션 끝 


    // bg1영역 인터렉션 시작 
    if(scrollTop>11500){
        $("#gardens_solid:not(:animated)").animate({"top":0},700,"easeOutCubic",function(){
            $("#gardens_bg").show()
            $(this).stop()
            $(this).animate({"height":0},400,"easeInCubic")
            $("#gardens_bg").addClass("selected")
        })
    }
    // bg1영역 인터렉션 끝 


    // 이벤트 영역 인터렉션 시작 
    if(scrollTop>12400){
        $("#event").animate({"top":0,"opacity":1},1200,"easeOutBack")
        for(var i=0; i<2; i++){
            $("#event_list li").eq(i).animate({"top":0,"opacity":1},1300+(i*300),"easeOutBack")
        }
        $(".event_img img").addClass("selected")
        $(".event_title").animate({"top":0,"opacity":1},2000,"easeOutBack")
        $(".event_text").animate({"top":0,"opacity":1},2200,"easeOutBack")
        $(".event_btn").animate({"top":0,"opacity":1},2500,"easeOutBack")
    }
    // 이벤트 영역 인터렉션 끝 


    // sns 영역 인터렉션 시작 
    if(scrollTop>13500){
        $("#sns_title").animate({"left":0,"opacity":1},1700,"easeOutExpo")
        $("#sns_id").animate({"left":0,"opacity":1},2000,"easeOutExpo")
        for(var i=0; i<8; i++){
            $("#sns_list li").eq(i).animate({"left":0,"opacity":1},2300+(i*500),"easeOutExpo")
        }
    }
    // sns 영역 인터렉션 끝 


    // bg2영역 인터렉션 시작 
    if(scrollTop>14000){
        $("#marina_solid:not(:animated)").animate({"top":0},700,"easeOutCubic",function(){
            $("#marina_bg").show()
            $(this).stop()
            $(this).animate({"height":0},400,"easeInCubic")
            $("#marina_bg").addClass("selected")
        })
    }
    // bg2영역 인터렉션 끝


    // 하단영역 인터렉션 시작 
    if(scrollTop>14400){
        $("#footer_wrap").css({"position":"fixed"})
    }else{
        $("#footer_wrap").css({"position":"absolute"})
    }

}
