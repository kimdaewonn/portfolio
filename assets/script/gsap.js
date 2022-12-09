gsap.to(".sec2 .load span, .tx1", {
    xPercent: -40,
    scrollTrigger: {
        scrub: 1,
    }
})
gsap.to(".tx2", {
    xPercent: 40,
    scrollTrigger: {
        scrub: 1,
    }
})
gsap.to(".sec1 .img .img1, .work-wrap .work .right .img, .work-wrap .work .left .img, .script_wrap .script .top .img", {
    yPercent: -80,
    scrollTrigger: {
        scrub: 1,
    }
})
gsap.to(".sec1 .img .img2", {
    yPercent: 80,
    scrollTrigger: {
        scrub: 1,
    }
})
        // setTimeout(() => {
//     let mainTl = gsap.timeline();
   
//     mainTl.to(".txt1 span", {duration: 0.4, y: 0, opacity:1, stagger: 0.1, ease: Circ.easeOut})
//     mainTl.to(".txt2 span", {duration: 0.4, y: 0, opacity:1, stagger: 0.1, ease: Circ.easeOut})
//     mainTl.to("#section1 .img", {duration: 0.7, opacity:1, ease: Power1.easeOut})
//     mainTl.to("#header", {duration: 0.7, top:0, ease: Power1.easeOut})
// }, 2000);