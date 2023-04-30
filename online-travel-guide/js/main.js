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
(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".nav");
  const menuCloseItem = document.querySelector(".nav__close");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("nav_active");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("nav_active");
  });
})();
// /burer

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
// /scroll to anchors
// /header

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
// /up-button
