// SPDX-License-Identifier: CC-BY-4.0
(function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Copy buttons on code blocks
  document.querySelectorAll('.copy-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var pre = btn.closest('.code').querySelector('pre');
      if (!pre) return;
      navigator.clipboard.writeText(pre.innerText).then(function () {
        var prev = btn.textContent;
        btn.textContent = 'copied';
        setTimeout(function () { btn.textContent = prev; }, 1400);
      });
    });
  });

  // Respect reduced-motion: strip the hero's SMIL animation if requested
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('animateMotion').forEach(function (a) { a.remove(); });
    }
  } catch (e) {}
})();
