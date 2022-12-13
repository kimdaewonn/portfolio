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
// 마우스
		// over
		const cursor = document.querySelector(".mouse__cursor");
        const code = document.querySelectorAll(".code");
        const view = document.querySelectorAll(".view");
        const study = document.querySelectorAll(".study_btn");

		// click
        const Box5 = document.querySelector(".skill_bot .img1");
        const Box6 = document.querySelector(".skill_bot .img2");
        const text5 = document.querySelector(".skill_bot .text1");
        const text6 = document.querySelector(".skill_bot .text2");

        window.addEventListener("mousemove", e=>{
            gsap.to(cursor, {duration: 0.3, left: e.pageX -5, top: e.pageY -5});

			// click
			Box5.addEventListener("click",()=>{
				text5.style.display="block"
			})
			text5.addEventListener("click",()=>{
				text5.style.display="none"
			})
			Box6.addEventListener("click",()=>{
				text6.style.display="block"
			})
			text6.addEventListener("click",()=>{
				text6.style.display="none"
			})
	

			// over
			code.forEach(code => {
                code.addEventListener("mouseenter", () =>{
                    cursor.classList.add("codeactive");
                });
                code.addEventListener("mouseleave", () =>{
                    cursor.classList.remove("codeactive");
                });
            });
			view.forEach(view => {
                view.addEventListener("mouseenter", () =>{
                    cursor.classList.add("viewactive");
                });
                view.addEventListener("mouseleave", () =>{
                    cursor.classList.remove("viewactive");
                });
            });
			study.forEach(study => {
                study.addEventListener("mouseenter", () =>{
                    cursor.classList.add("studyactive");
                });
                study.addEventListener("mouseleave", () =>{
                    cursor.classList.remove("studyactive");
                });
            });

		});