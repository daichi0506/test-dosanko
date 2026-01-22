$(function () {
  $(".button a").on("click", function (event) {
    event.preventDefault(); // デフォルトのアンカー動作を阻止
    event.stopPropagation(); // イベントの伝播を停止
    $(".overlay").fadeToggle(200);
    $(this).toggleClass("btn-open btn-close");
    toggleBodyScroll();
  });

  $(".overlay").on("click", function (event) {
    event.stopPropagation(); // オーバーレイ内のクリックが外に伝播しないようにする
    $(".overlay").fadeToggle(200);
    $(".button a").toggleClass("btn-open btn-close");
    toggleBodyScroll();
  });
});

// フェード

$(function () {
  // ウィンドウをスクロールしたら…
  $(window).scroll(function () {
    // ウィンドウの高さを取得
    const wHeight = $(window).height();
    // スクロールした量を取得
    const wScroll = $(window).scrollTop();
    // それぞれのblockクラスに対して…
    $(".block").each(function () {
      // それぞれのblockクラスのウィンドウからの高さを取得
      const bPosition = $(this).offset().top;
      // スクロールした量が要素の高さを上回ったら
      // その数値にウィンドウの高さを引き、最後に200pxを足す
      if (wScroll > bPosition - wHeight + 200) {
        $(this).addClass("fadeIn");
      }
    });
  });
});

// AOS
AOS.init();

// Loading

window.onload = function () {
  const spinner = document.getElementById("loading");
  spinner.classList.add("loaded");
};

// もっと見るボタン

$(function () {
  $("button").on("click", function () {
    const t = $(".readmore-content");
    t.toggleClass("is_open");
    if (t.hasClass("is_open")) {
      const h = t.get(0).scrollHeight;
      t.css("height", h);
      $(this).text("元に戻す");
    } else {
      t.css("height", "");
      $(this).text("メニューを見る");
    }
  });
});
