var tl=gsap.timeline();
     tl.to(".page1>h1",{
          transform:"translateX(-220%)",
          fontWeight:100,
          scrollTrigger:{
             trigger:".page1",
             scroller:"body",
             start:"top 0%",
             end:"top -200%",
             scrub:1,
             pin: true
          }
     })
     tl.to(".video , .page2 , .page1",{
          backgroundColor: "#fff",
          duration:0.1,
          scrollTrigger:{
             trigger:".video",
             scroller:"body",
             start:"top 30%",
             end:"top 10%",
             scrub:0.5
          }
     })
     tl.from(".page2left h1,.page2left p",{
          y:100,

          scrollTrigger:{
               trigger:".page2left",
               scroller:"body",
               start:"top 80%",
               end:"top 50%",
               scrub:2,
          }
     })
     tl.from(".page2right h1",{
          transform:"translatey(200%)",
          opacity:0,
          scrollTrigger:{
               trigger:".page2right",
               scroller:"body",
               start:"top 10%",
               end:"top -100",
               scrub:3,
          }
     })
     tl.from(".img",{
          height:'20vh',
          stagger:5,
          duration:3,
          scrollTrigger:{
               trigger:".img",
               scroller:"body",
               start:"top 80%",
               scrub:0.5
          }
     })
     tl.to("#underline, .page3 , .page4",{
          backgroundColor: "#000",
          color:"#fff",
          scrollTrigger:{
             trigger:".page4",
             scroller:"body",
             start:"top 70%",
             end:"top 60%",
             scrub:2
          }
     })
     tl.to(".page5, .cards, .page5 h1 , .page5 h4, .underline,.page4",{
          backgroundColor:"#fff",
          color:"#000",
          scrollTrigger:{
               trigger:".cards",
               scroller:"body",
               start:"top 20%",
               end:"top -20%",
               scrub:2
               
          }
     })