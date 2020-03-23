$(document).ready(function(){
    //$("html,body").animate({scrollTop:0},100,"easeOutCubic") // 무조건 맨 위에서 시작하도록 

    menuEffect() // 메뉴 작동 및 효과함수
    visualEffect() // 시작하자마자 비주얼인터렉션 시작
    inforEffect() // 여행지정보 영역 효과함수
    themeEffect() // 가로스크롤 영역 효과함수
    eventEffect() // 이벤트 영역 효과함수 
    snsEffect() // sns 영역 효과함수

})


// 메뉴 
function menuEffect(){
    var $mainMenu=$("#mainmenu_list").children()
    var mauinMenuNum=$mainMenu.size()
    var $subMenu=$(".submenu_list").children()
    var subMenuNum=$subMenu.size()
    var $iconMenu=$("#iconmenu_list").children()
    var iconMenuNum=$iconMenu.size()
    var $menuBtn=$("#menu_btn")
    var $closeBtn=$("#close_btn")
    var $menuWrap=$("#sitemap")
    var windowWidth=screen.width // $(window).innerWidth()로 잡으면 스크롤있던 부분에 여백이 생긴다. screen.width로 해결.

    $menuWrap.css({"width":windowWidth,"height":$(window).innerHeight(),"left":windowWidth})

    $menuBtn.on("click",menuOpen)
    $closeBtn.on("click",menuClose)

    function menuOpen(){
        $("body").css({"overflow":"hidden"})
        $menuBtn.hide()
        $closeBtn.show()
        $menuWrap.css({"left":windowWidth,"width":windowWidth})
        $menuWrap.stop()
        $menuWrap.animate({"left":0},1500,"easeOutQuint")

        for(var i=0; i<mauinMenuNum; i++){
            $mainMenu.eq(i).animate({"top":0,"opacity":1},1500+(i*200),"easeOutCubic")
        }
        for(var i=0; i<subMenuNum; i++){
            $subMenu.eq(i).animate({"top":0,"opacity":1},1600+(i*300),"easeOutCubic")
        }
        for(var i=0; i<iconMenuNum; i++){
            $iconMenu.eq(i).animate({"top":0,"opacity":1},1500+(i*300),"easeOutCubic")
        }

    }

    function menuClose(){
        $("body").css({"overflow":"visible"})
        $menuBtn.show()
        $closeBtn.hide()

        $mainMenu.stop()
        $subMenu.stop()
        $iconMenu.stop()

        $mainMenu.css({"top":50,"opacity":0})
        $subMenu.css({"top":100,"opacity":0})
        $iconMenu.css({"top":150,"opacity":0})
        $menuWrap.stop()
        $menuWrap.animate({"width":0},1000,"easeOutExpo",function(){
            $(this).css({"left":windowWidth,"width":windowWidth})
        })
    }
}




// 비주얼 영역
function visualEffect(){
    $("#visual_solid").animate({"top":0},1000,"easeOutCubic",function(){
        $("#visual_movie").show()
        $(this).animate({"height":0},800,"easeInCubic",function(){
            $("header").animate({"opacity":1,"top":0},1500,"easeOutBack")
            $("#visual_text").animate({"opacity":1,"top":0},1800,"easeOutBack")
            $("#visual_btn").animate({"opacity":1,"top":280},2000,"easeOutBack")
        })
    })

    $("#visual_btn").on("mouseenter",visualBtnOver)
    $("#visual_btn").on("mouseleave",visualBtnOut)

    function visualBtnOver(){
        $(this).children("a").css({"color":"#240c40","font":"bold 14px/60px 'NanumBarunGothicB'"})
        $(this).children("span").stop()
        $(this).children("span").animate({"height":60},400,"easeOutCubic")
    }

    function visualBtnOut(){
        $(this).children("a").css({"color":"white","font":"bold 14px/60px 'NanumBarunGothicB'"})
        $(this).children("span").stop()
        $(this).children("span").animate({"height":0},400,"easeOutCubic")
    }
}


// 여행지정보 영역
function inforEffect(){
    $("#infor_btn").on("mouseenter",inforBtnOver)
    $("#infor_btn").on("mouseleave",inforBtnOut)

    function inforBtnOver(){
        $(this).children("a").css({"color":"white","font":"bold 14px/40px 'NanumBarunGothicB'"})
        $(this).children("span").stop()
        $(this).children("span").animate({"height":45},400,"easeOutCubic")
    }
    
    function inforBtnOut(){
        $(this).children("a").css({"color":"#353535","font":"normal 14px/40px 'NanumBarunGothicB'"})
        $(this).children("span").stop()
        $(this).children("span").animate({"height":0},400,"easeOutCubic")
    }
}




// 가로스크롤 영역 
function themeEffect(){
    $(".theme_btn").on("mouseenter",themeBtnOver)
    $(".theme_btn").on("mouseleave",themeBtnOut)

    function themeBtnOver(){
        $(this).find("img").stop()
        $(this).find("img").animate({"left":110},300,"easeOutCubic")
    }
    
    function themeBtnOut(){
        $(this).find("img").stop()
        $(this).find("img").animate({"left":100},300,"easeOutCubic")
    }
}




// 이벤트 영역 
function eventEffect(){
    $(".event_btn").on("mouseenter",eventOver)
    $(".event_btn").on("mouseleave",eventOut)

    function eventOver(){
        $(this).parent().children(".event_img").children().removeClass("selected")
    }

    function eventOut(){
        $(this).parent().children(".event_img").children().addClass("selected")
    }
}




// sns 영역 
function snsEffect(){
    var $prevBtn=$("#prev_btn").children()
    var $nextBtn=$("#next_btn").children()
    var snsCount=$("#sns_list li").size()
    var snsLiWidth=$("#sns_list li").outerWidth()+150
    var snsBeginPosition=300
    var snsCurrentPosition=$("#sns_list").position().left
    var snsEndPosition=snsBeginPosition-snsLiWidth*(snsCount-2)

    checkArrow()

    function checkArrow(){
        snsCurrentPosition=$("#sns_list").position().left

        if(snsCurrentPosition>=snsBeginPosition){
            $prevBtn.off("click",snsPrevSlide)
            $nextBtn.on("click",snsNextSlide)
            $prevBtn.removeClass("selected") //prev off
            $nextBtn.addClass("selected") //next on
        }else if(snsCurrentPosition<snsBeginPosition && snsCurrentPosition>snsEndPosition){        
            $prevBtn.on("click",snsPrevSlide)
            $nextBtn.on("click",snsNextSlide)
            $prevBtn.addClass("selected") //prev next 둘 다 동작
            $nextBtn.addClass("selected") //prev next 둘 다 동작
        }else{
            $prevBtn.on("click",snsPrevSlide)
            $nextBtn.off("click",snsNextSlide)
            $prevBtn.addClass("selected") //prev on
            $nextBtn.removeClass("selected") //next off
        }
    }

    function snsPrevSlide(){     
        snsCurrentPosition=$("#sns_list").position().left
        $("#sns_list:not(:animated)").animate({"left":snsCurrentPosition+snsLiWidth},500,"easeOutCubic",function(){
            checkArrow()
        })
    }

    function snsNextSlide(){       
        snsCurrentPosition=$("#sns_list").position().left
        $("#sns_list:not(:animated)").animate({"left":snsCurrentPosition-snsLiWidth},500,"easeOutCubic",function(){
            checkArrow()
        })
    }

    var $snsLi=$("#sns_list").children()
    var snsOverLayer=$("<div class='sns_over_layer'><a href='#;'><span>1,308</span></a></div>")

    $snsLi.on("mouseenter",snsOver)
    $snsLi.on("mouseleave",snsOut)

    function snsOver(){
        snsOverLayer.appendTo($(this))
        
        $(this).children(".sns_over_layer").stop()
        $(this).children(".sns_over_layer").animate({"opacity":1},600,"easeOutCubic")
    }

    function snsOut(){
        $(this).children(".sns_over_layer").stop()
        $(this).children(".sns_over_layer").animate({"opacity":0},600,"easeOutCubic")
    }


}
