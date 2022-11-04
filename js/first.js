$(document).ready(function () {
    let x = $("#info").offset().top;
    $(window).scroll(function () {
        let windScroll = $(window).scrollTop();
        if (windScroll > x - 100) {
            $("nav").addClass("tt")
            $("#buttonToTop").fadeIn(500)
        }
        else {
            $("nav").removeClass("tt")
            $("#buttonToTop").fadeOut(500)
        }
    })

    var typed = new Typed(".typing", {

        
        strings:[ "designer" , "developer"],
        typeSpeed:100,
        backSpeed:70,
        loop:true

    })

    $("#buttonToTop").click(function () {
        $("body,html").scrollTop(0)
    })


    let col= $(".option-color")
    col.eq(0).css("backgroundColor", "grey")
    col.eq(1).css("backgroundColor", "cyan")
    col.eq(2).css("backgroundColor", "lightgreen")
    col.eq(3).css("backgroundColor", "crimson")
    col.eq(4).css("backgroundColor", "tomato")
    col.eq(5).css("backgroundColor", "teal")

    col.click(function(){

        let optionColor= $(this).css("backgroundColor")
        $(".change").css("color", optionColor)
    })
    let boxWidth= $(".options-box").outerWidth(true)
    $(".options-container").css("left", -boxWidth)
    $(".options-container i").click(function(){
        
        if($(".options-container").css("left") == "0px")
        {
            $(".options-container").animate({left:`-${boxWidth}px`} ,1000)
        }
        else
        {
            $(".options-container").animate({left:`0`} ,1000)
        }
    })


        $("#loading").fadeOut(1000, function () {
            $("body").css("overflow", "auto")
        })

})