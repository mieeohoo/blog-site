'use strict';

window.onload = function () {
  let Animation = function () {
    // アイコンの位置を取得
    let pageTop = document.getElementById('top-btn');

    // 要素の位置座標を取得
    let rect = pageTop.getBoundingClientRect();

    // トップからの距離
    let scrollTop = rect.top + window.pageYOffset;

    if (scrollTop > 200) {
      pageTop.classList.add('show');
    }
    else {
      pageTop.classList.remove('show');
    }
  }
  window.addEventListener('scroll', Animation);
}
