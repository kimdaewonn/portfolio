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
				end: "+=3600",
				markers: true,
			},
		});
	},
});
// 아래 다리
ScrollTrigger.matchMedia({
	"(min-width: 900px)": function () {
		ScrollTrigger.create({
			trigger: ".section2",
			scrub: 9,
            start:"top top",
			end: "+=3600",
			animation: gsap.fromTo(
				".script_wrap .js_intro .right .img1",
				{
					xPercent:0,
					rotation:-20,
				},
                {
					xPercent:500,
					rotation:-50,

				},
			),
		});
    },
});
// 위 다리
ScrollTrigger.matchMedia({
	"(min-width: 900px)": function () {
		ScrollTrigger.create({
			trigger: ".section2",
			scrub: 11,
            start:"top top",
			end: "+=3600",
			animation: gsap.fromTo(
				".script_wrap .js_intro .right .img2",
				{
					xPercent:0,
					rotation:0,
				},
                {
					xPercent:500,
					rotation:50,

				},
			),
		});
    },
});
ScrollTrigger.matchMedia({
	"(min-width: 900px)": function () {
		ScrollTrigger.create({
			trigger: ".section2",
			scrub: 11,
            start:"top top",
			end: "+=3600",
			animation: gsap.fromTo(
				".script_wrap .js_intro .right .img2",
				{
					xPercent:0,
					rotation:0,
				},
                {
					xPercent:500,
					rotation:50,

				},
			),
		});
    },
});
// 가로모드 - 제목 나타내기
// game
// gsap.to(".gameH", {
// 	scrollTrigger: {
// 		trigger: ".section1",
// 		scrub: 1,
//         start: "top 90%",
// 	},
// 	    opacity: 1,
// });
// gsap.to(".gameH", {
// 	scrollTrigger: {
// 		trigger: ".section1",
// 		scrub: 1,
//         start: "top 10%",
// 	},
// 	    opacity: 0,
// });

// // parallax
// gsap.to(".parallaxH", {
// 	scrollTrigger: {
// 		trigger: ".section2",
// 		scrub: 1,
//         start: "top",
// 	},
// 	    opacity: 1,
// });
// gsap.to(".parallaxH", {
// 	scrollTrigger: {
// 		trigger: ".section2",
// 		scrub: 1,
//         start: "bottom",
// 	},
// 	    opacity: 0,
// });