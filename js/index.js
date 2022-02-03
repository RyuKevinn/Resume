$('html, body').stop().animate({
    scrollTop : 0
}, 1000)

$(document).on('ready',function(){
    $('.section1').addClass('on')
    $('.sign').fadeIn(7000)
})

// Auto clock
function autoClock(){
    var today = new Date()
    var year = today.getFullYear()
    var month = today.getMonth()+1
    var date = today.getDate()
    var weekday = today.getDay()
    switch(weekday) {
        case 0 : weekday = "Sun"; break;
        case 1 : weekday = "Mon"; break;
        case 2 : weekday = "Tue"; break;
        case 3 : weekday = "Wed"; break;
        case 4 : weekday = "Thu"; break;
        case 5 : weekday = "Fri"; break;
        case 6 : weekday = "Sat"; break;
    }
    var hours = today.getHours()
    var minutes = today.getMinutes()
    if (hours>=0 && hours<10) { hours = '0'+hours }
    if (minutes>=0 && minutes<10) { minutes = '0'+minutes }
    $('.autoClock > span').eq(0).text(year)
    $('.autoClock > span').eq(1).text(month)
    $('.autoClock > span').eq(2).text(date)
    $('.autoClock > span').eq(3).text(weekday)
    $('.autoClock > span').eq(4).text(hours)
    $('.autoClock > span').eq(5).text(minutes)
}
autoClock()
setInterval(autoClock,1000)




// mouseWheel
$('section').on('mousewheel',function(e, a){
    if(a<0){
        var offTop = $(this).next().offset().top
    }
    else if(a>0){
        var offTop = $(this).prev().offset().top
    }
    $('html').stop().animate({scrollTop:offTop}, 1500)
})


// Scroll
$(window).on('scroll',function(){
    var sct = $(this).scrollTop()
    var wh  = $(this).height()*0
    var wh1 = $(this).height()*1
    var wh2 = $(this).height()*2
    var wh3 = $(this).height()*3
    var wh4 = $(this).height()*4

    // console.log(sct)
    // console.log(wh)
    // console.log(wh1)
    // console.log(wh2)
    // console.log(wh3)
    // console.log(wh4)



    if(sct>=wh && sct<wh1-10){
    $('#header').fadeOut(1000)
    $('#header .depth1 li').eq(0).addClass('on').siblings().removeClass('on')
    $('.section1').addClass('on').siblings().removeClass('on')
    }
    else if(sct>=wh1-10 && sct<wh2-10){
        $('#header').fadeIn(1000)
        $('#header .depth1 li').eq(1).addClass('on').siblings().removeClass('on')
        $('.section2').addClass('on')//.siblings().removeClass('on')
        
    }
    else if(sct>=wh2-10 && sct<wh3-10){
        $('#header').fadeIn()
        $('#header .depth1 li').eq(2).addClass('on').siblings().removeClass('on')
        $('.section3').addClass('on')//.siblings().removeClass('on')
        
    }
    else if(sct>=wh3-10 && sct<wh4-10){
        $('#header').fadeIn()
        $('#header .depth1 li').eq(3).addClass('on').siblings().removeClass('on')
        $('.section4').addClass('on')//.siblings().removeClass('on')
    }
    else{
        $('#header').fadeIn()
        $('#header .depth1 li').eq(4).addClass('on').siblings().removeClass('on')
        $('.section5').addClass('on')//.siblings().removeClass('on')
    }
})


// Nav Click
$('#header .depth1 li a').on('click', function(e){
    e.preventDefault()
    var index = $(this).parent().index()
    console.log(index)
    var offTop = $('section').eq(index).offset().top
    $('html').stop().animate({
        scrollTop:offTop
    },1500)
})

// Main Page Click
$('.section1 .article .txt a').on('click', function(e){
    e.preventDefault()
    var index = $(this).parent().index()
    console.log(index)
    var offTop = $('#wrap section').eq(index).offset().top
    // console.log(offTop)
    $('html').stop().animate({
        scrollTop:offTop
    },1500)

})

//Prtfolio Hover
$('.section5 .content .port img').on('mouseover mouseout',function(){
    $(this).toggleClass('on')
})