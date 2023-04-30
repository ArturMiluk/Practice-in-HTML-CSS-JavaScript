// wow.js
new WOW().init();
// / wow.js

// header
(function () {
  const header = document.querySelector(".header");
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add("header_active");
    } else {
      header.classList.remove("header_active");
    }
  };
})();

// burger
let header__burger = document.querySelectorAll(".header__burger,.nav__link");
let nav = document.querySelector(".nav");
let back = document.querySelector("body");

header__burger.forEach(function (item) {
  item.onclick = function () {
    item.classList.toggle("active");
    nav.classList.toggle("active");
    back.classList.toggle("lock");
  };
});
// / burer

// scroll to anchors
(function () {
  const smoothScroll = function (targetEl, duration) {
    const headerElHeight = document.querySelector(".header").clientHeight;
    let target = document.querySelector(targetEl);
    let targetPosition = target.getBoundingClientRect().top - headerElHeight;
    let startPosition = window.pageYOffset;
    let startTime = null;

    const ease = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = function (currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  };

  const scrollTo = function () {
    const links = document.querySelectorAll(".js-scroll");
    links.forEach((each) => {
      each.addEventListener("click", function () {
        const currentTarget = this.getAttribute("href");
        smoothScroll(currentTarget, 1000);
      });
    });
  };
  scrollTo();
})();
// / scroll to anchors
// / header

// up-button
$("body");
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".up-button").css({
      transform: "scale(1)",
    });
  } else {
    $(".up-button").css({
      transform: "scale(0)",
    });
  }
});
$(".up-button").on("click", function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    600
  );
  return false;
});

var upButtonSize = document.querySelector(".up-button__size");

window.addEventListener("scroll", function () {
  var documentHeight = document.body.clientHeight;
  var scrollHeight = window.scrollY;
  var windowHeight = window.innerHeight;

  var scrollPercent = (scrollHeight / (documentHeight - windowHeight)) * 100;

  upButtonSize.style.height = scrollPercent + "%";
});
// / up-button

// magnificPopup
$(document).ready(function () {
  $(".popup-youtube").magnificPopup({
    type: "iframe",
    // other options
    iframe: {
      markup:
        '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        "</div>",
      patterns: {
        youtube: {
          index: "youtube.com/",
          id: "v=",
          src: "https://www.youtube.com/embed/%id%",
        },
      },
      srcAction: "iframe_src",
    },
  });
  $(".popup-with-form").magnificPopup({
    type: "inline",
    preloader: false,
    focus: "#name",
    callbacks: {
      beforeOpen: function () {
        if ($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = "#name";
        }
      },
    },
  });
  $(".gallery__list, .gallery-list").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});
// . magnificPopup
