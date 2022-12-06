// 오른쪽 다리
const tl = gsap.timeline({repeat: 2, yoyo: true});
tl.to(".sec1 .img .img1", {x: 1000, duration: 5, rotation: 10000, skewY: 1,  borderRadius: 0})
.to(".sec1 .img .img1", {y: 500, duration: 5, rotation: 0, skewY: 3,  borderRadius: 100})
.to(".sec1 .img .img1", {x: 0, duration: 5, rotation: 300, skewY: 1,  width: 400})
.to(".sec1 .img .img1", {y: 0, duration: 5, rotation: 0,  width: 200})
// 왼쪽 다리git

