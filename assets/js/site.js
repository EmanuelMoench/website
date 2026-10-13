// Site behaviour: mobile menu, research sub-menu, abstract/cite toggles, copy BibTeX.
(function () {
  "use strict";

  // Mobile menu
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });
  }

  // Research sub-menu (click/tap support; hover works on desktop via CSS)
  document.querySelectorAll(".sub-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var li = btn.closest(".has-sub");
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      li.classList.toggle("is-open", !open);
    });
  });
  document.addEventListener("click", function (e) {
    document.querySelectorAll(".has-sub.is-open").forEach(function (li) {
      if (!li.contains(e.target) && window.matchMedia("(min-width: 1241px)").matches) {
        li.classList.remove("is-open");
        var b = li.querySelector(".sub-toggle");
        if (b) b.setAttribute("aria-expanded", "false");
      }
    });
  });

  // Abstract / Cite panels
  document.querySelectorAll(".pub-actions button[aria-controls]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var panel = document.getElementById(btn.getAttribute("aria-controls"));
      if (!panel) return;
      var open = btn.getAttribute("aria-expanded") === "true";
      // close sibling panels of the same publication
      btn.parentElement.querySelectorAll("button[aria-controls]").forEach(function (other) {
        if (other !== btn) {
          other.setAttribute("aria-expanded", "false");
          var p = document.getElementById(other.getAttribute("aria-controls"));
          if (p) p.hidden = true;
        }
      });
      btn.setAttribute("aria-expanded", String(!open));
      panel.hidden = open;
    });
  });

  // Copy BibTeX
  document.querySelectorAll(".copy-btn").forEach(function (btn) {
    var label = btn.textContent;
    btn.addEventListener("click", function () {
      var code = btn.parentElement.querySelector("code");
      if (!code) return;
      var text = code.textContent;
      var done = function () {
        btn.textContent = btn.getAttribute("data-copied") || "Copied";
        setTimeout(function () { btn.textContent = label; }, 1600);
      };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(done, function () {});
      } else {
        var ta = document.createElement("textarea");
        ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
        document.body.appendChild(ta); ta.select();
        try { document.execCommand("copy"); done(); } catch (err) {}
        document.body.removeChild(ta);
      }
    });
  });
})();
