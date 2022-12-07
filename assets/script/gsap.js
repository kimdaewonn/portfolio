gsap.registerPlugin(ScrollTrigger);

gsap.to(".load", {
    xPercent: 70,
    duration: 1,
    scrollTrigger: {
        trigger: ".load",
        start: "top 30%",
        end: "top 80%",
        scrub: 5,    // 스무스하게 슬라이드 효과 / 숫자로 쓸 수도 있음.
        markers: {
            startColor: "blue",
            endColor: "red",
            fontSize: "20px"
        },
        toggleActions: "restart none none none",
        scrub : 5,
    },
});



gsap.to(".about1_img1", {
    yPercent: 3,
    duration: 3,
    scrollTrigger: {
        trigger: ".about1_img1",
        start: "top 30%",
        end: "top 80%",
        scrub: 5,    // 스무스하게 슬라이드 효과 / 숫자로 쓸 수도 있음.
        markers: {
            startColor: "blue",
            endColor: "red",
            fontSize: "20px"
        },
        // toggleClass: "red",
        toggleActions: "restart none none none",
        // pin: true,
        // pinSpacing: false,
        scrub : 5,
    },
});
gsap.to(".about2_img1", {
    yPercent: 3,
    duration: 3,
    scrollTrigger: {
        trigger: ".about2_img1",
        start: "top 30%",
        end: "top 80%",
        scrub: 5,    // 스무스하게 슬라이드 효과 / 숫자로 쓸 수도 있음.
        markers: {
            startColor: "blue",
            endColor: "red",
            fontSize: "20px"
        },
        // toggleClass: "red",
        toggleActions: "restart none none none",
        // pin: true,
        // pinSpacing: false,
        scrub : 5,
    },
});































        //두개쓰기
// gsap.to('.load', {
//     xPercent: -10,opacity:0,duration:0.1,scrub:5,
//     immediateRender: false,
//     scrollTrigger: {
//       trigger: '.load',
//       scrub: true,
//       markers: true,
//     }
//   });

//   gsap.to('.load', {
//     xPercent: 10, opacity:1,duration:1,scrub:5,
//     immediateRender: false,
//     scrollTrigger: {
//       trigger: '.load',
//       scrub: true,
//       markers: true,
//     }
//   });



    //fromto
// ScrollTrigger.create({
//     trigger: ".load",
//     scrub: 5,
//     animation: gsap.fromTo(
//       ".about_title",
//       {
//         xPercent: 10,
//         yPercent: 0,
//       },
//       {
//         xPercent: 100,
//         yPercent: 0,
//       }
//     ),
//   });