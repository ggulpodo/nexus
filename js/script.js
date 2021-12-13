// 리소스 로딩 후 진행
window.onload = function () {
    // 목록(blullet)을 저장한다.
    let bullets = $('.sw-visual-pg .swiper-pagination-bullet');

    // scroll
    $(window).scroll(function () {
        // 웹 브라우저 오른쪽의 스크롤 바의 위치를 파악      
        let scY = $(window).scrollTop();
        if (scY >= 80) {
            // css 를 추가하겠다.
            $('.header').addClass('header-focus');
        } else {
            // css 를 제거하겠다.
            $('.header').removeClass('header-focus');
        }
    });

    // visual 

    // 슬라이드 들을 저장한다.
    let visual_box_img = $('.visual-box img');
    // 현재 선택된 순서에 해당하는 것을 저장한다.
    let bulletsIndex = 0;

    let sw_visual = new Swiper('.sw-visual', {
        loop: true,
        effect: 'fade',
        crossEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        speed: 1500,
        pagination: {
            el: '.sw-visual-pg',
            clickable: true,
        },
        on: {
            slideChange: function () {

                // 모션을 위한 코딩
                // 보여질 슬라이드 번호
                // console.log(this.activeIndex);
                // 이전에 보였던 슬라이드 번호
                // console.log(this.previousIndex);
                visual_box_img.eq(this.previousIndex).stop().animate({
                    opacity: 0
                }, 500);

                visual_box_img.eq(this.activeIndex).css({
                    opacity: 0,
                    left: '10.0208vw'
                });

                visual_box_img.eq(this.activeIndex).stop().animate({
                    opacity: 1,
                    left: '13.0208vw'
                }, 600);


                // 마치 클릭이 되었을 때의 index 처럼
                // 실제 html코딩의 순서 값이 넘어온다.
                changePg(this.realIndex);
            },

            init: function () {
                // 최초로 swiper 가 실행 될때..
                visual_box_img = $('.visual-box img');

                visual_box_img.eq(this.activeIndex).css({
                    opacity: 0,
                    left: '10.0208vw'
                });

                visual_box_img.eq(this.activeIndex).stop().animate({
                    opacity: 1,
                    left: '13.0208vw'
                }, 600);
            },
        },
    });

    // sw-visual-pg 를 위한 코드


    // 선택된 것이 바뀌어지는 감시한다.    
    $.each(bullets, function (index, item) {
        $(this).click(function () {
            changePg(index);
        });
    });

    // 전달된 번호를 참조해서 
    // 이전 번호와 비교하는 기능(함수)
    // changePg(_번호)


    function changePg(_num) {

        // 동일한 포커스 시
        if (_num == bulletsIndex) {
            // 아래로 가지마라.
            return;
        }

        $('.sw-visual-pg .swiper-pagination-bullet').removeClass('sw-visual-pg-active');
        $('.sw-visual-pg .swiper-pagination-bullet').eq(bulletsIndex).addClass('sw-visual-pg-active');

        bulletsIndex = _num;

    }

    // mb-gnb 메뉴 코드
    let mb_menu = $('.mb-menu');
    let mb_gnb = $('.mb-gnb');
    mb_menu.click(function () {
        mb_gnb.toggleClass('mb-gnb-open');
    });

    let mb_gnb_close = $('.mb-gnb-close');
    mb_gnb_close.click(function (e) {
        // a태그의 href 를 막는다.
        // 웹 브라우저 갱신 되면 안되니까.
        e.preventDefault();
        // 메뉴닫기
        mb_gnb.removeClass('mb-gnb-open');
    });

    // 화면 리사이징 관련
    $(window).resize(function () {
        // 화면의 너비
        let winW = $(window).width();
        if (winW > 1024) {
            // 메뉴닫기
            mb_gnb.removeClass('mb-gnb-open');
        }
    });

    // 스크롤 모션
    $('.story-box-top').waypoint(function (dir) {
        if (dir == "down") {
            $(this).addClass('story-box-top-ani');
        } else {}
    }, {
        offset: '100%'
    });

    $('.story-1').waypoint(function (dir) {
        if (dir == "down") {
            $(this).addClass('story-1-ani');
        } else {}
    }, {
        offset: '70%'
    });

    $('.story-2').waypoint(function (dir) {
        if (dir == "down") {
            $(this).addClass('story-2-ani');
        } else {}
    }, {
        offset: '70%'
    });


    $('.story-3').waypoint(function (dir) {
        if (dir == "down") {
            $(this).addClass('story-3-ani');
        } else {}
    }, {
        offset: '70%'
    });

    $('.story-4').waypoint(function (dir) {
        if (dir == "down") {
            $(this).addClass('story-4-ani');
        } else {}
    }, {
        offset: '70%'
    });


    $('.story-5').waypoint(function (dir) {
        if (dir == "down") {
            $(this).addClass('story-5-ani');
        } else {}
    }, {
        offset: '70%'
    });


    $('.story-6').waypoint(function (dir) {
        if (dir == "down") {
            $(this).addClass('story-6-ani');
        } else {}
    }, {
        offset: '70%'
    });

    $('.story-7').waypoint(function (dir) {
        if (dir == "down") {
            $(this).addClass('story-7-ani');
        } else {}
    }, {
        offset: '70%'
    });

    $('.story-8').waypoint(function (dir) {
        if (dir == "down") {
            $(this).addClass('story-8-ani');
        } else {}
    }, {
        offset: '70%'
    });

    $('.story-9').waypoint(function (dir) {
        if (dir == "down") {
            $(this).addClass('story-9-ani');
        } else {}
    }, {
        offset: '70%'
    });

    // modal close
    $('.modal').click(function () {
        $(this).fadeOut();
    });

};