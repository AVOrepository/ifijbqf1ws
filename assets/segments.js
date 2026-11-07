/* Линейные рисунки реальной техники (векторы Wikimedia Commons и Openclipart, переведены в линии) и точки установки */
window.AVO_ART = (function () {
  var A = {
    cars: { src: 'assets/art/line-car.svg', ratio: 3.272 },
    trucks: { src: 'assets/art/line-truck.svg', ratio: 4.073 },
    special: { src: 'assets/art/line-special.svg', ratio: 1.728 },
    agro: { src: 'assets/art/line-agro.svg', ratio: 1.564 },
    equipment: { src: 'assets/art/line-equipment.svg', ratio: 4.227 }
  };
  /* точки: доля ширины и высоты рисунка */
  var marks = {
    cars: [[0.39, 0.38, 'Fleet Telematic +'], [0.53, 0.56, 'InCars 3.0 под обшивкой'], [0.94, 0.76, 'Pulse в техотверстии']],
    trucks: [[0.125, 0.54, 'терминал в кабине'], [0.276, 0.83, 'маяк на раме'], [0.64, 0.42, 'Pulse M на прицепе']],
    special: [[0.25, 0.19, 'Pulse в стреле'], [0.58, 0.46, 'Pharos в кабине'], [0.60, 0.85, 'маяк в раме']],
    agro: [[0.07, 0.70, 'Pulse M на навесном'], [0.28, 0.62, 'спрятанный маяк'], [0.6, 0.40, 'Pharos в кабине']],
    equipment: [[0.092, 0.78, 'Pulse внутри корпуса'], [0.306, 0.49, 'цифровая метка'], [0.584, 0.49, 'цифровая метка'], [0.862, 0.49, 'цифровая метка']]
  };
  var X0 = 4, Y0 = 16, W = 392, H = 168, GROUND = Y0 + H;
  var out = {};
  Object.keys(A).forEach(function (k) {
    var r = A[k].ratio, w, h;
    if (r > W / H) { w = W; h = W / r; } else { h = H; w = H * r; }
    var x = X0 + (W - w) / 2, y = GROUND - h;
    var pts = marks[k].map(function (m) { return { px: x + m[0] * w, py: y + m[1] * h, label: m[2], top: m[1] < 0.55 }; });
    /* подписи в два ряда: сверху и снизу, без наложений */
    ['top', 'bottom'].forEach(function (side) {
      var row = pts.filter(function (p) { return side === 'top' ? p.top : !p.top; }).sort(function (a, b) { return a.px - b.px; });
      var half = function (p) { return p.label.length * 3.1 + 8; };
      row.forEach(function (p, i) {
        p.lx = Math.max(half(p), Math.min(400 - half(p), p.px));
        if (i > 0) { var need = row[i - 1].lx + half(row[i - 1]) + half(p); if (p.lx < need) p.lx = need; }
        p.ly = side === 'top' ? 6 : 198;
      });
      for (var i = row.length - 1; i >= 0; i--) {
        var maxX = 400 - half(row[i]); if (row[i].lx > maxX) row[i].lx = maxX;
        if (i < row.length - 1) { var lim = row[i + 1].lx - half(row[i + 1]) - half(row[i]); if (row[i].lx > lim) row[i].lx = lim; }
      }
    });
    var m = pts.map(function (p, i) {
      var yEnd = p.top ? p.ly + 5 : p.ly - 13;
      return '<g class="mk" style="--i:' + i + '"><path d="M' + p.px.toFixed(1) + ' ' + p.py.toFixed(1) + ' V' + yEnd + ' H' + p.lx.toFixed(1) + '" stroke="#b9a4e6" stroke-width="1" fill="none"/>' +
        '<circle class="mk__ring" cx="' + p.px.toFixed(1) + '" cy="' + p.py.toFixed(1) + '" r="9"/><circle cx="' + p.px.toFixed(1) + '" cy="' + p.py.toFixed(1) + '" r="4.2" fill="#773DBD"/>' +
        '<text x="' + p.lx.toFixed(1) + '" y="' + p.ly + '" text-anchor="middle">' + p.label + '</text></g>';
    }).join('');
    out[k] = '<svg viewBox="0 0 400 200" style="overflow:visible" role="img" aria-label="Схема: где на технике прячем устройства">' +
      '<path d="M6 ' + GROUND + ' H394" stroke="#d2d2d7" stroke-width="1.2"/>' +
      '<image href="' + A[k].src + '" x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" width="' + w.toFixed(1) + '" height="' + h.toFixed(1) + '" preserveAspectRatio="xMidYMax meet"/>' + m + '</svg>';
  });
  return out;
})();

window.AVO_SEGMENTS = {
  cars: {
    title: 'Легковые автомобили',
    img: 'assets/img/band-traffic.jpg', alt: 'Поток машин на московской развязке вечером',
    risk: 'Легковую машину проще всего перепродать, поэтому ее угоняют чаще всего. Угонщики знают штатные места установки и ищут оборудование приборами.',
    levels: [
      ['Базовая', ['InCars 3.0 под обшивкой салона', 'или Pulse']],
      ['Двойная', ['Fleet Telematic + с блокировкой', 'второй маяк InCars 3.0 или Pulse']],
      ['Максимальная', ['Pharos', 'второй маяк', 'выезд Росгвардии']]
    ],
    idea: 'Одно устройство могут найти. Несколько, спрятанных в разных местах, почти никогда.',
    ct: 'История поездок, пробег и сроки ТО, простои, нарушения ПДД и ошибки автомобиля. Нужна корпоративным паркам и такси.'
  },
  trucks: {
    title: 'Грузовики и прицепы',
    img: 'assets/img/highway.jpg', alt: 'Ночная трасса на длинной выдержке',
    risk: 'Грузовик почти всегда в пути и часто в другом регионе. Его легко перегнать, спрятать на дальней стоянке или разобрать на узлы. Прицеп отцепляют за минуты, а питания у него нет.',
    levels: [
      ['Базовая', ['InCars 3.0 / 3.0 M', 'или Pulse / Pulse M']],
      ['Двойная', ['Pharos на тягач', 'второй маяк']],
      ['Максимальная', ['Pharos и маяк на тягач', 'Pulse M или InCars 3.0 M на каждый прицеп']]
    ],
    idea: 'Тягач и прицеп — два разных актива, и защищать нужно каждый.',
    ct: 'Маршруты и рейсы, простои под погрузкой и в пути, пробег и ТО, скоростной режим. Меньше пустых пробегов — прямые деньги перевозчика.'
  },
  special: {
    title: 'Спецтехника',
    img: 'assets/img/excavator.jpg', alt: 'Силуэт экскаватора на закате',
    risk: 'Экскаваторы и погрузчики редко угоняют своим ходом. Их тихо увозят на трале или сдают в субаренду без ведома владельца. Техника подолгу стоит без питания.',
    levels: [
      ['Базовая', ['InCars 3.0 / 3.0 M', 'или Pulse / Pulse M']],
      ['Двойная', ['Pharos', 'второй маяк']],
      ['Максимальная', ['Pharos', 'два маяка Pulse / Pulse M в разных местах рамы']]
    ],
    idea: 'Вы всегда знаете, на каком объекте техника и не уехала ли она оттуда.',
    ct: 'Работает техника или стоит: на каком объекте машина, сколько простаивает, когда ей нужно обслуживание.'
  },
  agro: {
    title: 'Сельхозтехника',
    img: 'assets/img/combine.jpg', alt: 'Комбайн убирает пшеницу',
    risk: 'Несколько месяцев в поле, потом долгий простой с отключенным аккумулятором. Поля далеко от вышек связи, а навесное оборудование снимают и продают отдельно.',
    levels: [
      ['Базовая', ['InCars 3.0 / 3.0 M', 'или Pulse / Pulse M']],
      ['Двойная', ['Pharos', 'второй маяк']],
      ['Максимальная', ['Pharos и маяк на машину', 'Pulse M на каждую жатку, сеялку, плуг']]
    ],
    idea: 'Защита работает и в сезон, и в межсезонье, и там, где нет мобильной связи.',
    ct: 'Где каждая машина в поле, сколько простаивает, не вышла ли за границы участка, когда подходит ТО.'
  },
  equipment: {
    title: 'Оборудование',
    img: 'assets/img/machining.jpg', alt: 'Узел металлообрабатывающего станка крупным планом',
    risk: 'Станки и линии стоят в цеху без своей сети и двигателя, спутниковый сигнал там слабый. Оборудование тихо вывозят на другой адрес, а на проверке показывают соседний такой же станок.',
    levels: [
      ['Базовая', ['Pulse или Pulse M', 'цифровая метка']],
      ['Двойная', ['Pulse внутри корпуса', 'Pulse M снаружи', 'метки на корпусе и узлах']],
      ['Линия', ['Pulse / Pulse M на каждую единицу', 'метка на каждый съемный узел']]
    ],
    idea: 'Для стационарного оборудования любое перемещение уже сигнал, и мы о нем узнаем.',
    ct: 'Здесь не нужна: подключаться не к чему. Работают маяк — где актив — и метка — тот ли это актив.'
  }
};
