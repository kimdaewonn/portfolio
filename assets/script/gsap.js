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
	"(min-width: 300px)": function () {
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
if (window.matchMedia("(min-width: 400px)").matches) {
	/* 뷰포트 너비가 400 픽셀 이상 */
  } else {
	/* 뷰포트 너비가 400 픽셀 미만 */
  }
// 아래 다리
ScrollTrigger.matchMedia({
	"(min-width: 300px)": function () {
		ScrollTrigger.create({
			trigger: ".section2",
			scrub: 11,
            start:"top top",
			end: "+=3600",
			animation: gsap.fromTo(
				".script_wrap .js_intro .right .img1",
				{
					xPercent:0,
					rotation:-60,
				},
                {
					xPercent:500,
					rotation:-20,

				},
			),
		});
    },
});
// 위 다리
ScrollTrigger.matchMedia({
	"(min-width: 300px)": function () {
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
					yPercent:-40,
				},
                {
					xPercent:500,
					rotation:50,
					yPercent:60,

				},
			),
		});
    },
});
// 