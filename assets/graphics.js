/* АВО — графика сайта: точечная карта, рисунки техники */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Точечная карта России на canvas ---------- */
  function MapCanvas(cv) {
    var dots = window.AVO_DOTS || [], ratio = window.AVO_DOTS_RATIO || 1.68;
    var ctx = cv.getContext('2d');
    var alarm = (cv.getAttribute('data-alarm') || '0.115,0.585').split(',').map(Number);
    var crews = cv.hasAttribute('data-crews');
    var light = cv.getAttribute('data-theme') === 'light';
    var active = [], links = [], t0 = performance.now(), running = false, raf = 0, W = 0, H = 0, ox = 0, oy = 0, mw = 0, mh = 0, r = 2;
    var seed = 7; var rnd = function () { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
    dots.forEach(function (d, i) { if (rnd() < (crews ? 0.22 : 0.13)) active.push({ i: i, ph: rnd() * 6.28, sp: 0.6 + rnd() * 1.4 }); });
    function size() {
      var b = cv.getBoundingClientRect(), dpr = Math.min(2, window.devicePixelRatio || 1);
      W = b.width; H = b.height; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var pad = parseFloat(cv.getAttribute('data-pad') || '0.06');
      if (cv.getAttribute('data-fit') === 'hero' && W > 860) {
        mw = W * 0.66; mh = mw / ratio;
        if (mh > H * 0.7) { mh = H * 0.7; mw = mh * ratio; }
        ox = Math.max(W * 0.395, W - mw * 0.98); oy = H * 0.19;
      } else {
        mw = W * (1 - pad * 2); mh = mw / ratio;
        if (mh > H * (1 - pad * 2)) { mh = H * (1 - pad * 2); mw = mh * ratio; }
        ox = (W - mw) / 2; oy = (H - mh) / 2 + (parseFloat(cv.getAttribute('data-shift') || '0') * H);
      }
      r = Math.max(1.1, mw / 813 * 7 * 0.3);
      measureAvoid();
    }
    var avoid = [];
    function measureAvoid() {
      avoid = [];
      var host = cv.closest('section'); if (!host) return;
      var cb = cv.getBoundingClientRect();
      host.querySelectorAll('[data-map-avoid]').forEach(function (el) {
        var r = el.getBoundingClientRect();
        avoid.push([r.left - cb.left - 28, r.top - cb.top - 20, r.right - cb.left + 36, r.bottom - cb.top + 20]);
      });
    }
    function hidden(p) { for (var k = 0; k < avoid.length; k++) { var a = avoid[k]; if (p[0] > a[0] && p[0] < a[2] && p[1] > a[1] && p[1] < a[3]) return true; } return false; }
    function P(d) { return [ox + d[0] * mw, oy + d[1] * mh]; }
    function draw(now) {
      var t = (now - t0) / 1000;
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = light ? '#d9d9de' : '#342d45';
      for (var i = 0; i < dots.length; i++) { var p = P(dots[i]); if (!hidden(p)) ctx.fillRect(p[0] - r, p[1] - r, r * 2, r * 2); }
      /* связи LoRa */
      if (!reduce && rnd() < 0.08) {
        var a = active[(rnd() * active.length) | 0];
        if (a) {
          var pa = P(dots[a.i]), best = [];
          active.forEach(function (b) { if (b === a) return; var pb = P(dots[b.i]); var dd = Math.hypot(pb[0] - pa[0], pb[1] - pa[1]); if (dd < mw * 0.09) best.push([dd, pb]); });
          best.sort(function (x, y) { return x[0] - y[0]; }).slice(0, 3).forEach(function (bb) { links.push({ a: pa, b: bb[1], born: t }); });
        }
      }
      links = links.filter(function (l) { return t - l.born < 1.6; });
      ctx.lineWidth = 1;
      links.forEach(function (l) { var k = 1 - (t - l.born) / 1.6; ctx.strokeStyle = (light ? 'rgba(119,61,189,' : 'rgba(201,180,240,') + ((light ? 0.35 : 0.55) * k).toFixed(3) + ')'; ctx.beginPath(); ctx.moveTo(l.a[0], l.a[1]); ctx.lineTo(l.b[0], l.b[1]); ctx.stroke(); });
      /* активные устройства */
      active.forEach(function (a) {
        var p = P(dots[a.i]); if (hidden(p)) return; var k = reduce ? 0.8 : 0.45 + 0.55 * (0.5 + 0.5 * Math.sin(t * a.sp + a.ph));
        ctx.fillStyle = light ? 'rgba(119,61,189,' + (k * 0.85).toFixed(3) + ')' : (crews ? 'rgba(232,217,255,' + k.toFixed(3) + ')' : 'rgba(150,96,220,' + k.toFixed(3) + ')');
        ctx.fillRect(p[0] - r, p[1] - r, r * 2, r * 2);
      });
      /* тревога */
      if (!crews) {
        var pa2 = [ox + alarm[0] * mw, oy + alarm[1] * mh];
        var host = cv.closest('[data-state]'), st = host ? host.getAttribute('data-state') : '2';
        var col = st === '2' ? '224,68,62' : (st === '3' || st === '1' ? '47,179,107' : '119,61,189');
        var rings = st === '2' ? 3 : (st === '1' ? 1 : 0);
        for (var k2 = 0; k2 < rings; k2++) {
          var ph = reduce ? 0.4 + k2 * 0.2 : ((t * 0.55 + k2 / 3) % 1);
          ctx.strokeStyle = 'rgba(' + col + ',' + (0.7 * (1 - ph)).toFixed(3) + ')'; ctx.lineWidth = 1.5;
          ctx.beginPath(); ctx.arc(pa2[0], pa2[1], 6 + ph * mw * 0.07, 0, 6.283); ctx.stroke();
        }
        ctx.fillStyle = 'rgb(' + col + ')'; ctx.beginPath(); ctx.arc(pa2[0], pa2[1], 6, 0, 6.283); ctx.fill();
        ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.stroke();
        var card = cv.parentElement.querySelector('.map-card');
        if (card) { card.style.left = (pa2[0] + 22) + 'px'; card.style.top = (pa2[1] - 20) + 'px'; }
      }
      if (running && !reduce) raf = requestAnimationFrame(draw);
    }
    size();
    if ('ResizeObserver' in window) new ResizeObserver(function () { size(); if (!running) draw(performance.now()); }).observe(cv);
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        var vis = e.isIntersecting && e.target.getBoundingClientRect().width > 0;
        if (vis && !running) { running = true; raf = requestAnimationFrame(draw); }
        if (!vis) { running = false; cancelAnimationFrame(raf); }
      });
    });
    io.observe(cv);
    draw(performance.now());
  }

  function init() {
    document.querySelectorAll('canvas[data-map]').forEach(function (c) { MapCanvas(c); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
