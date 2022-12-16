
// hamburger
const btnHam = document.querySelector(".header__ham");
const btnMenu = document.querySelector(".header__menu");
const btnMenuList = btnMenu.querySelectorAll("ul li a");

btnHam.addEventListener("click", () => {
	btnHam.classList.toggle("active");
	btnMenu.classList.toggle("active");
	document.body.classList.toggle("fixed");
});

btnMenuList.forEach((list)=>{
	list.addEventListener("click", ()=>{
		document.body.classList.remove("fixed");
		btnMenu.classList.remove("active");
		btnHam.classList.remove("active");
	});
})

window.addEventListener("resize", ()=>{
	let width = window.innerWidth;
	if(width > 1300){
		document.body.classList.remove("fixed");
		btnMenu.classList.remove("active");
		btnHam.classList.remove("active");
	} 
});
	// 부드러운 메뉴이동
	document.querySelectorAll(".header__menu a").forEach(el => {
	el.addEventListener("click", e => {
		e.preventDefault();
		// 이동 막음
	document.querySelector(el.getAttribute("href")).scrollIntoView({behavior: "smooth"});
	})
});

// mouseover
const mouse3DWrap = document.querySelector('.about .img');
const speed = 1;
let x = 0;
let y = 0;
let followX = 0;
let followY = 0;

function mouse3Danimate1() {
  x += (followX - x) * speed;
  y += (followY - y) * speed;
  mouse3DWrap.style.transform = `translate(-50%,-50%) perspective(1000px) rotateX(${-y}deg) rotateY(${-x}deg)`;
  requestAnimationFrame(mouse3Danimate1);
}

window.addEventListener('mousemove', (e) => {
  let mouseX = Math.max(-100, Math.min(100,window.innerWidth / 2 - e.clientX));
  let mouseY = Math.max(-100, Math.min(100,window.innerHeight / 2 - e.clientY));
  
   followX = (12 * mouseX) / 100;
   followY = (10 * mouseY) / 100;
});

window.addEventListener('keydown', (e)=>{
  switch(e.keyCode) {
    case 37:
      followX = 12;
      break;
    case 38:
      followY = 10;
      break;
    case 39:
      followX = -12;
      break;
    case 40:
      followY = -10;
      break;
    default:
      break;
  }
});

mouse3Danimate1();


// main
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
        const Box1 = document.querySelector(".skill_top .img1");
        const Box2 = document.querySelector(".skill_top .img2");
        const Box3 = document.querySelector(".skill_top .img3");
        const Box4 = document.querySelector(".skill_top .img4");
        const Box5 = document.querySelector(".skill_bot .img1");
        const Box6 = document.querySelector(".skill_bot .img2");
        const text1 = document.querySelector(".skill_top .text1");
        const text2 = document.querySelector(".skill_top .text2");
        const text3 = document.querySelector(".skill_top .text3");
        const text4 = document.querySelector(".skill_top .text4");
        const text5 = document.querySelector(".skill_bot .text1");
        const text6 = document.querySelector(".skill_bot .text2");

        window.addEventListener("mousemove", e=>{
            gsap.to(cursor, {duration: 0.3, left: e.pageX -5, top: e.pageY -5});

			// click
			Box1.addEventListener("mouseover",()=>{
				text1.style.display="block"
			})
			text1.addEventListener("mouseleave",()=>{
				text1.style.display="none"
			})

			Box2.addEventListener("mouseover",()=>{
				text2.style.display="block"
			})
			text2.addEventListener("mouseleave",()=>{
				text2.style.display="none"
			})

			Box3.addEventListener("mouseover",()=>{
				text3.style.display="block"
			})
			text3.addEventListener("mouseleave",()=>{
				text3.style.display="none"
			})

			Box4.addEventListener("mouseover",()=>{
				text4.style.display="block"
			})
			text4.addEventListener("mouseleave",()=>{
				text4.style.display="none"
			})

			Box5.addEventListener("mouseover",()=>{
				text5.style.display="block"
			})
			text5.addEventListener("mouseleave",()=>{
				text5.style.display="none"
			})

			Box6.addEventListener("mouseover",()=>{
				text6.style.display="block"
			})
			text6.addEventListener("mouseleave",()=>{
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
// 타임라인

// 메인

// 오른쪽 다리
const tl2 = gsap.timeline({repeat: 5, yoyo: true});
        tl2.to(".sec1 .img .img1", {x: 1000, duration: 2,})
        .to(".sec1 .img .img1", {x: 0 ,y:-200, duration: 2,})

// 왼쪽 다리
const tl1 = gsap.timeline({repeat: 5, yoyo: true});
        tl1.to(".sec1 .img .img2", {x: -1000, duration: 2,})
        .to(".sec1 .img .img2", {x: 0 ,y:-200, duration: 2,})

// 어바웃
const aboutH = gsap.timeline({
	yoyo:true,
	scrollTrigger : {
		trigger: ".load ",
		markers: true,
		start: "center",
		end: "top 90%",
		scrub: 5,
	}
})
aboutH.to(".about h3", {x: 1000,scale:0, duration: 0.1,})
.to(".about h3", {x:0 ,scale:1, duration: 1,})


// 팀
		const phpT = gsap.timeline({
			yoyo:true,
			scrollTrigger : {
				trigger: "#section5 h3",
				markers: true,
				start: "top top",
				end: "top 90%",
				scrub: 5,
			}
        })
        phpT.to(".phpT .right .img", {x: 1000,scale:0, duration: 0.1,})
        .to(".phpT .right .img", {x:0 ,scale:1, duration: 1,})

		const reactT = gsap.timeline({
			yoyo:true,
            scrollTrigger : {
                trigger: ".phpT .right .img",
                markers: true,
                start: "bottom bottom",
				// end: "top 90%",
                scrub: 5,
            }
        })
        reactT.to(".reactT .left .img", {x: -1000,scale:0, duration: 0.1,})
        .to(".reactT .left .img", {x:0 ,scale:1, duration: 1,})
// contact














        // const tl = gsap.timeline({
		// 	yoyo:true,
		// 	repeat:50,
        //     scrollTrigger : {
        //         trigger: ".square",
        //         markers: true,
        //         start: "top top",
		// 		end: "top 100%",
        //         scrub: 100,
        //     }
        // })
        // tl.to(".square", {x: 1000, duration: 2, rotation: 100,borderRadius: 0})
        // .to(".square", {y: 500, duration: 2, rotation: 0, borderRadius: 100})
        // .to(".square", {x: 0, duration: 2, rotation: 300, width: 400})
        // .to(".square", {y: 0, duration: 2, rotation: 0, width: 200})

        // tl.to(".square", {x: 1000, duration: 2, rotation: 100, skewY: 1, borderRadius: 0})
        // .to(".square", {y: 500, duration: 2, rotation: 0, skewY: 3, borderRadius: 100})
        // .to(".square", {x: 0, duration: 2, rotation: 300, skewY: 1, width: 400})
        // .to(".square", {y: 0, duration: 2, rotation: 0, width: 200})





		// const tl = gsap.timeline({repeat: 2, yoyo: true});

        // tl.to(".square", {x: 1000, duration: 5, rotation: 300, skewY: 1,  borderRadius: 0})
        // .to(".square", {y: 500, duration: 5, rotation: 0, skewY: 3,  borderRadius: 100})
        // .to(".square", {x: 0, duration: 5, rotation: 300, skewY: 1,  width: 400})
        // .to(".square", {y: 0, duration: 5, rotation: 0,  width: 200})