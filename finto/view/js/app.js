(() => {
  let e = document.querySelector(".header-burger"),
    t = document.querySelector(".header-wrap"),
    c = document.querySelector(".header-overlay");
  function o(e) {
    const t = e.currentTarget.parentElement,
      c = t.querySelector(".accord-content");
    t &&
      c &&
      (t.classList.contains("active")
        ? ((c.style.maxHeight = "0"), t.classList.remove("active"))
        : ((c.style.maxHeight = c.scrollHeight + "px"),
          t.classList.add("active"))),
      e.stopPropagation();
  }
  e &&
    t &&
    c &&
    (e.addEventListener("click", function () {
      e.classList.toggle("active"),
        t.classList.toggle("active"),
        c.classList.toggle("active"),
        e.classList.contains("active")
          ? scrollLock.disablePageScroll()
          : scrollLock.enablePageScroll();
    }),
    c.addEventListener("click", function () {
      e.classList.remove("active"),
        t.classList.remove("active"),
        c.classList.remove("active"),
        scrollLock.enablePageScroll();
    })),
    document.addEventListener("DOMContentLoaded", function () {
      const e = document.querySelector(".splide-reviews");
      e &&
        new Splide(e, {
          type: "loop",
          drag: "free",
          gap: "2rem",
          focus: "center",
          arrows: !1,
          pagination: !1,
          autoWidth: !0,
          autoScroll: {
            pauseOnHover: !1,
            pauseOnFocus: !1,
            rewind: !1,
            speed: 0.3,
          },
          breakpoints: { 1179: { gap: "1.5rem" } },
        }).mount(window.splide.Extensions);
      const t = document.querySelector(".splide-login");
      t &&
        new Splide(t, {
          start: 4,
          type: "loop",
          gap: "1rem",
          arrows: !1,
          pagination: !0,
        }).mount();
    }),
    document.querySelectorAll(".accord-head").forEach((e) => {
      e.addEventListener("click", o);
    }),
    (function () {
      const e = document.querySelector(".faq");
      if (e) {
        const t = e.querySelectorAll(".faq-button"),
          c = e.querySelectorAll(".faq-body");
        t.forEach(function (e) {
          e.addEventListener("click", function (e) {
            e.preventDefault(),
              t.forEach(function (e) {
                e.classList.remove("active");
              }),
              this.classList.add("active"),
              c.forEach(function (e) {
                e.style.display = "none";
              });
            const o = Array.from(t).indexOf(this);
            c[o].style.display = "block";
          });
        });
      }
    })(),
    (function () {
      let e = document.querySelectorAll(".blog-button");
      e.forEach(function (t, c) {
        t.addEventListener("click", function () {
          var t;
          (t = c),
            e.forEach(function (e, c) {
              c === t
                ? e.classList.add("active")
                : e.classList.remove("active");
            });
        });
      });
    })(),
    (function () {
      let e = document.querySelectorAll(".docs-button");
      e.forEach(function (t, c) {
        t.addEventListener("click", function () {
          var t;
          (t = c),
            e.forEach(function (e, c) {
              c === t
                ? e.classList.add("active")
                : e.classList.remove("active");
            });
        });
      });
    })(),
    document.querySelectorAll(".scroll-link").forEach((e) => {
      e.addEventListener("click", (t) => {
        t.preventDefault();
        const c = e.getAttribute("href").substring(1),
          o = document.getElementById(c);
        o && o.scrollIntoView({ behavior: "smooth" });
      });
    });
})();
