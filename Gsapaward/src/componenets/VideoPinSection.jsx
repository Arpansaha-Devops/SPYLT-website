import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import {useMediaQuery} from "react-responsive"

const VideoPinSection = () => {

  const isMobile = useMediaQuery({
    query : "(max-width : 768px)",
  });

useGSAP(() => {
  if (!isMobile) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".vd-pin-section",
        start: "-16% top",
        end: "200vh top",
        scrub: 0.8,
        // markers: true,
        pin: true
      }
    });

    tl.to(".video-box", {
      clipPath: "circle(100% at 50% 50%)",
      ease: "slow(0.1,0.1,false)"
    });
  }
}, [isMobile]);


  return (
    <section className="vd-pin-section" >
      <div style={{clipPath : isMobile
  ? "circle(100% at 50% 50%)"
  : "circle(9% at 50% 50%)"}} className="size-full video-box" >
        <video src="/videos/pin-video.mp4" playsInline muted loop autoPlay ></video>
        <div className="abs-center md:scale-100 scale-200" >
          <img src="/images/circle-text.svg" alt="circle" className="spin-circle"/>
          <div className="play-btn" >
            <img src="/images/play.svg" alt="playbtn" className="size-[3vw] ml-[.5vw]" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoPinSection