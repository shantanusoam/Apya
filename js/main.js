// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";


let tl = gsap.timeline({
    scrollTrigger:{trigger:".composition__photo--p2",
    start:"center center",
    end: () => "+=" + document.querySelector(".composition__photo--p2").offsetWidth,
    markers: true,
    scrub:3,
    pin:true,
    toggleActions:"restart play pause pause"}
})

tl.to(".composition__photo--p2",
{
	x: 200,
rotation:360,
duration: 3}
)
.to(".composition__photo--p2",{
    backgroundColor: "green",
    duration:1
})
.to(".composition__photo--p2",{
    x:0,
    duration:3
})

