gsap.registerPlugin(ScrollTrigger);
// section1

// 오른쪽 다리
const leg1 = gsap.timeline({repeat: 100, yoyo: true});
leg1.to(".sec1 .img .img1", {x: 500,y:500, duration: 1.5, rotation: 30})
.to(".sec1 .img .img1", {x: 200,y:100, duration: 1.5, rotation: -30})
.to(".sec1 .img .img1", {x: 100,y:100, duration: 1.5, rotation: 20})
// 왼쪽 다리
const leg2 = gsap.timeline({repeat: 100, yoyo: true});
leg2.to(".sec1 .img .img2", {x:-300,y:-500, duration: 1.5, rotation: 30})
.to(".sec1 .img .img2", {x: -200,y:100, duration: 1.5, rotation: -30})
.to(".sec1 .img .img2", {x: -100,y:100, duration: 1.5, rotation: 20})

// 메인 텍스트
const main_text = gsap.timeline({ yoyo:true});
main_text.to(".main_text", {x:0,y:300, duration: 0.1,opacity:0,})
.to(".main_text", {x:0,y:0, duration: 1,opacity:1,})




// gsap.to(".main_text", {
//     x: 1000,
//     duration: 3,
//     scrollTrigger: {
//         trigger: ".main_text",
//         start: "top 70%",
//         end: "top 30%",
//         markers: {
//             startColor: "blue",
//             endColor: "purple",
//             fontSize: "30px"
//         },
//         toggleClass: "red",
//          toggleActions: "restart pause rssume restet",
//     },
// });
