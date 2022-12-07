gsap.registerPlugin(ScrollTrigger);

gsap.to(".about1_img1", {
    yPercent: 3,
    duration: 3,
    scrollTrigger: {
        trigger: ".about1_img1",
        start: "top top",
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