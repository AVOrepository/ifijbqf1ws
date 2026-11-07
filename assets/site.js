/* АВО Телематика — поведение сайта */
(function () {
  var doc = document.documentElement;
  doc.classList.remove('no-js');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Меню на телефоне */
  var burger = document.querySelector('.bar__burger');
  if (burger) {
    burger.addEventListener('click', function () {
      var open = doc.classList.toggle('menu-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.querySelectorAll('.drawer a').forEach(function (a) {
      a.addEventListener('click', function () { doc.classList.remove('menu-open'); burger.setAttribute('aria-expanded', 'false'); });
    });
  }

  /* Шапка прячется при прокрутке вниз */
  var bar = document.querySelector('.bar');
  var lastY = window.scrollY;
  window.addEventListener('scroll', function () {
    var y = window.scrollY;
    if (bar && !doc.classList.contains('menu-open')) bar.classList.toggle('is-hidden', y > lastY && y > 400);
    lastY = y;
  }, { passive: true });

  /* Появление частей секций */
  var groups = document.querySelectorAll('[data-rv]');
  groups.forEach(function (g) {
    var kids = g.querySelectorAll(':scope > *');
    var step = parseInt(g.getAttribute('data-rv'), 10) || 80;
    kids.forEach(function (k, i) {
      if (k.classList.contains('rv-mask') || k.hasAttribute('data-rv')) return;
      k.classList.add('rv');
      k.style.setProperty('--d', (i * step) + 'ms');
    });
  });
  /* высокие блоки не прячем целиком: только сдвиг */
  document.querySelectorAll('.rv').forEach(function (el) {
    if (el.offsetHeight > window.innerHeight * 0.4) { el.classList.remove('rv'); el.classList.add('rv-soft'); }
  });
  var watch = document.querySelectorAll('.rv, .rv-mask, .rv-soft');
  if (reduce || !('IntersectionObserver' in window)) {
    watch.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px 15% 0px', threshold: 0 });
    watch.forEach(function (el) { io.observe(el); });
    /* страховка при быстрой прокрутке: у низа страницы показываем все */
    var flush = function () {
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1400) {
        watch.forEach(function (el) { el.classList.add('is-in'); });
        window.removeEventListener('scroll', flush);
      }
    };
    window.addEventListener('scroll', flush, { passive: true });
    /* страховка: все видимое на первом экране показываем сразу */
    requestAnimationFrame(function () {
      watch.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('is-in');
      });
    });
  }

  /* Неподвижная сцена: слой меняется вместе с главой */
  var stage = document.querySelector('.split__stage');
  if (stage) {
    var layers = stage.querySelectorAll('.stage__layer');
    var cap = stage.querySelector('.stage__cap');
    var show = function (id) {
      layers.forEach(function (l) {
        var on = l.getAttribute('data-layer') === id;
        l.classList.toggle('is-on', on);
        var v = l.querySelector('video');
        if (v) { if (on && !reduce) { var p = v.play(); if (p && p.catch) p.catch(function () {}); } else v.pause(); }
        if (on && cap && l.dataset.cap) cap.textContent = l.dataset.cap;
      });
    };
    var chapters = document.querySelectorAll('[data-chapter]');
    if ('IntersectionObserver' in window) {
      var co = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) show(e.target.getAttribute('data-chapter')); });
      }, { rootMargin: '-45% 0px -45% 0px' });
      chapters.forEach(function (c) { co.observe(c); });
    }
  }

  /* Видео-петли: играют только на экране */
  var vids = document.querySelectorAll('video[data-loop]');
  if ('IntersectionObserver' in window) {
    var vo = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var v = e.target;
        if (e.isIntersecting && !reduce) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
        else v.pause();
      });
    }, { threshold: 0.15 });
    vids.forEach(function (v) { vo.observe(v); });
  }
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) document.querySelectorAll('video').forEach(function (v) { v.pause(); });
  });

  /* Вкладки витрины */
  document.querySelectorAll('[data-tabs]').forEach(function (box) {
    var btns = box.querySelectorAll('[role="tab"]');
    var pics = box.querySelectorAll('[data-pic]');
    var select = function (btn, focus) {
      btns.forEach(function (b) {
        var on = b === btn;
        b.setAttribute('aria-selected', on ? 'true' : 'false');
        b.tabIndex = on ? 0 : -1;
        var panel = document.getElementById(b.getAttribute('aria-controls'));
        if (panel) { panel.hidden = !on; if (on) { panel.classList.remove('config__swap'); void panel.offsetWidth; panel.classList.add('config__swap'); } }
      });
      var id = btn.getAttribute('data-show');
      pics.forEach(function (p) { p.classList.toggle('is-on', p.getAttribute('data-pic') === id); });
      if (focus) btn.focus();
    };
    btns.forEach(function (b, i) {
      b.addEventListener('click', function () { select(b); });
      b.addEventListener('keydown', function (e) {
        var n = null;
        if (e.key === 'ArrowRight') n = btns[(i + 1) % btns.length];
        if (e.key === 'ArrowLeft') n = btns[(i - 1 + btns.length) % btns.length];
        if (n) { e.preventDefault(); select(n, true); }
      });
    });
  });

  /* Конфигуратор защиты */
  var cfg = document.querySelector('[data-config]');
  if (cfg && window.AVO_SEGMENTS) {
    var data = window.AVO_SEGMENTS;
    var out = cfg.querySelector('.config__out');
    var chips = cfg.querySelectorAll('[data-seg]');
    var render = function (key) {
      var s = data[key];
      if (!s) return;
      chips.forEach(function (c) { c.setAttribute('aria-pressed', c.getAttribute('data-seg') === key ? 'true' : 'false'); });
      var kit = function (arr) { return arr.map(function (x) { return '<span>' + x + '</span>'; }).join(''); };
      out.innerHTML =
        '<div class="config__photo config__art">' + (window.AVO_ART ? window.AVO_ART[key] : '') + '</div>' +
        '<div class="config__risk"><h3 class="h3">' + s.title + '</h3><p>' + s.risk + '</p></div>' +
        '<ol class="levels">' + s.levels.map(function (l) { return '<li><b>' + l[0] + '</b><div class="kit">' + kit(l[1]) + '</div></li>'; }).join('') + '</ol>' +
        '<p class="config__idea">' + s.idea + '</p>' +
        '<div class="config__ct"><b>Коммерческая телематика</b><span>' + s.ct + '</span></div>';
      out.classList.remove('config__swap'); void out.offsetWidth; out.classList.add('config__swap');
      if (history.replaceState && cfg.hasAttribute('data-hash')) history.replaceState(null, '', '#' + key);
    };
    chips.forEach(function (c) { c.addEventListener('click', function () { render(c.getAttribute('data-seg')); }); });
    var start = (location.hash || '').slice(1);
    render(data[start] ? start : 'cars');
  }

  /* Рисунки техники в сегментах */
  if (window.AVO_ART) document.querySelectorAll('[data-art]').forEach(function (el) { el.innerHTML = window.AVO_ART[el.getAttribute('data-art')] || ''; });

  /* Фото первого экрана раскрывается до краев */
  var open = document.querySelector('[data-open]');
  if (open && !reduce && window.innerWidth > 600) {
    var setP = function () {
      var r = open.getBoundingClientRect(), vh = window.innerHeight;
      var p = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.9) - 0.15));
      open.style.setProperty('--p', p.toFixed(3));
    };
    setP(); window.addEventListener('scroll', setP, { passive: true }); window.addEventListener('resize', setP);
  }

  /* Фраза наливается чернилами */
  document.querySelectorAll('[data-fill]').forEach(function (el) {
    if (reduce) return;
    el.innerHTML = el.textContent.trim().split(/\s+/).map(function (w) { return '<span class="w">' + w + '</span>'; }).join(' ');
    var words = el.querySelectorAll('.w');
    var paint = function () {
      var line = window.innerHeight * 0.62;
      words.forEach(function (w) { w.classList.toggle('on', w.getBoundingClientRect().top < line); });
    };
    paint(); window.addEventListener('scroll', paint, { passive: true });
  });

  /* История: шаги меняют состояние карты */
  var story = document.querySelector('.story');
  if (story) {
    var tile = story.querySelector('.maptile');
    var title = story.querySelector('[data-card-title]'), text = story.querySelector('[data-card-text]'), card = story.querySelector('.map-card');
    var states = [
      ['Маяк установлен', 'Pharos · экскаватор-погрузчик'],
      ['На связи', 'Точка получена 2 минуты назад'],
      ['Тревога: демонтаж', 'Экипаж Росгвардии выехал · 02:25'],
      ['Техника на стоянке', 'Возвращена лизингодателю']
    ];
    var steps = story.querySelectorAll('[data-step]');
    var setState = function (i) {
      if (tile.getAttribute('data-state') === String(i)) return;
      tile.setAttribute('data-state', i);
      steps.forEach(function (s) { s.classList.toggle('is-on', s.getAttribute('data-step') === String(i)); });
      title.textContent = states[i][0]; text.textContent = states[i][1];
      card.classList.remove('swap'); void card.offsetWidth; card.classList.add('swap');
    };
    if ('IntersectionObserver' in window) {
      var so = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) setState(+e.target.getAttribute('data-step')); });
      }, { rootMargin: '-45% 0px -45% 0px' });
      steps.forEach(function (s) { so.observe(s); });
    }
  }

  /* Счетчики */
  var counters = document.querySelectorAll('[data-count]');
  if (!reduce && 'IntersectionObserver' in window) {
    var fmt = function (n) { return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ' '); };
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target; cio.unobserve(el);
        var to = parseFloat(el.getAttribute('data-count'));
        var suffix = el.getAttribute('data-suffix') || '';
        var t0 = performance.now(), dur = 1400;
        var tick = function (t) {
          var k = Math.min(1, (t - t0) / dur);
          var eased = 1 - Math.pow(1 - k, 4);
          el.textContent = fmt(to * eased) + suffix;
          if (k < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.6 });
    counters.forEach(function (c) { cio.observe(c); });
  }

  /* Заявка: собираем письмо */
  var form = document.querySelector('[data-mail]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = new FormData(form);
      var body = [
        'Компания: ' + (f.get('company') || ''),
        'Контакт: ' + (f.get('name') || '') + ', ' + (f.get('phone') || ''),
        'Что защищаем: ' + (f.get('asset') || ''),
        'Сколько единиц: ' + (f.get('qty') || ''),
        '',
        (f.get('msg') || '')
      ].join('\n');
      location.href = 'mailto:info@myavo.ru?subject=' + encodeURIComponent('Пилот АВО: ' + (f.get('company') || 'заявка с сайта')) + '&body=' + encodeURIComponent(body);
    });
  }
})();
