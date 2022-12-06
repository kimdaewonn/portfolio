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

// section2

// 나
gsap.to(".sec2 .img .img1", {
    x: -100,y:200,scale:0.6,
    duration: 2,
    scrollTrigger: {
        trigger: ".sec2 .img .img1",
        start: "top 100%",
        end: "top 0%",
        markers: {
            startColor: "blue",
            endColor: "purple",
            fontSize: "30px"
        },
         toggleActions: "restart pause rssume restet",
    },
});
// 상자1
gsap.to(".sec2 .img .img2",{
    x: 1020,opacity:0,
    duration: 2,
    scrollTrigger: {
        trigger: ".sec2 .img .img2",
        start: "top 100%",
        end: "top 0%",
        markers: {
            startColor: "blue",
            endColor: "purple",
            fontSize: "30px"
        },
         toggleActions: "restart pause rssume restet",
    },
});
// 상자2
gsap.to(".sec2 .img .img3",{
    x: 670,opacity:0,
    duration: 2,
    scrollTrigger: {
        trigger: ".sec2 .img .img3",
        start: "top 100%",
        end: "top 0%",
        markers: {
            startColor: "blue",
            endColor: "purple",
            fontSize: "30px"
        },
         toggleActions: "restart pause rssume restet",
    },
});
// 상자3
gsap.to(".sec2 .img .img4",{
    x: 350,opacity:0,
    duration: 2,
    scrollTrigger: {
        trigger: ".sec2 .img .img4",
        start: "top 100%",
        end: "top 0%",
        markers: {
            startColor: "blue",
            endColor: "purple",
            fontSize: "30px"
        },
         toggleActions: "restart pause rssume restet",
    },
});
// 상자5
gsap.to(".sec2 .img .img6",{
    x: -365,opacity:0,
    duration: 2,
    scrollTrigger: {
        trigger: ".sec2 .img .img6",
        start: "top 100%",
        end: "top 0%",
        markers: {
            startColor: "blue",
            endColor: "purple",
            fontSize: "30px"
        },
         toggleActions: "restart pause rssume restet",
    },
});
// name
gsap.to(".about_title",{
    x: 0,opacity:1,
    duration: 5,
    scrollTrigger: {
        trigger: ".about_title",
        start: "top 100%",
        end: "top 0%",
        markers: {
            startColor: "blue",
            endColor: "purple",
            fontSize: "30px"
        },
         toggleActions: "restart pause rssume restet",
    },
});