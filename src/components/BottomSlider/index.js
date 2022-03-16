import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./style.css"
import { Box } from "@mui/material"

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

  const sx={ fontSize: 14, fontWeight: 400, letterSpacing: 1.5 }

  return (
    <Box ref={sliderRef} className="keen-slider">
      <Box className="keen-slider__slide number-slide1" sx={sx}>
        DELOITE AHM 2022
      </Box>
      <Box className="keen-slider__slide number-slide2" sx={sx}>
        DELOITE AHM 2022
      </Box>
      <Box className="keen-slider__slide number-slide3" sx={sx}>
        DELOITE AHM 2022
      </Box>
      <Box className="keen-slider__slide number-slide4" sx={sx}>
        DELOITE AHM 2022
      </Box>
      <Box className="keen-slider__slide number-slide5" sx={sx}>
        DELOITE AHM 2022
      </Box>
      <Box className="keen-slider__slide number-slide6" sx={sx}>
        DELOITE AHM 2022
      </Box>
    </Box>
  );
};

export default BottomSlider;