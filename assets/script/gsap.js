// section1

// 오른쪽 다리
const tl1 = gsap.timeline({repeat: 100, yoyo: true});
tl1.to(".sec1 .img .img1", {x: 500,y:500, duration: 1, rotation: 30})
.to(".sec1 .img .img1", {x: 200,y:100, duration: 1, rotation: -30})
.to(".sec1 .img .img1", {x: 100,y:100, duration: 1, rotation: 20})
// 왼쪽 다리
const tl2 = gsap.timeline({repeat: 100, yoyo: true});
tl2.to(".sec1 .img .img2", {x:-300,y:-500, duration: 1, rotation: 30})
.to(".sec1 .img .img2", {x: -200,y:100, duration: 1, rotation: -30})
.to(".sec1 .img .img2", {x: -100,y:100, duration: 1, rotation: 20})

