
console.log("Starting scrollTrigger...")

gsap.timeline({
    scrollTrigger: {
        trigger: "#panel",
        start: 'top top',
        end: "bottom center",
        pin: true,
        scrub: true,
    }
})
    .from("#BMW", {
        scale: 0.05,
        y: -60
    })

