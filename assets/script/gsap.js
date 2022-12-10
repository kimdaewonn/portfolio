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
gsap.to(".sec1 .img .img1, .work-wrap .work .right .img, .work-wrap .work .left .img",{
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

//가로모드
const sections = gsap.utils.toArray(".section");
ScrollTrigger.matchMedia({
	"(min-width: 1000px)": function () {
		gsap.to(sections, {
			xPercent: -100 * (sections.length - 1),
			ease: "none",
			scrollTrigger: {
				trigger: "#section4",
				pin: true,
				scrub: 1,
				end: "+=3000",
				markers: true,
			},
		});
	},
});

ScrollTrigger.matchMedia({
	"(min-width: 900px)": function () {
		ScrollTrigger.create({
			trigger: ".section3",
			scrub: 1,
			animation: gsap.fromTo(
				".section_flex .one",
				{
					opacity: 0,
				},
				{
					opacity: 1,
				}
			),
		});
    },
});







// gsap.to(".section_flex .one", {
// 	scrollTrigger: {
// 		trigger: ".section2",
// 		scrub: 1,
// 	},
// 	    opacity: 1,
// });


// ScrollTrigger.create({
// 	trigger: ".section_flex .one",
// 	scrub: 1,
// 	delay: 1,
//     opacity: 1,
// });



// gsap.to(".section_flex .one", {
//     scrollTrigger: {
//         trigger: ".section_flex .one",
//         scrub: 1,
//         opacity: 1,
//         start: "top top",
//         end: "top 20%",
//         markers: true,
//     },
// });





































        // setTimeout(() => {
//     let mainTl = gsap.timeline();
   
//     mainTl.to(".txt1 span", {duration: 0.4, y: 0, opacity:1, stagger: 0.1, ease: Circ.easeOut})
//     mainTl.to(".txt2 span", {duration: 0.4, y: 0, opacity:1, stagger: 0.1, ease: Circ.easeOut})
//     mainTl.to("#section1 .img", {duration: 0.7, opacity:1, ease: Power1.easeOut})
//     mainTl.to("#header", {duration: 0.7, top:0, ease: Power1.easeOut})
// }, 2000);