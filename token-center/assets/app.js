/* Token Center · 渲染与交互
   数据全部来自 assets/data.js，本文件只负责画页面和筛选。 */

(function () {
  'use strict';

  var CAT_LABEL = { model: '模型额度', tool: 'AI 工具', event: '限时活动' };
  var FREE_CLASS = {
    '长期免费': 'free-long',
    '限时活动': 'free-event',
    '注册赠送': 'free-gift',
    '每日赠送': 'free-day',
    '免费层': 'free-tier',
    '试用': 'free-tier'
  };

  var state = { q: '', cat: 'all', onlyDl: false };

  function $(id) { return document.getElementById(id); }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  /* 截止日：返回文案与样式类 */
  function deadline(dl) {
    if (!dl) return null;
    var p = dl.split('-');
    var end = new Date(+p[0], +p[1] - 1, +p[2]);
    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var days = Math.round((end - today) / 86400000);
    var md = p[1] + '-' + p[2];
    if (days < 0) return { text: md + ' 已结束', cls: 'over', days: days };
    if (days === 0) return { text: '今天截止', cls: 'urgent', days: days };
    if (days <= 7) return { text: '剩 ' + days + ' 天 · ' + md, cls: 'soon', days: days };
    return { text: '截止 ' + md, cls: '', days: days };
  }

  function sortItems(list) {
    return list.slice().sort(function (a, b) {
      if (!!a.hot !== !!b.hot) return a.hot ? -1 : 1;
      var da = a.dl ? 1 : 0, db = b.dl ? 1 : 0;
      if (da !== db) return db - da; // 有截止日的靠前，提醒别错过
      return 0;
    });
  }

  function cardHTML(it, i) {
    var d = deadline(it.dl);
    var cat = CAT_LABEL[it.cat] || '额度';
    var freeCls = FREE_CLASS[it.free] || 'free-tier';
    var models = (it.intl ? '海外 · ' : '') + it.models;
    /* 分类名与免费类型同名时只留一个，避免“限时活动 限时活动”重复 */
    var showFlag = (cat !== it.free);
    /* 入场错峰：最多 12 张，之后不再叠加延迟 */
    var delay = Math.min(i, 12) * 40;

    return '<a class="card" style="--d:' + delay + 'ms" href="' + esc(it.url) + '" target="_blank" rel="noopener">' +
      '<div class="c-top">' +
        '<span class="cat">' + esc(cat) + '</span>' +
        (showFlag ? '<span class="flag ' + freeCls + '">' + esc(it.free) + '</span>' : '') +
        (it.hot ? '<span class="hot">推荐</span>' : '') +
      '</div>' +
      '<div class="c-name">' + esc(it.n) + '<span class="go">↗</span></div>' +
      '<div class="c-models" title="' + esc(models) + '">' + esc(models) + '</div>' +
      '<div class="c-quota">' + esc(it.quota) + '</div>' +
      '<div class="c-foot">' +
        '<span class="c-link">官方入口</span>' +
        (d ? '<span class="deadline ' + d.cls + '">' + esc(d.text) + '</span>' : '') +
      '</div>' +
    '</a>';
  }

  function matches(it) {
    if (state.cat !== 'all' && it.cat !== state.cat) return false;
    if (state.onlyDl && !it.dl) return false;
    if (!state.q) return true;
    var hay = (it.n + ' ' + it.models + ' ' + it.quota + ' ' + it.free + ' ' + CAT_LABEL[it.cat]).toLowerCase();
    return hay.indexOf(state.q) !== -1;
  }

  function renderList() {
    var all = sortItems(DATA.items);
    var hit = all.filter(matches);
    var grid = $('grid');

    if (!hit.length) {
      grid.innerHTML = '<div class="empty">没有匹配的 token。换个关键词，或点“全部”重置筛选。</div>';
    } else {
      grid.innerHTML = hit.map(cardHTML).join('');
    }

    var limited = hit.filter(function (x) { return x.dl; }).length;
    $('resultCount').textContent = hit.length + ' 条' + (limited ? ' · ' + limited + ' 条有截止日' : '');
  }

  function countBy(cat) {
    return DATA.items.filter(function (x) { return cat === 'all' || x.cat === cat; }).length;
  }

  function renderRows(host, list, muted) {
    host.innerHTML = list.map(function (x) {
      return '<a class="row' + (muted ? ' muted' : '') + '" href="' + esc(x.url) + '" target="_blank" rel="noopener">' +
        '<div class="row-top">' +
          '<span class="row-name">' + esc(x.n) + '</span>' +
          '<span class="row-url">' + esc(x.url.replace(/^https?:\/\/(www\.)?/, '').split('/')[0]) + '</span>' +
        '</div>' +
        '<p class="row-why">' + esc(x.why) + '</p>' +
      '</a>';
    }).join('');
  }

  function setText(id, v) { var el = $(id); if (el) el.textContent = v; }

  /* 数字滚动：从 0 缓到目标值 */
  function countUp(el, target, dur) {
    if (!el) return;
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { el.textContent = target; return; }
    var t0 = performance.now();
    function step(t) {
      var p = Math.min(1, (t - t0) / dur);
      var e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * e);
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target;
    }
    requestAnimationFrame(step);
    /* 兜底：若窗口不可见导致 rAF 被节流，到点直接落到真实值 */
    setTimeout(function () { el.textContent = target; }, dur + 300);
  }

  /* 区块滚动进入 */
  function setupReveal() {
    var nodes = document.querySelectorAll('.section');
    if (!nodes.length) return;
    var supported = 'IntersectionObserver' in window;
    nodes.forEach(function (n) { n.classList.add('will-reveal'); });
    if (!supported) { nodes.forEach(function (n) { n.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.06 });
    nodes.forEach(function (n) { io.observe(n); });
  }

  /* 顶栏滚动态 */
  function setupNav() {
    var nav = document.querySelector('.nav');
    if (!nav) return;
    var on = function () { nav.classList.toggle('scrolled', window.scrollY > 10); };
    window.addEventListener('scroll', on, { passive: true });
    on();
  }

  function init() {
    var items = DATA.items || [];
    setText('stamp-date', DATA.updated);
    setText('foot-date', DATA.updated);
    setText('hero-count', items.length + ' 个');

    /* 统计数字从 0 滚动到真实值 */
    countUp($('stat-items'), items.length, 900);
    countUp($('stat-event'), countBy('event'), 900);
    countUp($('stat-watch'), (DATA.watch || []).length, 900);
    countUp($('stat-retired'), (DATA.retired || []).length, 900);

    ['all', 'model', 'tool', 'event'].forEach(function (c) {
      var el = $('c-' + c);
      if (el) el.textContent = countBy(c);
    });

    var wc = $('watch-count'), rc = $('retired-count');
    if (wc) wc.textContent = (DATA.watch || []).length + ' 个平台';
    if (rc) rc.textContent = (DATA.retired || []).length + ' 个平台';

    renderRows($('watchRows'), DATA.watch || [], false);
    renderRows($('retiredRows'), DATA.retired || [], true);
    renderList();
    setupReveal();
    setupNav();

    /* 分类筛选 */
    document.querySelectorAll('.chip').forEach(function (btn) {
      btn.addEventListener('click', function () {
        document.querySelectorAll('.chip').forEach(function (b) { b.classList.remove('on'); });
        btn.classList.add('on');
        state.cat = btn.dataset.cat;
        renderList();
      });
    });

    /* 只看有截止日 */
    var onlyDl = $('onlyDl');
    onlyDl.addEventListener('click', function () {
      state.onlyDl = !state.onlyDl;
      onlyDl.classList.toggle('on', state.onlyDl);
      renderList();
    });

    /* 搜索 */
    var q = $('q'), timer = null;
    q.addEventListener('input', function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        state.q = q.value.trim().toLowerCase();
        renderList();
      }, 90);
    });

    /* 斜杠聚焦、Esc 清空 */
    document.addEventListener('keydown', function (e) {
      if (e.key === '/' && document.activeElement !== q) {
        e.preventDefault();
        q.focus();
      } else if (e.key === 'Escape' && document.activeElement === q) {
        q.value = '';
        state.q = '';
        renderList();
        q.blur();
      }
    });

    /* 移动端菜单 */
    var toggle = $('navToggle'), drawer = $('navDrawer');
    toggle.addEventListener('click', function () {
      var open = document.body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        document.body.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
