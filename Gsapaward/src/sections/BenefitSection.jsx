
import { useGSAP } from '@gsap/react'
import ClipPathTitle from '../componenets/ClipPathTitle'
import gsap from 'gsap'

const BenefitSection = () => {
useGSAP(() => {
    const revealTl = gsap.timeline({
        delay : 1.5,
        scrollTrigger : {
            trigger : ".benefit-section",
            start : "top 60%",
            end : "top top",
            scrub : 1,
            // pin : true
        }
    })

    revealTl.to(".benefit-section .first-title", {
        duration : 1,
        opacity : 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease : "circ.out",
    })
    revealTl.to(".benefit-section .second-title", {
        duration : 1,
        opacity : 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease : "circ.out",
    })
    revealTl.to(".benefit-section .third-title", {
        duration : 1,
        opacity : 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease : "circ.out",
    })
    revealTl.to(".benefit-section .fourth-title", {
        duration : 1,
        opacity : 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease : "circ.out",
    })
})


  return (
<section className='benefit-section' >
<div className='container mx-auto pt-20' >
    <div className='col-center' >
        <p  >Unlock the Advantages: <br /> Explore the Key Benefits of Choosing SPYLT</p>
<div className='mt-20 col-center' >
  <ClipPathTitle title={"shelf stable"} color={"#faeade"} bg={"#c88e64"} className={"first-title"} borderColor={"#222123"} />
  <ClipPathTitle title={"Protine + Caffine"} color={"#222123"} bg={"#faeade"} className={"second-title"} borderColor={"#222123"} />
  <ClipPathTitle title={"Infinitely recyclable"} color={"#faeade"} bg={"#7F3B2D"} className={"third-title"} borderColor={"#222123"} />
  <ClipPathTitle title={"Lactose Free"} color={"#2E2D2F"} bg={"#FED775"} className={"fourth-title"} borderColor={"#222123"} />
</div>

<div className='md:mt-0 mt-10' >
    <p> And much more...</p>
</div>

    </div>
</div>

</section>
  )
}

export default BenefitSection