// $().scrollsypnav(options);

$(function () {
  $('.nav-item li').mouseenter(function () {
    $(this).children('.nav-card').fadeIn(150,function () {
      $(this).parent().siblings().children('.nav-card').hide(0);
    });

  });
  $('.nav-item').mouseleave(function () {
    $('.nav-card').fadeOut(150);
  });
});
$(function () {
  var wd = $(window).width();
  $('.nav-card').each(function () {
    $(this).css('width',wd);
  });  //left是 0 - 此元素的父元素li的offsetLeft
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 200) {
    $('.store-header').addClass('store-header-fixed');
    $('.g-row').addClass('g-row-fixed');
    $('.tab-logo').addClass('tab-logo-fixed');
    $('.nav-item').addClass('nav-item-fixed');
    $('.nav-item .item').addClass('item-fixed');
    $('.nav-card').addClass('nav-card-fixed');
    $('.fixed-hide').hide(0);
    $('.m-search').hide(0);
    $('.notlogin').css('display','block');
    $('.cart-div').addClass('cart-div-fixed');
  }else if($(window).scrollTop() < 200) {
    //$('.back-to-top').fadeOut(0);
    $('.store-header').removeClass('store-header-fixed');
    $('.g-row').removeClass('g-row-fixed');
    $('.tab-logo').removeClass('tab-logo-fixed');
    $('.nav-item').removeClass('nav-item-fixed');
    $('.item').removeClass('item-fixed');
    $('.nav-card').removeClass('nav-card-fixed');
    $('.fixed-hide').show(0);
    $('.m-search').show(0);
    $('.notlogin').css('display','none');
    $('.cart-div').removeClass('cart-div-fixed');
  }
  if ($(window).scrollTop() > 500) {
    $('.back-to-top').fadeIn(100);
  }else{
    $('.back-to-top').fadeOut(100);
  }
});

$(function () {
  var m = 1;
  var timer = setInterval(roll, 5000);

  function roll(){
    if (m > 4) {
      m = 0;
    }
    $('.carousel-circle li').eq(m).addClass('selected').siblings().removeClass('selected');
    $('.carousel-img li').eq(m).fadeIn(100).addClass('current').siblings().fadeOut(300).removeClass('current');
    m ++;


  }


  $('.carousel').mouseover(function () {
      clearInterval(timer);
    //clearInterval(timer);
  }).mouseleave(function () {
    timer = setInterval(roll, 5000);
    $('.carousel-circle').fadeOut(300);
  }).mouseenter(function () {
    $('.carousel-circle').fadeIn(300);
  });


  $('.carousel-circle li').mouseover(function () {
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.carousel-img li').eq($(this).index()).fadeIn(100).addClass('current').siblings().fadeOut(300).removeClass('current');
  });

});
// $(function () {
//  var saber = setInterval(archer,1000);
//  var num = 0;
//  var liW = 275;
//  var li1 = $('.speaker').slice(0, 6).clone();
//  $('.speak-list').append(li1);
//
//  function archer() {
//   console.log(num);
//    num ++;
//    if (num === 10) {
//     num = 1;
//     $('.speak-list').css('left','0px');
//    }
//    $('.speak-list').stop().animate({
//     left: -num*liW
//    });
//  };
//   function hot() {
//    console.log(num);
//    num--;
//    if (num === 0) {
//     num = 9;
//     $('.speak-list').css('left','-2750px');
//    }
//    $('.speak-list').stop().animate({
//     left: -num*liW
//    });
//  }
//  $('.arrowr').click(function () {
//    archer();
//    archer();
//    archer();
//    archer();
//  });
//  $('.arrowl').click(function () {
//    hot();
//    hot();
//    hot();
//    hot();
//
//  })

//  $('.new-comment .grow').mouseenter(function () {
//    clearInterval(saber);
//  }).mouseleave(function () {
//    saber = setInterval(archer, 1000);
//  })
// })

$(document).ready(function () {
  $('.speak-list').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.arrowl'),
    nextArrow: $('.arrowr')
  });
})


$(function () {
  $('.back-to-top').click(function () {
    $('body,html').animate({
      scrollTop:0
    })
  })
})
$(function () {
  var lancer = setInterval(wrong,3000);
  var b = 0;
  var piW = 960;
  var p1 = $('.sl-it').first().clone();
  $('.sl').append(p1);
  function wrong() {
    b++;
    if (b > 3) {
      $('.sl').css('left','0px');
      b = 1;
    }
    $('.sl').stop().animate({
      left:-b*960
    });
  }
  $('.slider').mouseenter(function () {
    clearInterval(lancer);
  }).mouseleave(function () {
    lancer = setInterval(wrong, 3000);
  })
  $('.next').click(function () {
    wrong();
  })
  $('.prev').click(function () {
    b --;
    if (b === -1) {
      $('.sl').css('left', '-2880px');
      b = 2;
    }
    $('.sl').stop().animate(
    {left: -b*960}
    );
  })
})
