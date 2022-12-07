// 이질감
function scroll(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    document.querySelector("#parallax__info span").innerText = Math.ceil(scrollTop);

    document.querySelectorAll(".work").forEach(item =>{
       const target1 = item.querySelector(".standard_right .img1");
       const target2 = item.querySelector(".content__item__desc");
       const target3 = item.querySelector(".content__item__num");

       let offset1 = (scrollTop - item.offsetTop) * 0.1;
       let offset2 = (scrollTop - item.offsetTop) * 0.15;
       let offset3 = (scrollTop - item.offsetTop) * 0.2;
       
        //    target1.style.transform = `translateY(${offset}px)`;
        //    target2.style.transform = `translateX(${offset2}px)`;

        gsap.to(target1, {duration: .3, y: offset1, ease: "power4.out"})
        gsap.to(target2, {duration: .3, y: offset2})
        gsap.to(target3, {duration: .3, y: offset3, ease: "expo.out"})
    });
    
    requestAnimationFrame(scroll);
  }
  scroll();