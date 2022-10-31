// new WOW().init();

AOS.init({
  easing: "ease-out",
  duration: 500,
  once: true,
});

(function () {
  "use strict";

  $(window).scroll(function () {
    var $this = $(this),
      st = $this.scrollTop(),
      navbar = $(".main-nav");

    if (st > 130) {
      if (!navbar.hasClass("nav-top")) {
        navbar.addClass("nav-top");
      }
    }
    if (st < 150) {
      if (navbar.hasClass("nav-top")) {
        navbar.removeClass("nav-top sleep");
      }
    }
    if (st > 250) {
      if (!navbar.hasClass("awake")) {
        navbar.addClass("awake");
      }
    }
    if (st < 250) {
      if (navbar.hasClass("awake")) {
        navbar.removeClass("awake");
        navbar.addClass("sleep");
      }
    }
  });

  // navbar
  $(".navbar-burger").click(function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

    $(this).attr(
      "data-hidden",
      $(this).attr("data-hidden") === "true" ? "false" : "true"
    );
  });
  if ($(window).width() < 1024) {
    $(".navigation .has-dropdown").on("click", function (e) {
      $(this).children(".navbar-dropdown").toggle();
    });
  }
  function scrollFix() {
    var vScrollWidth = window.innerWidth - $(document).width();
    function noBodyScroll() {
      $("html").css({
        "padding-right": vScrollWidth + "px",
        "overflow-y": "hidden",
      });
      $(".main-nav").css({ width: "calc(100% - " + vScrollWidth + "px)" });
      $(".navbar-menu").css({
        width: "calc(100% - " + vScrollWidth + "px - 20px)",
      });
    }
    function doBodyScroll() {
      $("html").css({ "padding-right": 0, "overflow-y": "auto" });
      $(".main-nav").css({ width: 100 + "%" });
      $(".navbar-menu").css({ width: "calc(100% - 20px)" });
    }
    var navbarToggler = $(".navbar-burger");
    $(navbarToggler).on("click", function () {
      if (navbarToggler.attr("data-hidden") === "false") {
        noBodyScroll();
      }
      if (navbarToggler.attr("data-hidden") === "true") {
        doBodyScroll();
      }
    });
  }
  scrollFix();

  $(".btn-group-toggle input").on("click", function () {
    $(".btn-group-toggle .btn").removeClass("active");
    $(this).parent(".btn").addClass("active");
  });

  var map;

  function initialize() {
    var mapOptions = {
      zoom: 13,
      center: new google.maps.LatLng(10.136344, -85.799155),
      // styles: style_array_here
    };
    map = new google.maps.Map(
      document.getElementById("map-canvas"),
      mapOptions
    );
  }

  var google_map_canvas = $("#map-canvas");

  if (google_map_canvas.length) {
    google.maps.event.addDomListener(window, "load", initialize);
  }
})();
