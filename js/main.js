$(document).ready(function () {

    //-----------------------------
    //SCALE OF NAV ----------------
    //-----------------------------

    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 100) {
                $('nav').addClass('scrolled');
            } else {
                $('nav').removeClass('scrolled')
            }
        });

    });




    //-----------------------------
    //COLOUR EFFECT ON HOME HEADER 
    //-----------------------------

    $('.txt').html(function (i, html) {
        var chars = $.trim(html).split("");

        return '<span>' + chars.join('</span><span>') + '</span>';
    });


    var menu = document.querySelector("#menu")

    menu.addEventListener("click", function () {
        this.classList.toggle("active");
    });



    //-----------------------------
    //MOBILE MENU NAV -------------
    //-----------------------------


    var mobileMenu = function () {
        if ($(window).innerWidth() <= 784) {


            var windH = window.innerHeight;

            $(".clickMenu").click(function () {

                jQuery(document).ready(function ($) {
                    setTimeout(function () {
                        $('.trans--grow').addClass('grow');
                    }, 275);
                });
                $("#menuItemMobile").toggleClass("mobileactive");
                $('#menuItemMobile').height(windH);
            });

            $('#menuItemMobile li a').click(function () {
                $('.clickMenu').toggleClass('active');
                $('#menu').trigger('click');
            });

        } else {
            var windHeight = window.innerHeight;
            var y = 0;
            if (y % 1 == 0) {;
                $('#menuItemMobile').height(0);
                y = 0;

            } else {

                $('#menuItemMobile').height(windHeight);
                y = 0;
            }
        }

    }

    $(window).resize(function () {
        mobileMenu();
    });

    mobileMenu();






    //-----------------------------
    //WEBSITE MODALS --------------
    //-----------------------------



    $("#chickenLicken").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.chickenLickenThumb', function (event) {
        event.preventDefault();
        $('#chickenLicken').iziModal('open');
    });



    $("#alien").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.alienThumb', function (event) {
        event.preventDefault();
        $('#alien').iziModal('open');
    });



    $("#jmb").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.jmbThumb', function (event) {
        event.preventDefault();
        $('#jmb').iziModal('open');
    });



    $("#dash").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.dashboardThumb', function (event) {
        event.preventDefault();
        $('#dash').iziModal('open');
    });


    $("#travellers").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.travellersThumb', function (event) {
        event.preventDefault();
        $('#travellers').iziModal('open');
    });






    //-----------------------------
    //MOTION MODALS ---------------
    //-----------------------------



    $("#insecure").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.insecureThumb', function (event) {
        event.preventDefault();
        $('#insecure').iziModal('open');
    });




    $("#deadGame").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.deadGameThumb', function (event) {
        event.preventDefault();
        $('#deadGame').iziModal('open');
    });




    $("#mtvCut").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.mtvCutThumb', function (event) {
        event.preventDefault();
        $('#mtvCut').iziModal('open');
    });




    $("#selfPromo").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.selfPromoThumb', function (event) {
        event.preventDefault();
        $('#selfPromo').iziModal('open');
    });




    $("#logan").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.loganThumb', function (event) {
        event.preventDefault();
        $('#logan').iziModal('open');
    });





    $("#showreel").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.showreelThumb', function (event) {
        event.preventDefault();
        $('#showreel').iziModal('open');
    });








    //-----------------------------
    //PRINT MODALS ----------------
    //-----------------------------




    $("#advert").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.adverThumb', function (event) {
        event.preventDefault();
        $('#advert').iziModal('open');
    });



    $("#capeTown").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.capeTownThumb', function (event) {
        event.preventDefault();
        $('#capeTown').iziModal('open');
    });



    $("#lion").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.lionThumb', function (event) {
        event.preventDefault();
        $('#lion').iziModal('open');
    });



    $("#pegasus").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.pegasusThumb', function (event) {
        event.preventDefault();
        $('#pegasus').iziModal('open');
    });



    $("#bottle").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.bottleThumb', function (event) {
        event.preventDefault();
        $('#bottle').iziModal('open');
    });



    $("#poster").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.posterThumb', function (event) {
        event.preventDefault();
        $('#poster').iziModal('open');
    });




    $("#iconPrint").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.iconPrintThumb', function (event) {
        event.preventDefault();
        $('#iconPrint').iziModal('open');
    });



    $("#packaging").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.packagingThumb', function (event) {
        event.preventDefault();
        $('#packaging').iziModal('open');
    });



    $("#magazine").iziModal({
        zindex: 9999
    });

    $(document).on('click', '.magazineThumb', function (event) {
        event.preventDefault();
        $('#magazine').iziModal('open');
    });





    //-----------------------------
    //VIDEO CONTROLS --------------
    //-----------------------------



    //-----------------------------
    //VIDEO ONE -------------------
    //-----------------------------


    var videoOne = document.getElementById("videoOne");
    // Turn off the default controls
    videoOne.controls = true;


    function togglePlayPauseOne() {
        var playpauseOne = document.getElementById("videoOne");
        if (videoOne.paused || videoOne.ended) {
            videoOne.play();
        } else {
            videoOne.pause();
        }
    }


    var pausePlayOne = document.getElementById('videoOne');

    pausePlayOne.addEventListener('click', function () {
        togglePlayPauseOne();

    });



    function closePauseOne() {
        var playpauseOne = document.getElementById("closePauseOne");


        videoOne.pause();

    }


    var closePauseBtnOne = document.getElementById('closePauseOne');

    closePauseBtnOne.addEventListener('click', function () {
        closePauseOne();

    });






    //-----------------------------
    //VIDEO TWO -------------------
    //-----------------------------


    var videoTwo = document.getElementById("videoTwo");
    // Turn off the default controls
    videoTwo.controls = true;


    function togglePlayPauseTwo() {
        var playpauseTwo = document.getElementById("videoTwo");
        if (videoTwo.paused || videoTwo.ended) {
            videoTwo.play();
        } else {
            videoTwo.pause();
        }
    }


    var pausePlayTwo = document.getElementById('videoTwo');

    pausePlayTwo.addEventListener('click', function () {
        togglePlayPauseTwo();

    });

    function closePauseTwo() {
        var playpauseTwo = document.getElementById("closePauseTwo");


        videoTwo.pause();

    }


    var closePauseBtnTwo = document.getElementById('closePauseTwo');

    closePauseBtnTwo.addEventListener('click', function () {
        closePauseTwo();

    });






    //-----------------------------
    //VIDEO Three -----------------
    //-----------------------------


    var videoThree = document.getElementById("videoThree");
    // Turn off the default controls
    videoThree.controls = true;


    function togglePlayPauseThree() {
        var playpauseThree = document.getElementById("videoThree");
        if (videoThree.paused || videoThree.ended) {

            videoThree.play();
        } else {
            videoThree.pause();
        }
    }


    var pausePlayThree = document.getElementById('videoThree');

    pausePlayThree.addEventListener('click', function () {
        togglePlayPauseThree();

    });

    function closePauseThree() {
        var playpauseThree = document.getElementById("closePauseThree");

        videoThree.pause();

    }


    var closePauseBtnThree = document.getElementById('closePauseThree');

    closePauseBtnThree.addEventListener('click', function () {
        closePauseThree();

    });






    //-----------------------------
    //VIDEO FOUR ------------------
    //-----------------------------


    var videoFour = document.getElementById("videoFour");
    // Turn off the default controls
    videoFour.controls = true;


    function togglePlayPauseFour() {
        var playpauseFour = document.getElementById("videoFour");
        if (videoFour.paused || videoFour.ended) {
            videoFour.play();
        } else {
            videoFour.pause();
        }
    }


    var pausePlayFour = document.getElementById('videoFour');

    pausePlayFour.addEventListener('click', function () {
        togglePlayPauseFour();

    });

    function closePauseFour() {
        var playpauseFour = document.getElementById("closePauseFour");

        videoFour.pause();
    }


    var closePauseBtnFour = document.getElementById('closePauseFour');

    closePauseBtnFour.addEventListener('click', function () {
        closePauseFour();

    });






    //-----------------------------
    //VIDEO FIVE ------------------
    //-----------------------------


    var videoFive = document.getElementById("videoFive");
    // Turn off the default controls
    videoFive.controls = true;


    function togglePlayPauseFive() {
        var playpauseFive = document.getElementById("videoFive");
        if (videoFive.paused || videoFive.ended) {
            videoFive.play();
        } else {
            videoFive.pause();
        }
    }


    var pausePlayFive = document.getElementById('videoFive');

    pausePlayFive.addEventListener('click', function () {
        togglePlayPauseFive();

    });



    function closePauseFive() {
        var playpauseFive = document.getElementById("closePauseFive");

        videoFive.pause();

    }


    var closePauseBtnFive = document.getElementById('closePauseFive');

    closePauseBtnFive.addEventListener('click', function () {
        closePauseFive();

    });






    //-----------------------------
    //VIDEO SIX -------------------
    //-----------------------------


    var videoSix = document.getElementById("videoSix");
    // Turn off the default controls
    videoSix.controls = true;


    function togglePlayPauseSix() {
        var playpauseSix = document.getElementById("videoSix");
        if (videoSix.paused || videoSix.ended) {
            videoSix.play();
        } else {
            videoSix.pause();
        }
    }


    var pausePlaySix = document.getElementById('videoSix');

    pausePlaySix.addEventListener('click', function () {
        togglePlayPauseSix();

    });




    function closePauseSix() {
        var playpauseSix = document.getElementById("closePauseSix");
        videoSix.pause();

    };


    var closePauseBtnSix = document.getElementById('closePauseSix');

    closePauseBtnSix.addEventListener('click', function () {
        closePauseSix();

    });




});
