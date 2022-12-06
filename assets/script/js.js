// 데이터 애니에미션
// const s = skrollr.init();

// 스크롤탑
function scroll() {
    let scrollTop = window.screenY || document.documentElement.scrollTop;
    document.querySelector(".scrollTop").innerText = Math.ceil(scrollTop);
    requestAnimationFrame(scroll);
  }
  scroll();
