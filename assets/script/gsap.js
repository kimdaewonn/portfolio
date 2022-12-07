gsap.registerPlugin(ScrollTrigger);
// section1

// 오른쪽 다리
const leg1 = gsap.timeline({repeat: 100, yoyo: true});
leg1.to(".sec1 .img .img1", {x: 500,y:500, duration: 1, rotation: 30,})
.to(".sec1 .img .img1", {x: 200,y:100, duration: 1, rotation: -30})
.to(".sec1 .img .img1", {x: 100,y:100, duration: 1, rotation: 20})
// 왼쪽 다리
const leg2 = gsap.timeline({repeat: 100, yoyo: true});
leg2.to(".sec1 .img .img2", {x:-300,y:-500, duration: 1, rotation: 30})
.to(".sec1 .img .img2", {x: -200,y:100, duration: 1, rotation: -30})
.to(".sec1 .img .img2", {x: -100,y:100, duration: 1, rotation: 20})

// 메인 텍스트
const main_text = gsap.timeline({ yoyo:true});
main_text.to(".main_text", {x:0,y:0, duration: 1,opacity:1,})
.to(".main_text", {x:0,y:0, duration: 1,opacity:0,})

// 나
const main_img = gsap.timeline({ yoyo:true});
main_img.to(".sec1 .img .img3", {x:0,y:300, duration: 0.1,scale:0,})
.to(".sec1 .img .img3", {x:0,y:0, duration: 3,scale:1,})
.to(".sec1 .img .img3", {x:0,y:500, duration: 1,scale:0,opacity:0,})


// section2
// 상자1
const box1 = gsap.timeline({repeat: 100, yoyo: true});
box1.to(".sec2 .img .img1", {x: 50,y:200, duration: 1, rotation: 30,})
.to(".sec2 .img .img1", {x: 50,y:100, duration: 1, rotation: -30})
// 상자2
const box2 = gsap.timeline({repeat: 100, yoyo: true});
box2.to(".sec2 .img .img2", {x: 100,y:200, duration: 1, rotation: 30,})
.to(".sec2 .img .img2",{x: 100,y:100, duration: 1, rotation: -30})
// 상자3
const box3 = gsap.timeline({repeat: 100, yoyo: true});
box3.to(".sec2 .img .img3", {x: 100,y:200, duration: 1, rotation: 30,})
.to(".sec2 .img .img3",{x: 100,y:100, duration: 1, rotation: -30})
// 상자4
const box4 = gsap.timeline({repeat: 100, yoyo: true});
box4.to(".sec2 .img .img4", {x: 100,y:200, duration: 1, rotation: 30,})
.to(".sec2 .img .img4",{x: 100,y:100, duration: 1, rotation: -30})
// 상자5
const box5 = gsap.timeline({repeat: 100, yoyo: true});
box5.to(".sec2 .img .img5", {x: 100,y:200, duration: 1, rotation: 30,})
.to(".sec2 .img .img5",{x: 100,y:100, duration: 1, rotation: -30})

// 


gsap.to(".about_title", {
    x: 1200,
    duration: 3,
    scrollTrigger: {
        trigger: ".about_title",
        start: "top top",
        end: "top 20%",
        scrub: true,
        // scrub: 4,    // 스무스하게 슬라이드 효과 / 숫자로 쓸 수도 있음.
        markers: {
            startColor: "blue",
            endColor: "green",
            fontSize: "20px"
        },
        toggleClass: "red",
        toggleActions: "restart none none none",
        // pin: true,
        // pinSpacing: false,
        scrub : 5,
    },
});
