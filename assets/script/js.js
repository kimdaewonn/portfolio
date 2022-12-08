// 이질감
function scroll(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    document.querySelector("#parallax__info span").innerText = Math.ceil(scrollTop);

    document.querySelectorAll(".work").forEach(item =>{
       const target1 = item.querySelectorAll
       (".site_right1 .img1, .site_left2 .img1");
      //  const target2 = item.querySelector(".site_left2 .img1");
      //  const target3 = item.querySelector(".content__item__desc");
      //  const target4 = item.querySelector(".content__item__num");

       let offset1 = (scrollTop - item.offsetTop) * 0.1;
      //  let offset2 = (scrollTop - item.offsetTop) * 0.15;
      //  let offset3 = (scrollTop - item.offsetTop) * 0.2;

        gsap.to(target1, {duration: .3, y: offset1, ease: "power4.out"})
        // gsap.to(target2, {duration: .3, y: offset1, ease: "power4.out"})
        // gsap.to(target3, {duration: .3, y: offset2})
        // gsap.to(target4, {duration: .3, y: offset3, ease: "expo.out"})
    });
    
    requestAnimationFrame(scroll);
  }
  scroll();