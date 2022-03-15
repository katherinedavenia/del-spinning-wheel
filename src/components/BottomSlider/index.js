import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./style.css"

const animation = { duration: 50000, easing: (t) => t }

const BottomSlider = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 5,
    },
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  });

  const style={ fontSize: 14, fontWeight: 400, letterSpacing: 1.5 }

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1" style={style}>
        DELOITE AHM 2022
      </div>
      <div className="keen-slider__slide number-slide2" style={style}>
        DELOITE AHM 2022
      </div>
      <div className="keen-slider__slide number-slide3" style={style}>
        DELOITE AHM 2022
      </div>
      <div className="keen-slider__slide number-slide4" style={style}>
        DELOITE AHM 2022
      </div>
      <div className="keen-slider__slide number-slide5" style={style}>
        DELOITE AHM 2022
      </div>
      <div className="keen-slider__slide number-slide6" style={style}>
        DELOITE AHM 2022
      </div>
    </div>
  );
};

export default BottomSlider;